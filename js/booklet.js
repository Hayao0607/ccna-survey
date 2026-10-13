/*
 * 直前問題集（ブラウザの印刷で PDF にする）
 *
 * 版の設定に booklet があるとき（①版など）だけ使う。データは data/booklet.js（window.SURVEY_BOOKLET）で、
 * その版の書き出し先にだけある（全冊版・公開用にはない）。
 *
 * 構成：1ページ目にタイトル・受験日 →「問題編」（正解は一切出さない）→ 新しいページから「解答編」→ 最後に画像だけのページ。
 *   問題編：選択問題は問題文・図・選択肢、ドラッグ＆ドロップは項目と分類先の空欄（紙に書き込んで解く）、SIM は構成図・前置き・タスク
 *   解答編：選択問題の正解の一覧表（複数列）、ドラッグ＆ドロップの正しい対応の表、SIM の解答の設定例（問題番号は問題編と同じ）
 * 組み立て方：
 *   1) その人が判定（出た・似た問題）を付けた問題を、原本の順に並べる（通し番号 問1… と SIM1…）
 *   2) 画面の外で A4 の本文の幅に並べて各問題の高さを測り、1問がページの途中で切れないようにページへ割り振る
 *      （1ページに収まらない長い問題だけは、部品（タスク・解答の行）の切れ目で次のページに続ける）
 *   3) #print-root に A4 のページを並べる。各ページの下に「ページ番号 / 総ページ数」、最後に画像だけのページ（番号なし）
 *   印刷用の CSS（style.css の @media print）で #print-root だけを印刷する。
 */
