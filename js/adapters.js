/*
 * 保存アダプタの登録口（保存先を差し替えるための共通の形）
 *
 * アダプタは adapters/ フォルダに1ファイルずつ置き、次の形で登録する:
 *
 *   SurveyAdapters.register({
 *     id: "download",                 // 一意の名前（ファイル名と同じにする）
 *     label: "ファイルを保存",          // 提出ボタンに「回答を提出する（ファイルを保存）」の形で出る
 *     description: "…",               // ボタンの下に出す説明（任意）
 *     save: function (response, ctx) { // 回答を保存する。Promise を返す
 *       // response: 回答1人分（docs/データ仕様.md の responses の形）
 *       // ctx: { config, fileName, partial }  fileName は「受験日_名前.json」、途中保存（partial: true）は「途中_受験日_名前.json」
 *       return Promise.resolve({ ok: true, message: "保存しました" });
 *     }
 *   });
 *
 * どのアダプタを読み込むかは data/config.js の adapters（ビルド時に adapters/ の中身から作る）、
 * どれを既定にするかは default_adapter で決まる。
 */
(function () {
  "use strict";
  var registry = {};
  var order = [];

  window.SurveyAdapters = {
    register: function (adapter) {
      if (!adapter || !adapter.id || typeof adapter.save !== "function") {
        throw new Error("保存アダプタには id と save(response, ctx) が必要です");
      }
      if (!registry[adapter.id]) order.push(adapter.id);
      registry[adapter.id] = adapter;
    },
    get: function (id) { return registry[id] || null; },
    list: function () { return order.map(function (id) { return registry[id]; }); },

    // adapters/{name}.js を script タグで読み込む（file:// でも動く方法）
    loadAll: function (names) {
      return Promise.all((names || []).map(function (name) {
        return new Promise(function (resolve) {
          var s = document.createElement("script");
          s.src = "adapters/" + name + ".js";
          s.onload = function () { resolve(true); };
          s.onerror = function () {
            console.warn("保存アダプタを読み込めませんでした: " + name);
            resolve(false);
          };
          document.head.appendChild(s);
        });
      }));
    }
  };
})();
