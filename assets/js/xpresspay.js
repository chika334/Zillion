"use strict";
!(function (e) {
  function t() {
    document.getElementById("centered").remove();
  }
  e.xpressPayonlineSetup = function (n) {
    var a;
    "" !== n.publicKey &&
    "" !== n.email &&
    ((a = n.email),
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      String(a).toLowerCase()
    )) &&
    "" !== n.amount &&
    "" !== n.currency &&
    "" !== n.country &&
    "" !== n.txref
      ? "" !== n.hash
        ? (!(function () {
            let e = document.createElement("div");
            e.setAttribute("class", "centered"),
              e.setAttribute("id", "centered");
            let t = document.createElement("div");
            t.setAttribute("class", "blob-1");
            let n = document.createElement("div");
            n.setAttribute("class", "blob-2");
            let a = document.createElement("style");
            a &&
              (a.appendChild(
                document.createTextNode(
                  ".centered{width:100vw;height:100vh;position:absolute;top:42%;left:50%;transform:translate(-50%,-50%);background:rgb(241,238,238);opacity:.7;border-radius:8px}.blob-1,.blob-2{width:70px;height:70px;position:absolute;background:rgb(58,190,40);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%)}.blob-1{left:20%;animation:osc-l 2.5s ease infinite}.blob-2{left:80%;animation:osc-r 2.5s ease infinite;background:#ff9000}@keyframes osc-l{0%{left:20%}50%{left:50%}100%{left:20%}}@keyframes osc-r{0%{left:80%}50%{left:50%}100%{left:80%}}.animated{-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:linear;animation-timing-function:linear;animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite}@-webkit-keyframes bounce{0%,100%{-webkit-transform:translateY(0)}50%{-webkit-transform:translateY(-5px)}}@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.bounce{-webkit-animation-name:bounce;animation-name:bounce}"
                )
              ),
              document.getElementsByTagName("head")[0].appendChild(a),
              e.appendChild(t),
              e.appendChild(n),
              document.body.appendChild(e));
          })(),
          fetch(
            "https://xpresspayonlineapisandbox.xpresspayments.com/v1/external/merchants?publicKey=" +
              n.publicKey
          )
            .then(function (e) {
              return e.json();
            })
            .then(function (a) {
              !(function (n, a) {
                if ("FAILED" === n.status)
                  return (
                    t(),
                    void e.open(
                      a.callbackUrl + "?message=" + n.message,
                      "_self"
                    )
                  );
                const i = JSON.parse(JSON.stringify(a));
                i.clientUrl = encodeURIComponent(e.location.href);
                const o = JSON.parse(JSON.stringify(n.data.merchant));
                var r = (function (e) {
                  var t = [];
                  for (var n in e)
                    if (e.hasOwnProperty(n)) {
                      var a = e[n];
                      (a = encodeURIComponent(a)), t.push(n + "=" + a);
                    }
                  return t.join("&");
                })({ ...i, ...o });
                t(),
                  (function (e) {
                    var t = document.createElement("iframe");
                    t.setAttribute(
                      "style",
                      "position:fixed; top:0; left:0;border:none;z-index: 2147483647;background: transparent;border: 0px none transparent;visibility: visible;padding: 0px;margin: 0px;overflow: hidden;-webkit-tap-highlight-color: transparent"
                    ),
                      t.setAttribute("allowTransparency", "true"),
                      t.setAttribute("width", "100%"),
                      t.setAttribute("height", "100%"),
                      t.setAttribute("id", "xpakcgtway");
                    const n =
                      "https://xpresspayonlinepluginssandbox.xpresspayments.com/pg?" +
                      e;
                    (t.src = n), document.body && document.body.appendChild(t);
                  })(r);
              })(a, n);
            })
            .catch((a) => {
              t(), e.open(n.callbackUrl + "?message=invalid key", "_self");
            }))
        : e.open(n.callbackUrl + "?message=invalid hash", "_self")
      : e.open(n.callbackUrl + "?message=all parameters are required", "_self");
  };
})(window);
