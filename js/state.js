/*
 * 回答の状態と途中保存
 *
 * - 回答者情報・判定・確認済みテーマを持ち、変更のたびにブラウザ（localStorage）へ自動保存する
 * - 判定は既定値（「見ていない」など default: true の選択肢）以外だけを持つ
 * - 問題データの版（questions_version）が変わっても、残っている問題の回答は引き継ぐ
 * - localStorage が使えない環境（プライベートモード等）でも画面は動く（途中保存だけできない）
 */
(function () {
  "use strict";

  function SurveyState(config, questions) {
    this.config = config;
    this.key = config.storage_key;
    this.defaultValue = (config.judgments.filter(function (j) { return j.default; })[0] || {}).value;
    this.validValues = config.judgments.map(function (j) { return j.value; });
    this.qids = {};
    var self = this;
    questions.forEach(function (q) { self.qids[q.qid] = true; });
    this.themeIds = config.themes.map(function (t) { return t.id; });
    this.storageOk = true;
    this.data = this._empty();
    this.listeners = [];
    this._timer = null;
  }

  SurveyState.prototype._empty = function () {
    return {
      respondent: { name: "", exam_date: "", result: null },
      profile: {},
      answers: {},
      themes_completed: [],
      questions_version: this.config.questions_version,
      updated_at: null
    };
  };

  // 保存済みの状態を読む。戻り値は利用者に知らせるメッセージ（なければ null）
  SurveyState.prototype.load = function () {
    var raw = null;
    try {
      raw = window.localStorage.getItem(this.key);
    } catch (e) {
      this.storageOk = false;
      return "このブラウザでは途中保存が使えません。最後まで回答してから保存してください。";
    }
    if (!raw) return null;
    var saved;
    try { saved = JSON.parse(raw); } catch (e) { return null; }
    var d = this._empty();
    var self = this;
    var r = saved.respondent || {};
    d.respondent = { name: r.name || "", exam_date: r.exam_date || "", result: r.result || null };
    d.profile = this._cleanProfile(saved.profile);
    var dropped = 0;
    Object.keys(saved.answers || {}).forEach(function (qid) {
      var v = saved.answers[qid];
      if (self.qids[qid] && self.validValues.indexOf(v) >= 0 && v !== self.defaultValue) d.answers[qid] = v;
      else dropped++;
    });
    d.themes_completed = (saved.themes_completed || []).filter(function (t) { return self.themeIds.indexOf(t) >= 0; });
    d.updated_at = saved.updated_at || null;
    this.data = d;
    if (saved.questions_version && saved.questions_version !== this.config.questions_version) {
      this._write();
      return "問題が更新されました。前回の回答は引き継いでいます" + (dropped ? "（なくなった問題の回答 " + dropped + " 件は除きました）" : "") + "。";
    }
    return null;
  };

  SurveyState.prototype._write = function () {
    if (!this.storageOk) return;
    this.data.questions_version = this.config.questions_version;
    this.data.updated_at = new Date().toISOString();
    try {
      window.localStorage.setItem(this.key, JSON.stringify(this.data));
    } catch (e) {
      this.storageOk = false;
    }
  };

  // 変更のたびに呼ぶ。保存は少しまとめてから行う
  SurveyState.prototype._changed = function () {
    var self = this;
    clearTimeout(this._timer);
    this._timer = setTimeout(function () { self._write(); }, 300);
    this.listeners.forEach(function (fn) { fn(self); });
  };

  // 途中保存の内容（回答者情報・判定・確認済みテーマ）をすべて消す。同じPCを次の人に渡す前に使う
  SurveyState.prototype.reset = function () {
    clearTimeout(this._timer);
    this.data = this._empty();
    try {
      window.localStorage.removeItem(this.key);
      window.localStorage.removeItem(this.key + ":current_theme");
    } catch (e) { /* 使えない環境では画面上の状態だけ消える */ }
    var self = this;
    this.listeners.forEach(function (fn) { fn(self); });
  };

  SurveyState.prototype.onChange = function (fn) { this.listeners.push(fn); };
  SurveyState.prototype.flush = function () { clearTimeout(this._timer); this._write(); };

  SurveyState.prototype.getAnswer = function (qid) {
    return this.data.answers[qid] || this.defaultValue;
  };
  SurveyState.prototype.setAnswer = function (qid, value) {
    if (value === this.defaultValue) delete this.data.answers[qid];
    else this.data.answers[qid] = value;
    this._changed();
  };

  SurveyState.prototype.isThemeDone = function (themeId) {
    return this.data.themes_completed.indexOf(themeId) >= 0;
  };
  SurveyState.prototype.setThemeDone = function (themeId, done) {
    var list = this.data.themes_completed.filter(function (t) { return t !== themeId; });
    if (done) list.push(themeId);
    // テーマの並びは config の順にそろえる
    var order = this.themeIds;
    list.sort(function (a, b) { return order.indexOf(a) - order.indexOf(b); });
    this.data.themes_completed = list;
    this._changed();
  };

  SurveyState.prototype.setRespondent = function (field, value) {
    this.data.respondent[field] = value;
    this._changed();
  };

  // ---------- 事前アンケート（config.profile） ----------
  SurveyState.prototype._questions = function () {
    return (this.config.profile && this.config.profile.questions) || [];
  };

  // 設定にない質問・選択肢の値は捨てる（問題データの版が変わっても安全に読む）
  SurveyState.prototype._cleanProfile = function (src) {
    var out = {};
    src = src || {};
    this._questions().forEach(function (q) {
      var v = src[q.id];
      if (v === undefined || v === null) return;
      var values = (q.options || []).map(function (o) { return o.value; });
      if (q.type === "multi" && v && Array.isArray(v.values)) {
        var keep = v.values.filter(function (x) { return values.indexOf(x) >= 0; });
        if (keep.length || v.other_text) out[q.id] = { values: keep, other_text: String(v.other_text || "") };
      } else if (q.type === "single" && values.indexOf(v) >= 0) {
        out[q.id] = v;
      } else if (q.type === "ratio" && typeof v === "object") {
        var r = {};
        (q.items || []).forEach(function (it) {
          var n = parseInt(v[it.id], 10);
          if (!isNaN(n) && n >= (q.min || 0) && n <= (q.max === undefined ? 100 : q.max)) r[it.id] = n;
        });
        if (Object.keys(r).length) out[q.id] = r;
      }
    });
    return out;
  };

  SurveyState.prototype.getProfile = function (qid) { return (this.data.profile || {})[qid]; };
  SurveyState.prototype.setProfile = function (qid, value) {
    if (value === null || value === undefined) delete this.data.profile[qid];
    else this.data.profile[qid] = value;
    this._changed();
  };

  // 未入力・合計が合わないなど、提出前に知らせる内容（文の配列）
  SurveyState.prototype.profileProblems = function () {
    var self = this, out = [];
    this._questions().forEach(function (q) {
      var v = self.getProfile(q.id);
      if (q.type === "ratio") {
        var filled = v ? (q.items || []).filter(function (it) { return v[it.id] !== undefined; }).length : 0;
        var sum = v ? (q.items || []).reduce(function (a, it) { return a + (v[it.id] || 0); }, 0) : 0;
        if (q.required && filled < (q.items || []).length) out.push(q.label + "（未入力）");
        else if (filled && sum !== q.total) out.push(q.label + "（合計が " + sum + (q.unit || "") + "。" + q.total + (q.unit || "") + " にしてください）");
      } else if (q.type === "multi") {
        var other = (q.options || []).filter(function (o) { return o.free_text; }).map(function (o) { return o.value; });
        if (q.required && !(v && v.values && v.values.length)) out.push(q.label + "（未入力）");
        else if (v && v.values.some(function (x) { return other.indexOf(x) >= 0; }) && !String(v.other_text || "").trim()) out.push(q.label + "（「その他」の内容が未記入）");
      } else if (q.required && (v === undefined || v === null || v === "")) {
        out.push(q.label + "（未入力）");
      }
    });
    return out;
  };

  SurveyState.prototype.respondentProblems = function () {
    var r = this.data.respondent, out = [];
    if (!r.name || !r.name.trim()) out.push("名前");
    if (!r.exam_date) out.push("受験日");
    return out;
  };

  // 回答1人分（docs/データ仕様.md の responses の形）
  // partial: true は途中保存（status: "partial"）。提出用は status: "submitted"
  SurveyState.prototype.buildResponse = function (partial) {
    var r = this.data.respondent;
    var answers = {};
    var self = this;
    Object.keys(this.data.answers).sort().forEach(function (qid) { answers[qid] = self.data.answers[qid]; });
    return {
      exam_id: this.config.exam_id,
      questions_version: this.config.questions_version,
      respondent: { name: r.name.trim(), exam_date: r.exam_date, result: r.result || null },
      profile: JSON.parse(JSON.stringify(this.data.profile || {})),
      submitted_at: localIsoString(new Date()),
      status: partial ? "partial" : "submitted",
      survey_variant: this.config.variant || null,          // 版（全冊版は null、①版は "b1" など）
      scope_books: (this.config.scope_books || []).slice(), // 版が対象にした冊（空なら全冊）。集計はこの範囲の問題だけを回答済みとみなす
      themes_completed: this.data.themes_completed.slice(),
      answers: answers
    };
  };

  // 提出用は「受験日_名前.json」、途中保存は「途中_受験日_名前.json」
  SurveyState.prototype.fileName = function (partial) {
    var r = this.data.respondent;
    var safe = function (s) { return String(s || "").trim().replace(/[\\/:*?"<>|\s]+/g, "_"); };
    return (partial ? "途中_" : "") + safe(r.exam_date) + "_" + safe(r.name) + ".json";
  };

  // 保存した回答ファイル（提出用・途中保存）の中身から状態を復元する。問題が見つかればエラーを投げる
  SurveyState.prototype.restore = function (response) {
    if (!response || typeof response !== "object") throw new Error("回答ファイルの形ではありません");
    if (response.exam_id !== this.config.exam_id) throw new Error("別の試験（" + response.exam_id + "）の回答ファイルです");
    var self = this, d = this._empty(), dropped = 0;
    var r = response.respondent || {};
    d.respondent = { name: r.name || "", exam_date: r.exam_date || "", result: r.result || null };
    d.profile = this._cleanProfile(response.profile);
    Object.keys(response.answers || {}).forEach(function (qid) {
      var v = response.answers[qid];
      if (self.qids[qid] && self.validValues.indexOf(v) >= 0 && v !== self.defaultValue) d.answers[qid] = v;
      else dropped++;
    });
    d.themes_completed = (response.themes_completed || []).filter(function (t) { return self.themeIds.indexOf(t) >= 0; });
    this.data = d;
    this._write();
    this.listeners.forEach(function (fn) { fn(self); });
    return { answers: Object.keys(d.answers).length, themes: d.themes_completed.length, dropped: dropped };
  };

  SurveyState.prototype.hasData = function () {
    var r = this.data.respondent;
    return !!(r.name || r.exam_date || Object.keys(this.data.answers).length || this.data.themes_completed.length ||
      Object.keys(this.data.profile || {}).length);
  };

  // タイムゾーン付きの ISO 形式（例 2026-10-08T10:00:00+09:00）
  function localIsoString(d) {
    var pad = function (n) { return (n < 10 ? "0" : "") + n; };
    var off = -d.getTimezoneOffset();
    var sign = off >= 0 ? "+" : "-";
    off = Math.abs(off);
    return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()) + "T" +
      pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds()) +
      sign + pad(Math.floor(off / 60)) + ":" + pad(off % 60);
  }

  window.SurveyState = SurveyState;
})();
