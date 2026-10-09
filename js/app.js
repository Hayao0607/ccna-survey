/*
 * 全体のつなぎ
 *
 * data/config.js（SURVEY_CONFIG）と data/questions.js（SURVEY_QUESTIONS）を読み、
 * 状態（state.js）・表示（render.js）・保存アダプタ（adapters.js と adapters/*.js）を結びつける。
 * メニュー（右上の ≡）：テーマ一覧、保存したファイルの読み込み、やり直し。
 * キー操作：数字キー（1, 2, 3 …＝判定の並び順）で今の問題を判定して次の問題へ。↑↓ で問題を移動。
 */
(function () {
  "use strict";

  var config = window.SURVEY_CONFIG;
  var questions = window.SURVEY_QUESTIONS;
  var R = window.SurveyRender;

  function showLoadError(msg) {
    var box = document.getElementById("load-error");
    box.textContent = msg;
    box.hidden = false;
    document.querySelector("main").hidden = true;
    document.getElementById("savebar").hidden = true;
  }

  if (!config || !questions) {
    showLoadError("問題データ（data/config.js・data/questions.js）が見つかりません。" +
      "配布用フォルダを丸ごと受け取っているか確認してください（作成者は scripts/05_build_survey.py を実行）。");
    return;
  }

  var state = new SurveyState(config, questions);
  var byTheme = {};
  config.themes.forEach(function (t) { byTheme[t.id] = []; });
  questions.forEach(function (q) { (byTheme[q.theme] = byTheme[q.theme] || []).push(q); });
  var currentTheme = null;
  var activeIndex = 0;
  var adaptersReady = false;

  function init() {
    document.title = config.title;
    document.getElementById("title").textContent = config.title;
    R.legend(document.getElementById("legend"), config);
    R.keyhint(document.getElementById("keyhint"), config);

    var notice = state.load();
    bindRespondentForm();
    fillRespondentForm();
    renderProfile();
    var saved = null;
    try { saved = window.localStorage.getItem(config.storage_key + ":current_theme"); } catch (e) { /* 使えなくてもよい */ }
    currentTheme = byTheme[saved] ? saved : config.themes[0].id;

    state.onChange(refreshStatus);
    renderAll();
    if (notice) setMessage(notice);

    window.addEventListener("beforeunload", function () { state.flush(); });
    document.getElementById("lightbox-close").addEventListener("click", R.closeLightbox);
    document.getElementById("lightbox-fit").addEventListener("click", R.toggleFit);
    document.getElementById("lightbox").addEventListener("click", function (e) {
      if (e.target.id === "lightbox") R.closeLightbox();
    });
    document.getElementById("reset-button").addEventListener("click", function () { closeMenu(); resetAll(); });
    var fileInput = document.getElementById("load-file");
    document.getElementById("load-button").addEventListener("click", function () { fileInput.value = ""; fileInput.click(); });
    fileInput.addEventListener("change", function () {
      if (fileInput.files && fileInput.files[0]) { closeMenu(); loadFromFile(fileInput.files[0]); }
    });
    document.getElementById("menu-button").addEventListener("click", openMenu);
    document.getElementById("menu-close").addEventListener("click", closeMenu);
    document.getElementById("menu-overlay").addEventListener("click", closeMenu);
    document.addEventListener("keydown", onKey);

    SurveyAdapters.loadAll(config.adapters).then(function () { adaptersReady = true; renderSubmit(); });
  }

  function bindRespondentForm() {
    var form = document.getElementById("respondent-form");
    form.addEventListener("input", function (e) {
      var t = e.target;
      if (t.name === "name" || t.name === "exam_date") state.setRespondent(t.name, t.value);
      if (t.name === "result") state.setRespondent("result", t.value || null);
    });
    form.addEventListener("submit", function (e) { e.preventDefault(); });
  }

  function renderProfile() {
    R.profile(document.getElementById("profile-panel"), config, state);
  }

  function fillRespondentForm() {
    var form = document.getElementById("respondent-form");
    var r = state.data.respondent;
    form.elements.name.value = r.name;
    form.elements.exam_date.value = r.exam_date;
    Array.prototype.forEach.call(form.elements.result, function (radio) {
      radio.checked = radio.value === (r.result || "");
    });
  }

  // ---------- テーマ一覧のメニュー ----------
  function openMenu() {
    refreshStatus();
    document.getElementById("theme-menu").hidden = false;
    document.getElementById("menu-overlay").hidden = false;
    document.getElementById("menu-button").setAttribute("aria-expanded", "true");
    var cur = document.querySelector("#menu-list .current");
    if (cur) cur.scrollIntoView({ block: "nearest" });
    document.getElementById("menu-close").focus();
  }
  function closeMenu() {
    document.getElementById("theme-menu").hidden = true;
    document.getElementById("menu-overlay").hidden = true;
    document.getElementById("menu-button").setAttribute("aria-expanded", "false");
  }
  function menuOpen() { return !document.getElementById("theme-menu").hidden; }

  function selectTheme(id, scroll) {
    currentTheme = id;
    activeIndex = 0;
    try { window.localStorage.setItem(config.storage_key + ":current_theme", id); } catch (e) { /* 使えなくてもよい */ }
    renderAll();
    if (scroll) document.getElementById("theme-view").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderAll() {
    var themes = config.themes;
    var i = themes.map(function (t) { return t.id; }).indexOf(currentTheme);
    var theme = themes[i];
    var nav = {
      prev: i > 0 ? { name: themes[i - 1].name, go: function () { selectTheme(themes[i - 1].id, true); } } : null,
      next: i < themes.length - 1 ? { name: themes[i + 1].name, go: function () { selectTheme(themes[i + 1].id, true); } } : null
    };
    R.theme(document.getElementById("theme-view"), config, state, theme, byTheme[theme.id] || [], nav, setActive);
    setActive(activeIndex, false);
    refreshStatus();
  }

  // 判定やチェックが変わったときに、テーマ一覧と下部のバーだけ描き直す
  function refreshStatus() {
    R.themeNav(document.getElementById("theme-nav"), config, state, byTheme, currentTheme, function (id) { selectTheme(id, true); });
    R.themeMenu(document.getElementById("menu-list"), config, state, byTheme, currentTheme, function (id) { closeMenu(); selectTheme(id, true); });
    var idx = config.themes.map(function (t) { return t.id; }).indexOf(currentTheme);
    document.getElementById("current-theme").textContent = "表示中：" + (idx + 1) + ". " + config.themes[idx].name;
    R.status(document.getElementById("save-summary"), state, config);
    renderSubmit();
  }

  // ---------- キー操作 ----------
  function cards() { return document.querySelectorAll("#theme-view .question"); }

  function setActive(index, scroll) {
    var list = cards();
    if (!list.length) return;
    activeIndex = Math.max(0, Math.min(index, list.length - 1));
    Array.prototype.forEach.call(list, function (c, i) { c.classList.toggle("active", i === activeIndex); });
    if (scroll) list[activeIndex].scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function onKey(e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (menuOpen()) {
      if (e.key === "Escape") closeMenu();
      return;
    }
    if (!document.getElementById("lightbox").hidden) {
      if (e.key === "Escape") R.closeLightbox();
      return;
    }
    var tag = (e.target && e.target.tagName) || "";
    if (/^(INPUT|TEXTAREA|SELECT)$/.test(tag)) return;
    var list = cards();
    if (!list.length) return;
    var n = parseInt(e.key, 10);
    if (n >= 1 && n <= config.judgments.length) {
      e.preventDefault();
      var card = list[activeIndex];
      var q = (byTheme[currentTheme] || [])[activeIndex];
      R.setJudgment(card, state, q.qid, config.judgments[n - 1].value, config);
      if (activeIndex < list.length - 1) {
        setActive(activeIndex + 1, true);
      } else {
        document.getElementById("theme-done-panel").scrollIntoView({ behavior: "smooth", block: "center" });
      }
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setActive(activeIndex + (e.key === "ArrowDown" ? 1 : -1), true);
    }
  }

  // ---------- 保存・やり直し ----------
  // 提出ボタン：全テーマを確認済みにし、事前アンケートの必須項目もそろったら目立つ「回答を提出する」ボタン。
  // それまでは残っていること（あと○テーマ／事前アンケートが未入力）と、目立たない「途中までの回答を保存する」リンク
  function renderSubmit() {
    var box = document.getElementById("save-buttons");
    if (!adaptersReady) return;
    box.innerHTML = "";
    var adapters = SurveyAdapters.list();
    if (!adapters.length) {
      box.textContent = "提出の方法が読み込めませんでした（adapters フォルダを確認してください）。";
      return;
    }
    // 既定のアダプタを先頭に
    adapters.sort(function (a, b) { return (b.id === config.default_adapter) - (a.id === config.default_adapter); });
    var remaining = config.themes.length - state.data.themes_completed.length;
    var profileLeft = state.profileProblems();
    if (remaining === 0 && profileLeft.length === 0) {
      adapters.forEach(function (ad, i) {
        box.appendChild(R.el("button", {
          type: "button", className: i === 0 ? "primary submit" : "",
          title: ad.description || "", text: "回答を提出する（" + ad.label + "）",
          onclick: function () { submit(ad, false); }
        }));
      });
      return;
    }
    var left = [];
    if (remaining > 0) left.push("あと " + remaining + " テーマ");
    if (profileLeft.length) left.push("事前アンケートが未入力（" + profileLeft.length + " 項目）");
    box.appendChild(R.el("button", {
      type: "button", className: "remaining", title: profileLeft.length ? "未入力：" + profileLeft.join("／") : "",
      text: "提出まで：" + left.join("／"),
      onclick: function () {
        // 押すと残っているところへ移動する（事前アンケートを優先）
        if (profileLeft.length) document.getElementById("profile-panel").scrollIntoView({ behavior: "smooth" });
        else {
          var next = config.themes.filter(function (t) { return !state.isThemeDone(t.id); })[0];
          if (next) selectTheme(next.id, true);
        }
      }
    }));
    box.appendChild(R.el("button", {
      type: "button", className: "linklike", title: "今の回答をファイルに保存します（あとで読み込んで続きを回答できます）",
      text: "途中までの回答を保存する", onclick: function () { submit(adapters[0], true); }
    }));
  }

  // partial: true は途中保存（確認なし、ファイル名「途中_…」）
  function submit(adapter, partial) {
    var problems = state.respondentProblems();
    if (problems.length) {
      setMessage("回答者情報の " + problems.join("・") + " を入力してください。", true);
      document.getElementById("respondent-panel").scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (!partial) {
      var pp = state.profileProblems();
      if (pp.length && !window.confirm("事前アンケートに未入力・確認が必要な項目があります。\n\n・" + pp.join("\n・") +
          "\n\nこのまま提出しますか？（「キャンセル」で入力に戻ります）")) {
        document.getElementById("profile-panel").scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    state.flush();
    var response = state.buildResponse(partial);
    var fileName = state.fileName(partial);
    Promise.resolve()
      .then(function () { return adapter.save(response, { config: config, fileName: fileName, partial: !!partial }); })
      .then(function (result) {
        var ok = !(result && result.ok === false);
        var msg = partial
          ? (ok ? "途中までの回答を " + fileName + " に保存しました。「≡」メニューから読み込むと続きを回答できます。" : (result && result.message) || "保存できませんでした。")
          : (result && result.message) || "提出しました。";
        setMessage(msg, !ok);
      })
      .catch(function (err) {
        setMessage((partial ? "保存" : "提出") + "できませんでした: " + (err && err.message ? err.message : err), true);
      });
  }

  // 保存したファイル（途中保存・提出用）を読み込んで続きから回答する
  function loadFromFile(file) {
    var reader = new FileReader();
    reader.onload = function () {
      var data;
      try { data = JSON.parse(reader.result); } catch (e) {
        setMessage("ファイルを読み込めませんでした（回答ファイルではないようです）。", true);
        return;
      }
      if (state.hasData() && !window.confirm("今の画面に入力中の回答があります。\n読み込んだファイルの内容で上書きしてよろしいですか？")) return;
      try {
        var res = state.restore(data);
        fillRespondentForm();
        renderProfile();
        activeIndex = 0;
        renderAll();
        setMessage(file.name + " を読み込みました（選んだ問題 " + res.answers + " 問、確認済みテーマ " + res.themes + "）。続きから回答できます。" +
          (res.dropped ? "（問題データにない回答 " + res.dropped + " 件は除きました）" : ""));
      } catch (e) {
        setMessage("読み込めませんでした: " + e.message, true);
      }
    };
    reader.onerror = function () { setMessage("ファイルを読み込めませんでした。", true); };
    reader.readAsText(file, "utf-8");
  }

  function resetAll() {
    var ok = window.confirm("このブラウザに途中保存されている回答をすべて消します。\n" +
      "（名前・受験日・合否、事前アンケート、すべての判定、確認済みテーマ）\n\n" +
      "回答ファイルをまだ保存していない場合は、先に保存してください。\n消してもよろしいですか？");
    if (!ok) return;
    state.reset();
    fillRespondentForm();
    renderProfile();
    currentTheme = config.themes[0].id;
    activeIndex = 0;
    renderAll();
    setMessage("回答をすべて消しました。次の人が最初から回答できます。");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  var messageTimer = null;
  function setMessage(text, isError) {
    var m = document.getElementById("save-message");
    m.textContent = text;
    m.className = isError ? "error-text" : "ok-text";
    clearTimeout(messageTimer);
    messageTimer = setTimeout(function () { m.textContent = ""; }, isError ? 12000 : 8000);
  }

  init();
})();
