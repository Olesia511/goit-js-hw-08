const e=document.querySelector(".feedback-form");e.addEventListener("input",(function(e){const{target:s}=e;"email"===s.name&&(o.email=s.value,localStorage.setItem("feedback-form-state",JSON.stringify({userInfo:o})));"message"===s.name&&(o.message=s.value,localStorage.setItem("feedback-form-state",JSON.stringify({userInfo:o})));o.email=a.value,localStorage.setItem("feedback-form-state",JSON.stringify({userInfo:o})),o.message=t.value,localStorage.setItem("feedback-form-state",JSON.stringify({userInfo:o}))})),e.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem("feedback-form-state")).userInfo),localStorage.removeItem("feedback-form-state"),a.value="",t.value=""}));const a=e.children[0].children[0],t=e.children[1].children[0],o={email:"",message:""},s=JSON.parse(localStorage.getItem("feedback-form-state"))||"";console.log("parseLocal",s),a.value=s.userInfo.email||"",t.value=s.userInfo.message||"",console.log("emailParse",a.value),console.log("messageParse",t.value);
//# sourceMappingURL=03-feedback.efefb88a.js.map
