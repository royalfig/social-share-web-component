// node_modules/@royalfig/share-button/dist/share-button.es.js
var S = Object.defineProperty;
var V = (n, o, e) => o in n ? S(n, o, { enumerable: true, configurable: true, writable: true, value: e }) : n[o] = e;
var b = (n, o, e) => (V(n, typeof o != "symbol" ? o + "" : o, e), e);
var M = ".wrapper{--color-button-bg: hsl(242deg 9.58% 98%);--color-button-text: hsl(242deg 55.5% 2.74%);--color-copy-success: hsl(120deg 99% 43%);--color-popover-bg: hsl(242deg 55.5% 2.74%);--color-popover-bg-accent: hsl(242deg 55.5% 12.74%);--color-popover-text: hsl(242deg 9.58% 98%)}";
function A(n) {
  let o = n.getAttribute("dark-mode");
  if (o ?? (o = "auto"), o === "auto")
    return `@media (prefers-color-scheme: dark) {
			${M}
		}`;
  if (o === "false")
    return "";
  if (o === "true")
    return M;
}
var H = {
  1: '<svg part="share-button-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M13 14H11C7.54202 14 4.53953 15.9502 3.03239 18.8107C3.01093 18.5433 3 18.2729 3 18C3 12.4772 7.47715 8 13 8V3L23 11L13 19V14Z"></path></svg>',
  2: '<svg part="share-button-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18.4144 9.00015L12.0002 2.58594L5.58594 9.00015H11V16H13V9.00015H18.4144ZM3 14V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V14H19V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V14H3Z"></path></svg>',
  3: '<svg part="share-button-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M10 3V5H5V19H19V14H21V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H10ZM17.7071 7.70711L12 13.4142L10.5858 12L16.2929 6.29289L13 3H21V11L17.7071 7.70711Z"></path></svg>',
  4: '<svg part="share-button-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z"></path></svg>',
  5: '<svg part="share-button-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M11 2.04938V4.06189C7.05369 4.55399 4 7.92038 4 12C4 16.4183 7.58172 20 12 20C16.0796 20 19.446 16.9463 19.9381 13H21.9506C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81465 5.94668 2.5511 11 2.04938ZM18.7071 6.70711L12 13.4142L10.5858 12L17.2929 5.29289L14 2H22V10L18.7071 6.70711Z"></path></svg>',
  6: '<svg part="share-button-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg>',
  7: '<svg part="share-button-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 23C7.85786 23 4.5 19.6421 4.5 15.5C4.5 13.3462 5.40786 11.4045 6.86179 10.0366C8.20403 8.77375 11.5 6.49951 11 1.5C17 5.5 20 9.5 14 15.5C15 15.5 16.5 15.5 19 13.0296C19.2697 13.8032 19.5 14.6345 19.5 15.5C19.5 19.6421 16.1421 23 12 23Z"></path></svg>'
};
var Z = '<svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/></svg>';
var w = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.3638 15.5355L16.9496 14.1213L18.3638 12.7071C20.3164 10.7545 20.3164 7.58866 18.3638 5.63604C16.4112 3.68341 13.2453 3.68341 11.2927 5.63604L9.87849 7.05025L8.46428 5.63604L9.87849 4.22182C12.6122 1.48815 17.0443 1.48815 19.778 4.22182C22.5117 6.95549 22.5117 11.3876 19.778 14.1213L18.3638 15.5355ZM15.5353 18.364L14.1211 19.7782C11.3875 22.5118 6.95531 22.5118 4.22164 19.7782C1.48797 17.0445 1.48797 12.6123 4.22164 9.87868L5.63585 8.46446L7.05007 9.87868L5.63585 11.2929C3.68323 13.2455 3.68323 16.4113 5.63585 18.364C7.58847 20.3166 10.7543 20.3166 12.7069 18.364L14.1211 16.9497L15.5353 18.364ZM14.8282 7.75736L16.2425 9.17157L9.17139 16.2426L7.75717 14.8284L14.8282 7.75736Z"></path></svg>';
var L = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>';
var $ = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM8.89113 13.1708L8.90378 13.1628C9.48351 15.0767 9.77337 16.0337 9.77337 16.0337C9.88564 16.3442 10.04 16.3996 10.2273 16.3743C10.4145 16.3489 10.5139 16.2476 10.6361 16.1297C10.6361 16.1297 11.0324 15.7472 11.825 14.9823L14.3759 16.8698C14.8407 17.1266 15.1763 16.9941 15.2917 16.4377L16.9495 8.61641C17.1325 7.88842 16.8115 7.59644 16.247 7.82754L6.51397 11.5871C5.84996 11.854 5.85317 12.2255 6.39308 12.3911L8.89113 13.1708Z"></path></svg>';
var B = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path></svg>';
var E = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>';
var T = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>';
var P = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM8.59339 7.30019L8.39232 7.30833C8.26293 7.31742 8.13607 7.34902 8.02057 7.40811C7.93392 7.45244 7.85348 7.51651 7.72709 7.63586C7.60774 7.74855 7.53857 7.84697 7.46569 7.94186C7.09599 8.4232 6.89729 9.01405 6.90098 9.62098C6.90299 10.1116 7.03043 10.5884 7.23169 11.0336C7.63982 11.9364 8.31288 12.8908 9.20194 13.7759C9.4155 13.9885 9.62473 14.2034 9.85034 14.402C10.9538 15.3736 12.2688 16.0742 13.6907 16.4482C13.6907 16.4482 14.2507 16.5342 14.2589 16.5347C14.4444 16.5447 14.6296 16.5313 14.8153 16.5218C15.1066 16.5068 15.391 16.428 15.6484 16.2909C15.8139 16.2028 15.8922 16.159 16.0311 16.0714C16.0311 16.0714 16.0737 16.0426 16.1559 15.9814C16.2909 15.8808 16.3743 15.81 16.4866 15.6934C16.5694 15.6074 16.6406 15.5058 16.6956 15.3913C16.7738 15.2281 16.8525 14.9166 16.8838 14.6579C16.9077 14.4603 16.9005 14.3523 16.8979 14.2854C16.8936 14.1778 16.8047 14.0671 16.7073 14.0201L16.1258 13.7587C16.1258 13.7587 15.2563 13.3803 14.7245 13.1377C14.6691 13.1124 14.6085 13.1007 14.5476 13.097C14.4142 13.0888 14.2647 13.1236 14.1696 13.2238C14.1646 13.2218 14.0984 13.279 13.3749 14.1555C13.335 14.2032 13.2415 14.3069 13.0798 14.2972C13.0554 14.2955 13.0311 14.292 13.0074 14.2858C12.9419 14.2685 12.8781 14.2457 12.8157 14.2193C12.692 14.1668 12.6486 14.1469 12.5641 14.1105C11.9868 13.8583 11.457 13.5209 10.9887 13.108C10.8631 12.9974 10.7463 12.8783 10.6259 12.7616C10.2057 12.3543 9.86169 11.9211 9.60577 11.4938C9.5918 11.4705 9.57027 11.4368 9.54708 11.3991C9.50521 11.331 9.45903 11.25 9.44455 11.1944C9.40738 11.0473 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.74939 10.663 9.86248 10.5183C9.97128 10.379 10.0652 10.2428 10.125 10.1457C10.2428 9.95633 10.2801 9.76062 10.2182 9.60963C9.93764 8.92565 9.64818 8.24536 9.34986 7.56894C9.29098 7.43545 9.11585 7.33846 8.95659 7.32007C8.90265 7.31384 8.84875 7.30758 8.79459 7.30402C8.66053 7.29748 8.5262 7.29892 8.39232 7.30833L8.59339 7.30019Z"></path></svg>';
function I({
  url: n,
  title: o,
  networks: e,
  isAtomic: t
}) {
  function s(f, l, g) {
    let i = g.replace(/{{url}}/g, n);
    o && (i = i.replace(/{{text}}/g, o));
    const a = document.createElement("a");
    return a.classList.add("social-media", l.toLowerCase()), a.href = encodeURI(i), a.setAttribute("aria-label", `Share on ${l}`), a.setAttribute("target", "_blank"), a.setAttribute("rel", "noopener noreferrer"), a.setAttribute("part", `share-link ${l.toLowerCase()}`), a.innerHTML = `${f} ${t ? "" : ` ${l}`}`, a;
  }
  const d = /* @__PURE__ */ new Map([
    [
      "facebook",
      {
        html: s(
          B,
          "Facebook",
          "http://www.facebook.com/sharer.php?u={{url}}"
        )
      }
    ],
    [
      "x",
      {
        html: s(
          Z,
          "X",
          "https://twitter.com/intent/tweet?url={{url}}&text={{text}}"
        )
      }
    ],
    [
      "linkedin",
      {
        html: s(
          E,
          "LinkedIn",
          "https://www.linkedin.com/feed/?shareActive=true&text={{text}} {{url}}"
        )
      }
    ],
    [
      "email",
      {
        html: s(
          T,
          "Email",
          "mailto:?subject=Check out {{text}}&body={{text}} {{url}}"
        )
      }
    ],
    [
      "whatsapp",
      {
        html: s(
          P,
          "WhatsApp",
          "https://api.whatsapp.com/send?text={{text}} {{url}}"
        )
      }
    ],
    [
      "telegram",
      {
        html: s(
          $,
          "Telegram",
          "https://t.me/share/url?url={{url}}&text={{text}}"
        )
      }
    ],
    ["copy", { html: s(w, "copy", "") }]
  ]), r = document.createElement("div");
  r.classList.add("popover-inner"), r.setAttribute("part", "popover-inner");
  const v = e.split(",").map((f) => {
    const l = f.trim().toLowerCase();
    if (l === "copy") {
      const i = document.createElement("button");
      i.classList.add("social-media", "copy-button"), i.setAttribute("aria-label", "Copy link"), i.setAttribute("part", `share-link ${l}`);
      const a = `${w} <span>Copy link</span>`, C = w;
      return i.innerHTML = t ? C : a, i.addEventListener("click", async (p) => {
        if (!p.currentTarget) {
          console.error("Error copying. Element not found");
          return;
        }
        try {
          await navigator.clipboard.writeText(window.location.href), i.disabled = true, t ? i.innerHTML = L : i.innerHTML = `${L} <span>Copied!</span>`, setTimeout(() => {
            i.disabled = false, i.innerHTML = t ? C : a;
          }, 5e3);
        } catch {
          console.log("[Share Button] We could not copy this");
        }
      }), i;
    }
    const g = d.get(l);
    return g ? g.html : "";
  }), h = document.createElement("div");
  t && h.classList.add("atomic"), h.classList.add("social-media-container"), h.setAttribute("part", "share-social-media"), h.append(...v), r.append(h);
  const m = document.createElement("div");
  m.classList.add("triangle-up"), r.prepend(m);
  const u = document.createElement("div");
  return u.classList.add("triangle-down"), r.append(u), t ? h : r;
}
var j = ':host{font-size:16px}.wrapper{--aspect-ratio: 1.65 / 1;--border-radius-lg: 8px;--border-radius-md: 5px;--border-radius-pill: 9999px;--border-radius-sm: 2.5px;--color-button-bg: hsl(242deg 55.5% 2.74%);--color-button-text: hsl(242deg 9.58% 98%);--color-copy-success: green;--color-popover-bg: hsl(242deg 9.58% 98%);--color-popover-bg-accent: hsl(242deg 9.58% 88%);--color-popover-border: hsl(0deg 0 100% / 7.5%);--color-popover-text: hsl(242deg 55.5% 2.74%);--font-lg: max(18px, 1.05em);--font-sm: max(15px, .875em);--gap-icon: .5rem;--gap-lg: 2em;--gap-md: .75em;--gap-sm: .5em;--padding-box: 1em;--padding-button: .5em 1em;--triangle: 20px;--box-shadow: inset 0 0 .5px 1px hsl(0deg 0% 100% / 7.5%), 0 0 0 1px hsl(0deg 0% 0% / 5%), 0 .3px .4px hsl(0deg 0% 0% / 2%), 0 .9px 1.5px hsl(0deg 0% 0% / 4.5%), 0 3.5px 6px hsl(0deg 0% 0% / 9%);--filter: drop-shadow(0 0 .5px hsl(0deg 0 100% / 7.5%)) drop-shadow(0 0 1px rgb(0 0 0 / 5%)) drop-shadow(0 .3px .4px rgb(0 0 0 / 2%)) drop-shadow(0 .9px 1.5px rgb(0 0 0 / 4.5%)) drop-shadow(0 3.5px 6px rgb(0 0 0 / 9%));--x: #1da1f2;--fb: #1877f2;--li: #0a66c2;--tg: #229ed9;--wa: #25d366}button{display:inline-flex;gap:var(--gap-icon);align-items:center;justify-content:center;height:40px;padding:var(--padding-button);font-family:inherit;font-size:.875em;line-height:20px;color:var(--color-button-text);text-align:center;white-space:nowrap;vertical-align:middle;cursor:pointer;background-color:var(--color-button-bg);border:none;border-radius:var(--border-radius-pill);transition:filter .2s ease-out}button:hover:not(.copy-button){filter:brightness(1.2)}button svg{display:inline-block;width:1em;height:1em;fill:currentcolor}[popover]{opacity:0;transition:opacity .1s ease-in,scale .1s ease-in}:popover-open,.popover-clone{position:absolute;max-width:min(100% - 16px,31.25em);height:fit-content;padding:0;padding-block:var(--triangle);margin:0;font-family:inherit;color:var(--color-popover-text);background-color:transparent;filter:var(--filter);border:none;opacity:1;transition:opacity .1s ease-out,scale .1s ease-out}.popover-clone{position:fixed;width:fit-content;height:fit-content}.popover-inner{position:relative}.social-media-container{display:flex;flex-direction:column;padding:.5em;font-size:16px;background-color:var(--color-popover-bg);border:1px solid var(--color-popover-border);border-radius:var(--border-radius-lg)}:where(.triangle-up,.triangle-down){position:absolute;left:50%;display:none;height:20px;aspect-ratio:var(--aspect-ratio);clip-path:polygon(50% 0%,0 100%,100% 100%);background-color:var(--color-popover-border);translate:-50% -1.5px}.triangle-down{clip-path:polygon(100% 0%,0% 0,50% 100%)}.triangle-down:after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;height:var(--triangle);aspect-ratio:var(--aspect-ratio);clip-path:polygon(100% 0%,0% 0,50% 100%);content:"";background-color:var(--color-popover-bg);translate:0 -1px}.triangle-up{translate:-50% calc(-100% + 1.5px)}.triangle-up:after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:2;height:var(--triangle);aspect-ratio:var(--aspect-ratio);clip-path:polygon(50% 0%,0 100%,100% 100%);content:"";background-color:var(--color-popover-bg);translate:0 1px}.down .triangle-down,.up .triangle-up{display:block}.left-adjust :where(.triangle-down,.triangle-up){left:25%}.right-adjust :where(.triangle-down,.triangle-up){left:75%}.social-media{display:flex;flex:1;gap:var(--gap-md);align-items:center;justify-content:flex-start;min-width:7em;padding:.5em;font-weight:400;line-height:1.25em;color:inherit;text-decoration:none;background:none;border-radius:var(--border-radius-lg)}.social-media:hover{background-color:var(--color-popover-bg-accent)}.social-media:last-child{border-bottom-right-radius:var(--border-radius-lg);border-bottom-left-radius:var(--border-radius-lg)}.social-media svg{display:block;width:1em;height:1em;line-height:1.25em;fill:currentcolor;transition:color .3s ease-out}.copy-button{background:none}.copy-button:hover{outline:none}.copy-button[disabled]{font-weight:700;color:var(--color-copy-success)}@media (width >=48rem){.social-media{min-width:9em}}.atomic{display:flex;flex-flow:row wrap;justify-content:space-between;background-color:transparent}.atomic .social-media{flex:0;width:min-content;min-width:min-content}.atomic .social-media svg{width:1.5em;height:1.5em}[aria-label=Share]{padding:.75rem;line-height:1;border-radius:50%}[aria-label=Share] svg{width:1.25em;height:1.25em}';
var z = ".share-button{display:flex;gap:8px;align-items:center;min-width:60px;height:60px;padding:0 16px;font-size:16px;box-shadow:#0000003d 0 8px 16px -2px}.share-button svg{width:24px;height:24px;margin-inline-end:0}";
function F(n) {
  const o = "28px", e = `position: fixed; bottom: ${o}; z-index: 9999;`;
  if (!n)
    return "";
  const t = n.toLowerCase();
  return t === "left" || t === "right" ? `${e} ${t}: ${o};` : t === "center" ? `${e} left: 50%; translate: -50% 0;` : (console.error(
    `[Share Button] It looks you specified an unknown value (${n}) for the fixed attribute. Available options are "left," "right," and "center"`
  ), "");
}
function N(n, o) {
  return o.map((e) => {
    const t = n.getAttribute(e);
    return t ? `--${e}: ${t};` : "";
  }).join(`
`);
}
var U = [
  "color-button-text",
  "color-button-bg",
  "color-popover-bg",
  "color-popover-text"
];
function q(n) {
  const o = n.getAttribute("position"), e = F(o), t = N(n, U);
  return `${o ? z : ""}
	.share-button {
		${e}
	}
	.wrapper {
		${t}
	}`;
}
var k = class extends HTMLElement {
  constructor() {
    super(...arguments);
    b(this, "isPopoverSupport", Object.prototype.hasOwnProperty.call(
      HTMLElement.prototype,
      "popover"
    ));
    b(this, "isMobile", (/android/i.test(navigator.userAgent) || /iPhone|iPad|iPod/i.test(navigator.userAgent)) && navigator.share);
    b(this, "shadow", this.attachShadow({ mode: "open" }));
    b(this, "state", false);
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    var g, i;
    const e = ((g = document.querySelector("title")) == null ? void 0 : g.textContent) || ((i = document.querySelector("h1")) == null ? void 0 : i.textContent) || "", t = q(this), s = this.createIcon(), d = this.hasAttribute("atomic"), r = this.createPopover(e, d), v = d ? "" : this.createButton(s), h = A(this), m = new CSSStyleSheet();
    m.replaceSync(j + t + h), this.shadow.adoptedStyleSheets = [m];
    const u = document.createElement("div");
    u.setAttribute("class", "wrapper"), u.setAttribute("part", "share-wrapper");
    const f = this.isPopoverSupport ? r : "<div></div>";
    u.append(v, f), this.shadow.replaceChildren(u);
    let l = null;
    if (!d && v && v.addEventListener("click", (a) => {
      const C = a.currentTarget;
      if (this.isMobile) {
        try {
          navigator.share({
            title: e,
            url: window.location.href
          }), C.removeAttribute("popover");
        } catch (p) {
          console.log(p);
        }
        return;
      }
      if (this.isPopoverSupport) {
        const p = r.cloneNode(true);
        p.removeAttribute("id"), p.removeAttribute("popover"), u.append(p), p.style.visibility = "hidden", p.style.pointerEvents = "none", p.classList.add("up", "popover-clone"), l = p.getBoundingClientRect(), p.remove();
        const c = C.getBoundingClientRect();
        let x = `${c.left + c.width / 2 - l.width / 2}px`;
        c.left < 100 && (x = `${c.left + c.width / 2 - l.width * 0.25}px`, r.classList.add("left-adjust")), c.right > window.innerWidth - 100 && (x = `${c.left + c.width / 2 - l.width * 0.75}px`, r.classList.add("right-adjust"));
        const y = window.scrollY;
        r.style.left = x, document.documentElement.clientHeight / 2 > c.y ? (r.style.top = `${y + c.top + c.height}px`, r.classList.remove("down"), r.classList.add("up")) : (r.style.top = `${y + c.top - l.height}px`, r.classList.remove("up"), r.classList.add("down"));
        return;
      }
      navigator.clipboard.writeText(window.location.href), setTimeout(() => {
        this.textContent = "Copied!", this.createButton(L);
      }, 1e3);
    }), !d) {
      const a = () => {
        this.shadow.querySelector("[popover]").hidePopover();
      };
      addEventListener("resize", a), addEventListener("scroll", a);
    }
  }
  createIcon() {
    const e = this.getAttribute("icon") || "1";
    let t;
    return e === "false" ? t = "" : ["1", "2", "3", "4", "5", "6", "7"].includes(e) ? t = H[e] : (console.log(
      '[Share Button] It looks like you did not specify a valid icon. Please add an icon attribute with a value of "1," "2," "3," "4," "5," "6," or "7"'
    ), t = H[1]), t;
  }
  createButton(e) {
    const t = document.createElement("button");
    t.setAttribute("part", "share-button"), t.setAttribute("class", "share-button");
    const s = this.hasAttribute("notext");
    return this.isPopoverSupport && !this.isMobile && t.setAttribute("popovertarget", "share-popover"), this.hasAttribute("circle") || s ? (t.setAttribute("aria-label", "Share"), t.innerHTML = e) : t.innerHTML = `${e} ${this.textContent ? "<slot></slot>" : "Share"}`, t;
  }
  createPopover(e, t = false) {
    const s = this.getAttribute("networks") || "x, linkedin, facebook, email, whatsapp, telegram, copy", d = I({
      url: window.location.href,
      title: e,
      shareText: this.textContent ?? "Share",
      networks: s,
      isAtomic: t
    });
    if (!t) {
      const r = document.createElement("div");
      return r.setAttribute("id", "share-popover"), r.setAttribute("part", "share-popover"), r.setAttribute("popover", ""), r.append(d), r;
    }
    return d;
  }
};
b(k, "observedAttributes", ["dark-mode"]);
customElements.define("share-button", k);
export {
  k as ShareButton
};
//# sourceMappingURL=@royalfig_share-button.js.map