(function () {
  "use strict";

  var PAGE_W = 595.3, PAGE_H = 841.9;            // A4（pt）
  var PAD_TOP = 40, PAD_X = 42, PAD_BOTTOM = 48;  // 本文の余白（pt）
  var GAP = 10;                                    // 問題と問題の間（pt）
  var PX = 96 / 72;                                // pt → CSS px
  var BODY_H = (PAGE_H - PAD_TOP - PAD_BOTTOM) * PX;

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined && text !== null) e.textContent = text;
    return e;
  }

  var B = {};
  var loading = null;

  B.load = function () {
    if (window.SURVEY_BOOKLET) return Promise.resolve();
    if (loading) return loading;
    loading = new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.src = "data/booklet.js";
      s.onload = function () { window.SURVEY_BOOKLET ? resolve() : reject(new Error("booklet.js が空です")); };
      s.onerror = function () { reject(new Error("data/booklet.js がありません")); };
      document.head.appendChild(s);
    });
    return loading;
  };

  function data() { return window.SURVEY_BOOKLET; }

  B.judgmentLabels = function (config) {
    var js = (data() && data().judgments) || ["seen", "similar"];
    return config.judgments.filter(function (j) { return js.indexOf(j.value) >= 0; }).map(function (j) { return j.label; });
  };

  // 判定を付けた問題の qid（原本の順）
  B.selected = function (state) {
    var d = data();
    if (!d) return [];
    return d.order.filter(function (qid) { return d.judgments.indexOf(state.data.answers[qid]) >= 0; });
  };

  B.fileTitle = function (date) {
    return (data().file_prefix || data().title) + "_" + date;
  };

  function headChunk(label, title) {
    var head = el("div", "bk-head");
    head.appendChild(el("span", "bk-num", label));
    if (title) head.appendChild(el("span", "bk-title", "　" + title));
    var c = el("div", "bk-chunk");
    c.appendChild(head);
    return c;
  }

  function figureNode(item) {
    var p = el("p", "bk-fig");
    var img = document.createElement("img");
    img.src = item.figure.src;
    img.style.width = item.figure.w + "pt";
    img.style.height = item.figure.h + "pt";
    p.appendChild(img);
    return p;
  }

  // ---------- 問題編の1問（正解は一切出さない）。長い問題はこの部品の切れ目で次のページに続ける ----------
  function problemChunks(item, label) {
    var chunks = [];
    var first = headChunk(label, item.title);
    if (item.sim) {
      if (item.figure) first.appendChild(figureNode(item));
      if (item.preamble) first.appendChild(el("p", "bk-text", item.preamble));
      chunks.push(first);
      item.tasks.forEach(function (t) {
        var c = el("div", "bk-chunk");
        c.appendChild(el("div", "bk-task", t));
        chunks.push(c);
      });
      return chunks;
    }
    first.appendChild(el("p", "bk-text", item.text + (item.multi_note ? " " + item.multi_note : "")));
    if (item.dnd_note) first.appendChild(el("p", "bk-text bk-note", item.dnd_note));
    if (item.figure) first.appendChild(figureNode(item));
    chunks.push(first);
    var body = el("div", "bk-chunk");
    if (item.dnd) {
      // 左に項目、右に分類先（または順番）と入る数だけの空欄
      var grid = el("div", "bk-dnd");
      var left = el("div", "bk-dnd-col");
      left.appendChild(el("div", "bk-dnd-cap", "項目"));
      item.dnd.items.forEach(function (t) { left.appendChild(el("div", "bk-choice", t)); });
      var right = el("div", "bk-dnd-col");
      right.appendChild(el("div", "bk-dnd-cap", "回答エリア"));
      item.dnd.targets.forEach(function (t) {
        var tb = el("div", "bk-dnd-target");
        tb.appendChild(el("div", "bk-dnd-label", t.label));
        for (var i = 0; i < (t.slots || 1); i++) tb.appendChild(el("div", "bk-dnd-slot"));
        right.appendChild(tb);
      });
      grid.appendChild(left);
      grid.appendChild(right);
      body.appendChild(grid);
    } else {
      (item.choices || []).forEach(function (c) { body.appendChild(el("div", "bk-choice", c.t)); });
    }
    chunks.push(body);
    return chunks;
  }

  // 正解の記載がない問題：「原本に正解の記載なし（選ぶならA）」
  function noAnswerText(item) {
    var m = /（[^（）]*）\s*$/.exec(item.noans || "");
    return "原本に正解の記載なし" + (m ? m[0] : "");
  }

  // ---------- 解答編 ----------
  // 選択問題の正解の一覧表。COLS 列（問番号｜正解 の組）で、列ごとに上から下へ並べる。ROWS 行ずつのブロックに分ける
  var COLS = 4, ROWS = 20;
  function answerTableBlocks(entries) {
    var blocks = [];
    for (var start = 0; start < entries.length; start += COLS * ROWS) {
      var part = entries.slice(start, start + COLS * ROWS);
      var rows = Math.ceil(part.length / COLS);
      var tb = el("table", "bk-anskey");
      for (var r = 0; r < rows; r++) {
        var tr = el("tr");
        for (var c = 0; c < COLS; c++) {
          var e = part[c * rows + r];
          tr.appendChild(el("td", "k", e ? e.label : ""));
          tr.appendChild(el("td", "v" + (e && e.wide ? " wide" : ""), e ? e.value : ""));
        }
        tb.appendChild(tr);
      }
      var c0 = el("div", "bk-chunk");
      c0.appendChild(tb);
      blocks.push({ node: c0 });
    }
    return blocks;
  }

  function dndAnswerChunks(item, label) {
    var first = headChunk(label, null);
    var tb = el("table", "bk-table");
    var tr = el("tr");
    tr.appendChild(el("th", null, "分類先・対応先"));
    tr.appendChild(el("th", null, "項目"));
    tb.appendChild(tr);
    (item.pairs || []).forEach(function (p) {
      var r = el("tr");
      r.appendChild(el("td", null, p[0]));
      r.appendChild(el("td", null, p[1]));
      tb.appendChild(r);
    });
    if (!(item.pairs || []).length) first.appendChild(el("p", "bk-text", "原本に正解の記載なし"));
    else first.appendChild(tb);
    return [first];
  }

  function simAnswerChunks(item, label) {
    var chunks = [headChunk(label, item.title)];
    if (!item.config) {
      chunks[0].appendChild(el("p", "bk-text", "原本に解答の記載なし"));
      return chunks;
    }
    // 設定例は長いことがあるので、空行ごとのまとまりで分ける（1つのまとまりはページをまたがない）
    item.config.split(/\n\s*\n/).forEach(function (part, k, all) {
      var c = el("div", "bk-chunk");
      c.appendChild(el("pre", "bk-pre" + (k === 0 ? " first" : "") + (k === all.length - 1 ? " last" : ""), part));
      chunks.push(c);
    });
    return chunks;
  }

  function box(chunks, contTop, contBottom) {
    var b = el("div", "bk-q" + (contTop ? " cont-top" : "") + (contBottom ? " cont-bottom" : ""));
    chunks.forEach(function (c) { b.appendChild(c); });
    return b;
  }

  function waitImages(root) {
    var imgs = Array.prototype.slice.call(root.querySelectorAll("img"));
    return Promise.all(imgs.map(function (img) {
      return img.complete ? Promise.resolve() : new Promise(function (r) { img.onload = img.onerror = r; });
    }));
  }

  // 表紙：画像を縦横比を保ってページいっぱいに置き、画像の下の余白に受験日を重ねる
  function coverPage(c, examDate) {
    var pg = el("div", "bk-page bk-final bk-coverpage");
    var r = Math.min(PAGE_W / c.w, 296 / 25.4 * 72 / c.h);   // .bk-page の高さ（296mm）に合わせる
    var frame = el("div", "bk-cover-frame");
    frame.style.width = (c.w * r) + "pt";
    frame.style.height = (c.h * r) + "pt";
    var img = document.createElement("img");
    img.src = c.src;
    img.alt = "";
    frame.appendChild(img);
    var date = el("div", "bk-cover-date", "受験日：" + examDate);
    date.style.top = (c.date_top * 100) + "%";
    frame.appendChild(date);
    pg.appendChild(frame);
    return pg;
  }

  // ---------- 組み立て ----------
  B.build = function (state, config) {
    var d = data();
    var qids = B.selected(state);
    var measure = el("div", "bk-measure");
    measure.style.width = (PAGE_W - PAD_X * 2) + "pt";
    document.body.appendChild(measure);

    // ブロック（chunks＝枠で囲む問題、node＝枠なしの見出しや表、pageBreak＝ここから新しいページ）
    var blocks = [];
    blocks.push({ node: el("h2", "bk-section", "問題編"), keep: true });
    // SIM を先に、その後に選択問題・ドラッグ＆ドロップ（それぞれの中は①の原本の順）。番号はこの並びで振る
    var sims = qids.filter(function (q) { return d.items[q].sim; });
    var others = qids.filter(function (q) { return !d.items[q].sim; });
    var nq = 0, ns = 0, labels = {};
    sims.concat(others).forEach(function (qid) {
      var item = d.items[qid];
      labels[qid] = item.sim ? "SIM" + (++ns) : "問" + (++nq);
      blocks.push({ chunks: problemChunks(item, labels[qid]) });
    });
    blocks.push({ pageBreak: true });
    blocks.push({ node: el("h2", "bk-section", "解答編"), keep: true });
    var choiceKeys = others.filter(function (q) { return !d.items[q].dnd && !d.items[q].pairs; });
    var dnds = others.filter(function (q) { return d.items[q].dnd || d.items[q].pairs; });
    if (sims.length) {
      blocks.push({ node: el("h3", "bk-sub", "SIM"), keep: true });
      sims.forEach(function (q) { blocks.push({ chunks: simAnswerChunks(d.items[q], labels[q]) }); });
    }
    if (choiceKeys.length) {
      blocks.push({ node: el("h3", "bk-sub", "選択問題"), keep: true });
      answerTableBlocks(choiceKeys.map(function (q) {
        var it = d.items[q];
        var v = it.ans ? it.ans : noAnswerText(it);
        return { label: labels[q], value: v, wide: !it.ans };
      })).forEach(function (b) { blocks.push(b); });
    }
    if (dnds.length) {
      blocks.push({ node: el("h3", "bk-sub", "ドラッグ＆ドロップ"), keep: true });
      dnds.forEach(function (q) { blocks.push({ chunks: dndAnswerChunks(d.items[q], labels[q]) }); });
    }

    var fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    return fontsReady.then(function () {
      // 高さを測る（ブロック全体と、部品ごと）
      blocks.forEach(function (b) {
        if (b.pageBreak) return;
        if (!b.chunks) {
          measure.appendChild(b.node);
          b.h = b.node.getBoundingClientRect().height + GAP * PX;
          measure.removeChild(b.node);
          return;
        }
        var whole = box(b.chunks.map(function (c) { return c.cloneNode(true); }));
        measure.appendChild(whole);
        b.h = whole.getBoundingClientRect().height + GAP * PX;
        measure.removeChild(whole);
        if (b.h > BODY_H) {
          var shell = box([]);
          measure.appendChild(shell);
          b.shell = shell.getBoundingClientRect().height;
          measure.removeChild(shell);
          b.ch = b.chunks.map(function (c) {
            var x = c.cloneNode(true);
            var wrap = box([x]);
            measure.appendChild(wrap);
            var h = wrap.getBoundingClientRect().height - b.shell;
            measure.removeChild(wrap);
            return h;
          });
        }
      });
      document.body.removeChild(measure);

      // ページへ割り振る
      var pages = [[]], used = 0;
      function newPage() { pages.push([]); used = 0; }
      blocks.forEach(function (b, bi) {
        if (b.pageBreak) { if (used > 0) newPage(); pages[pages.length - 1].answerFirst = true; return; }
        // 見出しは次のブロック（の最初の部品）と同じページに置く
        var nx = blocks[bi + 1];
        if (b.keep && nx && !nx.pageBreak && used > 0) {
          var nh = nx.h > BODY_H ? (nx.shell + nx.ch[0]) : nx.h;
          if (used + b.h + nh > BODY_H) newPage();
        }
        if (b.h <= BODY_H) {
          if (used > 0 && used + b.h > BODY_H) newPage();
          pages[pages.length - 1].push(b.chunks ? box(b.chunks) : b.node);
          used += b.h;
          return;
        }
        // 1ページに収まらない問題：ページの先頭から始め、部品の切れ目で次のページへ続ける
        if (used > 0) newPage();
        var part = [], h = b.shell;
        b.chunks.forEach(function (c, k) {
          if (part.length && h + b.ch[k] > BODY_H) {
            pages[pages.length - 1].push(box(part, pages[pages.length - 1].contFlag, true));
            newPage();
            pages[pages.length - 1].contFlag = true;
            part = []; h = b.shell;
          }
          part.push(c); h += b.ch[k];
        });
        pages[pages.length - 1].push(box(part, pages[pages.length - 1].contFlag, false));
        used = h + GAP * PX;
      });

      var answerStart = 0;   // 問題編のページ数（解答編は次のページから）
      pages.forEach(function (content, i) { if (!answerStart && content.answerFirst) answerStart = i; });

      // 描く
      var root = document.getElementById("print-root");
      root.innerHTML = "";
      var total = pages.length;   // 表紙と最終ページの画像は番号を付けず、総ページ数にも含めない
      if (d.cover) root.appendChild(coverPage(d.cover, state.data.respondent.exam_date));
      pages.forEach(function (content, i) {
        var pg = el("div", "bk-page");
        var bodyDiv = el("div", "bk-body");
        content.forEach(function (n) { bodyDiv.appendChild(n); });
        pg.appendChild(bodyDiv);
        pg.appendChild(el("div", "bk-footer", (i + 1) + " / " + total));
        root.appendChild(pg);
      });
      if (d.final_image) {
        var last = el("div", "bk-page bk-final");
        var img = document.createElement("img");
        img.src = d.final_image;
        img.alt = "";
        last.appendChild(img);
        root.appendChild(last);
      }
      return waitImages(root).then(function () {
        return { questions: qids.length, pages: total, problemPages: answerStart, answerPages: total - answerStart };
      });
    });
  };

  window.SurveyBooklet = B;
})();
