!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,d=s||c||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function y(e,t,n){var r,i,a,f,u,l,s=0,c=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=r,o=i;return r=i=void 0,s=t,f=e.apply(o,n)}function S(e){return s=e,u=setTimeout(h,t),c?y(e):f}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-s>=a}function h(){var e=b();if(O(e))return j(e);u=setTimeout(h,function(e){var n=t-(e-l);return d?g(n,a-(e-s)):n}(e))}function j(e){return u=void 0,m&&r?y(e):(r=i=void 0,f)}function N(){var e=b(),n=O(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return S(l);if(d)return u=setTimeout(h,t),y(l)}return void 0===u&&(u=setTimeout(h,t)),f}return t=I(t)||0,p(n)&&(c=!!n.leading,a=(d="maxWait"in n)?v(I(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),N.cancel=function(){void 0!==u&&clearTimeout(u),s=0,r=l=i=u=void 0},N.flush=function(){return void 0===u?f:j(b())},N}function p(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function I(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(p(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=p(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||u.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:r,maxWait:t,trailing:i})};var S=document.querySelector(".feedback-form"),O=S.children[0].children[0],h=S.children[1].children[0],j={email:"",message:""},N=JSON.parse(localStorage.getItem("feedback-form-state"));N||localStorage.setItem("feedback-form-state",JSON.stringify({userInfo:{email:"",message:""}})),""===N.userInfo.email&&""===N.userInfo.message||(O.value=N.userInfo.email,h.value=N.userInfo.message);var k=e(t)((function(e){var t=e.target;"email"===t.name&&(j.email=t.value,localStorage.setItem("feedback-form-state",JSON.stringify({userInfo:j}))),"message"===t.name&&(j.message=t.value,localStorage.setItem("feedback-form-state",JSON.stringify({userInfo:j}))),j.email=O.value,localStorage.setItem("feedback-form-state",JSON.stringify({userInfo:j})),j.message=h.value,localStorage.setItem("feedback-form-state",JSON.stringify({userInfo:j}))}),500);S.addEventListener("input",k),S.addEventListener("submit",(function(e){if(e.preventDefault(),""===O.value.trim()||""===h.value.trim())return void alert("Please fill in all fields!");console.log(JSON.parse(localStorage.getItem("feedback-form-state")).userInfo),localStorage.removeItem("feedback-form-state"),O.value="",h.value=""}))}();
//# sourceMappingURL=03-feedback.d9fb6568.js.map