/*
 * 保存アダプタ：回答を JSON ファイルとしてダウンロードする（既定）
 * サーバー不要。file:// で開いた場合も動く。
 */
SurveyAdapters.register({
  id: "download",
  label: "ファイルを保存",
  description: "回答ファイル（.json）がダウンロードされます。そのファイルを講師に送ってください。",
  save: function (response, ctx) {
    var text = JSON.stringify(response, null, 2);
    var blob = new Blob([text], { type: "application/json" });

    // 古い Edge（msSaveBlob）にも対応
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, ctx.fileName);
      return Promise.resolve({ ok: true, message: "提出用のファイル " + ctx.fileName + " を保存しました。講師に送ってください。" });
    }
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = ctx.fileName;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 1000);
    return Promise.resolve({
      ok: true,
      message: "提出用のファイル " + ctx.fileName + " を保存しました（ダウンロードフォルダを確認し、講師に送ってください）。"
    });
  }
});
