/*
 * 問題の表示
 *
 * 画面の部品（判定の説明、キー操作の案内、テーマ一覧、テーマごとの問題、図の拡大表示）を組み立てる。
 * 文言のうち試験に固有のもの（試験名・判定の選択肢・テーマ名）はすべて data/config.js から読む。
 *
 * 1問の枠は3つの領域に分ける：問題文（図を含む）／選択肢（ドラッグ＆ドロップは項目と分類先）／判定ボタン
 */
(function () {
  "use strict";

  var CLAMP_LINES = 3;   // 選択肢1つがこの行数を超えたら折りたたむ

  function el(tag, attrs, children) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") e.textContent = attrs[k];
      else if (k === "className") e.className = attrs[k];
      else if (k.indexOf("on") === 0) e.addEventListener(k.slice(2), attrs[k]);
      else if (attrs[k] !== null && attrs[k] !== undefined && attrs[k] !== false) e.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) e.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return e;
  }

  var Render = {};

  // 判定の色は並び順で付ける（jk-0, jk-1, …）。既定の選択肢は jk-default
  function judgeClass(j, i) { return j.default ? "jk-default" : "jk-" + i; }
  function defaultValue(config) {
    return (config.judgments.filter(function (x) { return x.default; })[0] || {}).value;
  }

  // 判定の意味（画面上部に常に表示）
  Render.legend = function (container, config) {
    container.innerHTML = "";
    config.judgments.forEach(function (j, i) {
      container.appendChild(el("div", { className: "legend-item " + judgeClass(j, i) }, [
        el("dt", { text: j.label }),
        el("dd", { text: j.help + (j.default ? "（初期値）" : "") })
      ]));
    });
  };

  // キー操作の案内（PCだけ表示）
  Render.keyhint = function (container, config) {
    var keys = config.judgments.map(function (j, i) { return (i + 1) + "＝" + j.label; }).join("、");
    container.textContent = "パソコンではキーボードでも判定できます：" + keys + "（押すと次の問題へ）／ ↑↓ で問題を移動";
  };

  Render.status = function (container, state, config) {
    var done = state.data.themes_completed.length;
    var total = config.themes.length;
    var marked = Object.keys(state.data.answers).length;
    container.innerHTML = "";
    container.appendChild(el("span", { className: "stat" + (done === total ? " complete" : "") }, [
      "確認済みテーマ ", el("b", { text: done + " / " + total })
    ]));
    container.appendChild(el("span", { className: "stat" }, ["選んだ問題 ", el("b", { text: String(marked) }), " 問"]));
    container.appendChild(state.storageOk
      ? el("span", { className: "stat autosave", text: "回答は自動で保存されています" })
      : el("span", { className: "stat warn", text: "このブラウザでは自動保存できません" }));
  };

  // テーマ一覧（進捗つき）
  Render.themeNav = function (container, config, state, byTheme, currentId, onSelect) {
    container.innerHTML = "";
    container.appendChild(el("h2", { text: "テーマ一覧" }));
    var list = el("ol", { className: "theme-list" });
    config.themes.forEach(function (t, i) {
      var qs = byTheme[t.id] || [];
      var marked = qs.filter(function (q) { return state.data.answers[q.qid]; }).length;
      var done = state.isThemeDone(t.id);
      var btn = el("button", {
        type: "button",
        className: "theme-link" + (t.id === currentId ? " current" : "") + (done ? " done" : ""),
        "aria-current": t.id === currentId ? "true" : null,
        onclick: function () { onSelect(t.id); }
      }, [
        el("span", { className: "theme-check", "aria-hidden": "true", text: done ? "✓" : String(i + 1) }),
        el("span", { className: "theme-name", text: t.name }),
        el("span", { className: "theme-meta", text: qs.length + "問" + (marked ? "・選択 " + marked : "") })
      ]);
      list.appendChild(el("li", {}, [btn]));
    });
    container.appendChild(list);
  };

  // 事前アンケート：config.profile の質問から組み立てる。変更はすぐ state に入る
  Render.profile = function (container, config, state) {
    container.innerHTML = "";
    var prof = config.profile;
    if (!prof || !prof.questions || !prof.questions.length) { container.hidden = true; return; }
    container.hidden = false;
    container.appendChild(el("h2", { text: prof.title || "事前アンケート" }));
    container.appendChild(el("p", { className: "hint", text: "問題の判定の前にお答えください（あとから入力しても構いません）。" }));
    prof.questions.forEach(function (q, qi) {
      var box = el("fieldset", { className: "pq pq-" + q.type });
      box.appendChild(el("legend", {}, [
        (qi + 1) + ". " + q.label,
        el("span", { className: q.required ? "req" : "opt", text: q.required ? "必須" : "任意" })
      ]));
      var name = "pq-" + q.id;
      if (q.type === "multi") {
        var cur = state.getProfile(q.id) || { values: [], other_text: "" };
        var wrap = el("div", { className: "pq-options" });
        var otherInput = null;
        var update = function () {
          var vals = Array.prototype.filter.call(wrap.querySelectorAll("input[type=checkbox]"), function (c) { return c.checked; })
            .map(function (c) { return c.value; });
          var text = otherInput ? otherInput.value : "";
          if (otherInput) otherInput.disabled = !vals.some(function (v) { return v === otherInput.getAttribute("data-for"); });
          state.setProfile(q.id, vals.length || text ? { values: vals, other_text: text } : null);
        };
        q.options.forEach(function (o) {
          var cb = el("input", { type: "checkbox", name: name, value: o.value, onchange: update });
          cb.checked = cur.values.indexOf(o.value) >= 0;
          var label = el("label", { className: "pq-choice" }, [cb, " " + o.label]);
          if (o.free_text) {
            otherInput = el("input", { type: "text", className: "pq-other", "data-for": o.value, placeholder: "内容を記入", oninput: update });
            otherInput.value = cur.other_text || "";
            otherInput.disabled = !cb.checked;
            label = el("div", { className: "pq-choice-wrap" }, [label, otherInput]);
          }
          wrap.appendChild(label);
        });
        box.appendChild(wrap);
      } else if (q.type === "single") {
        var curS = state.getProfile(q.id);
        var wrapS = el("div", { className: "pq-options" });
        q.options.forEach(function (o) {
          var rb = el("input", { type: "radio", name: name, value: o.value, onchange: function () { state.setProfile(q.id, o.value); } });
          rb.checked = curS === o.value;
          wrapS.appendChild(el("label", { className: "pq-choice" }, [rb, " " + o.label]));
        });
        if (!q.required) {
          wrapS.appendChild(el("button", { type: "button", className: "linklike small", text: "選択を外す", onclick: function () {
            Array.prototype.forEach.call(wrapS.querySelectorAll("input"), function (x) { x.checked = false; });
            state.setProfile(q.id, null);
          } }));
        }
        box.appendChild(wrapS);
      } else if (q.type === "ratio") {
        var curR = state.getProfile(q.id) || {};
        var sumLine = el("p", { className: "pq-sum", role: "status" });
        var selects = [];
        var refresh = function () {
          var v = {}, filled = 0, sum = 0;
          selects.forEach(function (sel) {
            if (sel.value !== "") { v[sel.name] = parseInt(sel.value, 10); filled++; sum += v[sel.name]; }
          });
          state.setProfile(q.id, filled ? v : null);
          var unit = q.unit || "";
          if (!filled) { sumLine.textContent = "合計 " + q.total + unit + " になるように選んでください"; sumLine.className = "pq-sum"; }
          else if (sum === q.total && filled === selects.length) { sumLine.textContent = "合計 " + sum + unit + "（OK）"; sumLine.className = "pq-sum ok"; }
          else { sumLine.textContent = "合計 " + sum + unit + "：" + q.total + unit + " になるように選んでください" + (filled < selects.length ? "（未選択あり）" : ""); sumLine.className = "pq-sum ng"; }
        };
        var grid = el("div", { className: "pq-ratio" });
        q.items.forEach(function (it) {
          var sel = el("select", { name: it.id, onchange: refresh, "aria-label": it.label });
          sel.appendChild(el("option", { value: "", text: "選択" }));
          for (var n = (q.min || 0); n <= (q.max === undefined ? q.total : q.max); n++) {
            sel.appendChild(el("option", { value: String(n), text: n + (q.unit || "") }));
          }
          sel.value = curR[it.id] === undefined ? "" : String(curR[it.id]);
          selects.push(sel);
          grid.appendChild(el("label", { className: "pq-ratio-item" }, [el("span", { text: it.label }), sel]));
        });
        box.appendChild(grid);
        box.appendChild(sumLine);
        refresh();
      }
      container.appendChild(box);
    });
  };

  // SIM の問題文を「前置き」と「タスクごと」に分ける（原文はそのまま。分け方だけ）
  //   「タスク1.」「Task 1」で始まる行ごとに分ける。それがなければ「タスク」の見出しの後の「1.」「2.」の行ごとに分ける
  Render.splitSimTasks = function (text) {
    var lines = String(text).split("\n");
    var starts = [];
    lines.forEach(function (l, i) { if (/^\s*(タスク|Task)\s*\d+/i.test(l)) starts.push(i); });
    if (!starts.length) {
      var head = -1;
      lines.forEach(function (l, i) { if (head < 0 && /^\s*(タスク|Task)\s*$/i.test(l)) head = i; });
      if (head >= 0) lines.forEach(function (l, i) { if (i > head && /^\s*\d+\s*[.．]\s*\S/.test(l)) starts.push(i); });
    }
    if (!starts.length) return { preamble: text, tasks: [] };
    var trim = function (arr) { return arr.join("\n").replace(/^\n+|\s+$/g, ""); };
    var tasks = starts.map(function (s, k) { return trim(lines.slice(s, k + 1 < starts.length ? starts[k + 1] : lines.length)); });
    return { preamble: trim(lines.slice(0, starts[0])), tasks: tasks };
  };

  // メニューのテーマ一覧（テーマ名・問題数・選んだ問題数・確認済み）
  Render.themeMenu = function (container, config, state, byTheme, currentId, onSelect) {
    container.innerHTML = "";
    config.themes.forEach(function (t, i) {
      var qs = byTheme[t.id] || [];
      var marked = qs.filter(function (q) { return state.data.answers[q.qid]; }).length;
      var done = state.isThemeDone(t.id);
      container.appendChild(el("li", {}, [el("button", {
        type: "button",
        className: "menu-item" + (t.id === currentId ? " current" : "") + (done ? " done" : ""),
        "aria-current": t.id === currentId ? "true" : null,
        onclick: function () { onSelect(t.id); }
      }, [
        el("span", { className: "menu-check", "aria-label": done ? "確認済み" : "未確認", text: done ? "✓" : String(i + 1) }),
        el("span", { className: "menu-name", text: t.name }),
        el("span", { className: "menu-meta" }, [
          el("span", { text: qs.length + "問" }),
          el("span", { className: "menu-marked" + (marked ? " on" : ""), text: "選択 " + marked })
        ])
      ])]));
    });
  };

  // 1テーマ分の問題
  Render.theme = function (container, config, state, theme, questions, nav, onActivate) {
    container.innerHTML = "";
    var idx = config.themes.indexOf(theme);
    container.appendChild(el("div", { className: "theme-head" }, [
      el("h2", { text: (idx + 1) + ". " + theme.name }),
      el("p", { className: "theme-count", text: questions.length + " 問。当てはまる問題に " + config.judgments.filter(function (j) { return !j.default; }).map(function (j) { return "「" + j.label + "」"; }).join("・") + " を付けてください。" })
    ]));

    questions.forEach(function (q, i) {
      container.appendChild(Render.question(config, state, q, i + 1, i, onActivate));
    });

    var doneBox = el("input", {
      type: "checkbox", id: "theme-done",
      onchange: function (e) { state.setThemeDone(theme.id, e.target.checked); }
    });
    doneBox.checked = state.isThemeDone(theme.id);
    container.appendChild(el("div", { className: "theme-done panel", id: "theme-done-panel" }, [
      el("label", { for: "theme-done" }, [doneBox, " このテーマを最後まで確認した"]),
      el("p", { className: "hint", text: "チェックしたテーマは、選ばなかった問題を「" + labelOf(config, defaultValue(config)) + "」として集計します。チェックしていないテーマは未回答として扱います。" })
    ]));

    container.appendChild(el("div", { className: "theme-pager" }, [
      nav.prev ? el("button", { type: "button", onclick: nav.prev.go, text: "← " + nav.prev.name }) : el("span"),
      nav.next ? el("button", { type: "button", className: "primary", onclick: nav.next.go, text: nav.next.name + " →" }) : el("span")
    ]));
  };

  Render.question = function (config, state, q, number, index, onActivate) {
    var card = el("article", { className: "question" + (q.type === "sim" ? " sim" : ""), id: "q-" + q.qid, "data-index": index });
    card.addEventListener("click", function () { onActivate(index, false); });

    // 問題文の領域（図もここ）
    // 1行目は問題番号と管理番号だけ。問題文はその下から始める
    var body = el("div", { className: "q-body" }, [
      el("div", { className: "q-head" }, [
        el("span", { className: "q-num", text: "問" + number }),
        el("span", { className: "q-id", text: q.qid })
      ]),
      q.title ? el("p", { className: "q-title", text: q.title }) : null
    ]);
    // 問題文。SIM は前置きを枠の外、タスクを1つずつ枠で囲む
    var simParts = q.type === "sim" ? Render.splitSimTasks(q.question) : null;
    var textNode = el("p", { className: "q-text", text: simParts ? simParts.preamble : q.question });
    if (!simParts || simParts.preamble) body.appendChild(textNode);
    else { textNode = el("span"); body.appendChild(textNode); }
    if (simParts && simParts.tasks.length) {
      body.appendChild(el("ul", { className: "choices sim-tasks" }, simParts.tasks.map(function (tk) { return el("li", { text: tk }); })));
    }
    // SIM は原本と同じく構成図を問題文の前に置く
    (q.figures || (q.figure ? [q.figure] : [])).forEach(function (src, k, all) {
      var target = q.type === "sim" ? { insert: function (n) { body.insertBefore(n, textNode); } } : { insert: function (n) { body.appendChild(n); } };
      target.insert(el("button", {
        type: "button", className: "figure", title: "クリックで拡大",
        onclick: function (e) { e.stopPropagation(); Render.openLightbox(src); }
      }, [
        el("img", { src: src, alt: "問 " + number + " の図" + (all.length > 1 ? (k + 1) : ""), loading: "lazy" }),
        el("span", { className: "zoom-hint", text: "🔍 拡大" })
      ]));
    });

    var main = el("div", { className: "q-main" }, [body]);

    // 選択肢の領域
    if (q.dnd) {
      main.appendChild(Render.dnd(q.dnd));
    } else if (q.choices && q.choices.length) {
      // 短い選択肢だけの問題は、PCでは2列に並べて縦の長さを詰める
      var short = q.type !== "sim" && q.choices.every(function (c) { return c.indexOf("\n") < 0 && c.length <= 34; });
      var list = el("ul", { className: "choices" + (short ? " short" : "") });
      q.choices.forEach(function (c) { list.appendChild(choiceItem(c, q.type === "sim")); });
      main.appendChild(el("div", { className: "q-choices" }, [list]));
    }

    // 判定の領域
    var group = el("div", { className: "judgments", role: "radiogroup", "aria-label": "問 " + number + " の判定" });
    var current = state.getAnswer(q.qid);
    config.judgments.forEach(function (j, i) {
      var b = el("button", {
        type: "button", role: "radio",
        className: "judge " + judgeClass(j, i) + (current === j.value ? " selected" : ""),
        "aria-checked": current === j.value ? "true" : "false",
        "data-value": j.value,
        title: j.help,
        onclick: function (e) {
          e.stopPropagation();
          Render.setJudgment(card, state, q.qid, j.value, config);
          onActivate(index, false);
        }
      }, [el("span", { className: "kbd", text: String(i + 1) }), j.label]);
      group.appendChild(b);
    });
    card.classList.toggle("marked", current !== defaultValue(config));
    card.appendChild(main);
    card.appendChild(el("div", { className: "q-judge" }, [group]));
    return card;
  };

  // 判定を記録して、ボタンの見た目を変える（クリックでもキーでも同じ）
  Render.setJudgment = function (card, state, qid, value, config) {
    state.setAnswer(qid, value);
    Array.prototype.forEach.call(card.querySelectorAll(".judge"), function (x) {
      var on = x.getAttribute("data-value") === value;
      x.classList.toggle("selected", on);
      x.setAttribute("aria-checked", on ? "true" : "false");
    });
    card.classList.toggle("marked", value !== defaultValue(config));
  };

  // 長い選択肢（設定コマンドなど）は最初の数行だけ表示し、「続きを表示」で広げる
  function choiceItem(text, noClamp) {
    var lines = String(text).split("\n");
    if (noClamp || lines.length <= CLAMP_LINES) return el("li", { text: text });
    var shown = el("span", { text: lines.slice(0, CLAMP_LINES).join("\n") });
    var rest = el("span", { className: "rest", text: "\n" + lines.slice(CLAMP_LINES).join("\n") });
    rest.hidden = true;
    var more = el("button", {
      type: "button", className: "more", text: "続きを表示（あと " + (lines.length - CLAMP_LINES) + " 行）",
      onclick: function (e) {
        e.stopPropagation();
        rest.hidden = !rest.hidden;
        more.textContent = rest.hidden ? "続きを表示（あと " + (lines.length - CLAMP_LINES) + " 行）" : "折りたたむ";
      }
    });
    return el("li", {}, [shown, rest, more]);
  }

  // ドラッグ＆ドロップ：左に項目、右に分類先（空の枠）。正解の対応は表示しない
  Render.dnd = function (dnd) {
    var left = el("div", { className: "dnd-col dnd-items" }, [el("div", { className: "dnd-caption", text: "項目" })]);
    dnd.items.forEach(function (it) { left.appendChild(el("div", { className: "dnd-item", text: it })); });
    var right = el("div", { className: "dnd-col dnd-targets" }, [el("div", { className: "dnd-caption", text: "回答エリア" })]);
    dnd.targets.forEach(function (t) {
      var box = el("div", { className: "dnd-target" }, [el("div", { className: "dnd-label", text: t.label })]);
      for (var i = 0; i < (t.slots || 1); i++) box.appendChild(el("div", { className: "dnd-slot" }));
      right.appendChild(box);
    });
    return el("div", { className: "q-choices dnd" }, [left, right]);
  };

  // 図の拡大表示。最初は原寸（横スクロール可）で開き、ボタンで画面幅に合わせる表示に切り替える
  Render.openLightbox = function (src) {
    var box = document.getElementById("lightbox");
    var img = document.getElementById("lightbox-img");
    img.src = src;
    box.classList.remove("fit");
    document.getElementById("lightbox-fit").textContent = "画面に合わせる";
    box.hidden = false;
    document.body.classList.add("no-scroll");
    document.getElementById("lightbox-close").focus();
  };
  Render.closeLightbox = function () {
    document.getElementById("lightbox").hidden = true;
    document.body.classList.remove("no-scroll");
  };
  Render.toggleFit = function () {
    var box = document.getElementById("lightbox");
    var fit = box.classList.toggle("fit");
    document.getElementById("lightbox-fit").textContent = fit ? "原寸で見る" : "画面に合わせる";
  };

  function labelOf(config, value) {
    var j = config.judgments.filter(function (x) { return x.value === value; })[0];
    return j ? j.label : value;
  }

  Render.el = el;
  window.SurveyRender = Render;
})();
