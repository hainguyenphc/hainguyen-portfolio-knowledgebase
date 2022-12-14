// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
//
// AnchorJS - v4.3.0 - 2020-10-21
// https://www.bryanbraun.com/anchorjs/
// Copyright (c) 2020 Bryan Braun; Licensed MIT
//
// @license magnet:?xt=urn:btih:d3d9a9a6595521f9666a5e94cc830dab83b65699&dn=expat.txt Expat
!(function (A, e) {
  "use strict";
  "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof module && module.exports
    ? (module.exports = e())
    : ((A.AnchorJS = e()), (A.anchors = new A.AnchorJS()));
})(this, function () {
  "use strict";
  return function (A) {
    function d(A) {
      (A.icon = Object.prototype.hasOwnProperty.call(A, "icon") ? A.icon : ""),
        (A.visible = Object.prototype.hasOwnProperty.call(A, "visible")
          ? A.visible
          : "hover"),
        (A.placement = Object.prototype.hasOwnProperty.call(A, "placement")
          ? A.placement
          : "right"),
        (A.ariaLabel = Object.prototype.hasOwnProperty.call(A, "ariaLabel")
          ? A.ariaLabel
          : "Anchor"),
        (A.class = Object.prototype.hasOwnProperty.call(A, "class")
          ? A.class
          : ""),
        (A.base = Object.prototype.hasOwnProperty.call(A, "base")
          ? A.base
          : ""),
        (A.truncate = Object.prototype.hasOwnProperty.call(A, "truncate")
          ? Math.floor(A.truncate)
          : 64),
        (A.titleText = Object.prototype.hasOwnProperty.call(A, "titleText")
          ? A.titleText
          : "");
    }
    function f(A) {
      var e;
      if ("string" == typeof A || A instanceof String)
        e = [].slice.call(document.querySelectorAll(A));
      else {
        if (!(Array.isArray(A) || A instanceof NodeList))
          throw new TypeError("The selector provided to AnchorJS was invalid.");
        e = [].slice.call(A);
      }
      return e;
    }
    (this.options = A || {}),
      (this.elements = []),
      d(this.options),
      (this.isTouchDevice = function () {
        return Boolean(
          "ontouchstart" in window ||
            window.TouchEvent ||
            (window.DocumentTouch && document instanceof DocumentTouch)
        );
      }),
      (this.add = function (A) {
        var e,
          t,
          o,
          n,
          i,
          s,
          a,
          r,
          c,
          l,
          h,
          u,
          p = [];
        if (
          (d(this.options),
          "touch" === (h = this.options.visible) &&
            (h = this.isTouchDevice() ? "always" : "hover"),
          0 === (e = f((A = A || "h2, h3, h4, h5, h6"))).length)
        )
          return this;
        for (
          !(function () {
            if (null !== document.head.querySelector("style.anchorjs")) return;
            var A,
              e = document.createElement("style");
            (e.className = "anchorjs"),
              e.appendChild(document.createTextNode("")),
              void 0 ===
              (A = document.head.querySelector('[rel="stylesheet"],style'))
                ? document.head.appendChild(e)
                : document.head.insertBefore(e, A);
            e.sheet.insertRule(
              ".anchorjs-link{opacity:0;text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}",
              e.sheet.cssRules.length
            ),
              e.sheet.insertRule(
                ":hover>.anchorjs-link,.anchorjs-link:focus{opacity:1}",
                e.sheet.cssRules.length
              ),
              e.sheet.insertRule(
                "[data-anchorjs-icon]::after{content:attr(data-anchorjs-icon)}",
                e.sheet.cssRules.length
              ),
              e.sheet.insertRule(
                '@font-face{font-family:anchorjs-icons;src:url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype")}',
                e.sheet.cssRules.length
              );
          })(),
            t = document.querySelectorAll("[id]"),
            o = [].map.call(t, function (A) {
              return A.id;
            }),
            i = 0;
          i < e.length;
          i++
        )
          if (this.hasAnchorJSLink(e[i])) p.push(i);
          else {
            if (e[i].hasAttribute("id")) n = e[i].getAttribute("id");
            else if (e[i].hasAttribute("data-anchor-id"))
              n = e[i].getAttribute("data-anchor-id");
            else {
              for (
                c = r = this.urlify(e[i].textContent), a = 0;
                void 0 !== s && (c = r + "-" + a),
                  (a += 1),
                  -1 !== (s = o.indexOf(c));

              );
              (s = void 0), o.push(c), e[i].setAttribute("id", c), (n = c);
            }
            ((l = document.createElement("a")).className =
              "anchorjs-link " + this.options.class),
              l.setAttribute("aria-label", this.options.ariaLabel),
              l.setAttribute("data-anchorjs-icon", this.options.icon),
              this.options.titleText && (l.title = this.options.titleText),
              (u = document.querySelector("base")
                ? window.location.pathname + window.location.search
                : ""),
              (u = this.options.base || u),
              (l.href = u + "#" + n),
              "always" === h && (l.style.opacity = "1"),
              "" === this.options.icon &&
                ((l.style.font = "1em/1 anchorjs-icons"),
                "left" === this.options.placement &&
                  (l.style.lineHeight = "inherit")),
              "left" === this.options.placement
                ? ((l.style.position = "absolute"),
                  (l.style.marginLeft = "-1em"),
                  (l.style.paddingRight = ".5em"),
                  e[i].insertBefore(l, e[i].firstChild))
                : ((l.style.paddingLeft = ".375em"), e[i].appendChild(l));
          }
        for (i = 0; i < p.length; i++) e.splice(p[i] - i, 1);
        return (this.elements = this.elements.concat(e)), this;
      }),
      (this.remove = function (A) {
        for (var e, t, o = f(A), n = 0; n < o.length; n++)
          (t = o[n].querySelector(".anchorjs-link")) &&
            (-1 !== (e = this.elements.indexOf(o[n])) &&
              this.elements.splice(e, 1),
            o[n].removeChild(t));
        return this;
      }),
      (this.removeAll = function () {
        this.remove(this.elements);
      }),
      (this.urlify = function (A) {
        var e = document.createElement("textarea");
        (e.innerHTML = A), (A = e.value);
        return (
          this.options.truncate || d(this.options),
          A.trim()
            .replace(/'/gi, "")
            .replace(/[& +$,:;=?@"#{}|^~[`%!'<>\]./()*\\\n\t\b\v\u00A0]/g, "-")
            .replace(/-{2,}/g, "-")
            .substring(0, this.options.truncate)
            .replace(/^-+|-+$/gm, "")
            .toLowerCase()
        );
      }),
      (this.hasAnchorJSLink = function (A) {
        var e =
            A.firstChild &&
            -1 <
              (" " + A.firstChild.className + " ").indexOf(" anchorjs-link "),
          t =
            A.lastChild &&
            -1 < (" " + A.lastChild.className + " ").indexOf(" anchorjs-link ");
        return e || t || !1;
      });
  };
});
// @license-end

// document.addEventListener('DOMContentLoaded', (event) => {
//   document.querySelectorAll('pre code').forEach((el) => {
//     hljs.highlightElement(el);
//   });
// });

// Add anchors on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function (event) {
  anchors.add("h2, h3, h4");
});
