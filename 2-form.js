import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const m="feedback-form-state",a={email:"",message:""},s=document.querySelector(".feedback-form");s.addEventListener("submit",r);s.addEventListener("input",n);o();function r(e){e.preventDefault();const t=e.currentTarget.elements.email,l=e.currentTarget.elements.message;!t.value||!l.value?alert("Fill please all fields"):(console.log(a),s.reset(),localStorage.removeItem(m))}function n(e){e.preventDefault();const{name:t,value:l}=e.target;a[t]=l,localStorage.setItem(m,JSON.stringify(a))}function o(){const e=localStorage.getItem(m);if(e){const t=JSON.parse(e);a.email=t.email??"",a.message=t.message??"",s.elements.email.value=a.email,s.elements.message.value=a.message.trim()}}
//# sourceMappingURL=2-form.js.map
