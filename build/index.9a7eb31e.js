document.querySelectorAll(".scroll-snap-children");const e=document.querySelector(".scroll-snap-parent");let t,n,o;function s(){e.addEventListener("mousedown",(s=>function(s){o=!0,t=s.pageX-e.offsetTop,n=e.scrollLeft,e.classList.add("active")}(s))),e.addEventListener("mouseup",(t=>(o=!1,void e.classList.add("active")))),e.addEventListener("mouseleave",(t=>(o=!1,void setTimeout((()=>{e.classList.remove("active")}),10)))),e.addEventListener("mousemove",(s=>function(s){if(o){s.preventDefault();const o=2*(s.pageX-e.offsetTop-t);e.scrollLeft=n-o,e.classList.add("active")}}(s))),e.onwheel=t=>{e.scrollBy(0,t.deltaX)}}const r=document.createElement("section");function c({title:e="",text:t=""}){const n=setInterval((()=>{null!=r.querySelector("#statusTitle")&&null!=r.querySelector("#statusText")&&(clearInterval(n),r.querySelector("#statusTitle").innerHTML=e,r.querySelector("#statusText").innerHTML=t)}),100)}const i=()=>{document.querySelector("#menu-opener").checked=!1,document.querySelector(".wrapper").classList.remove("viewingStatus"),document.querySelector(".wrapper").removeChild(r),document.querySelector("#menu-opener").removeEventListener("click",i)};function a(){const e=document.getElementById("formspree");if(!e)return null;e.addEventListener("submit",(async function(t){t.preventDefault(),function({title:e="",text:t=""}){r.id="statusForm",r.classList.add("statusForm"),r.innerHTML=`<div class="content">\n                            <p id="statusTitle" class="font-size:h2 font:heading">${e}</p>\n                            <br class="size:2">\n                            <p id="statusText" class="font-size:h4 font:heading">${t}</p>\n                        </div>`,document.querySelector(".wrapper").appendChild(r),document.querySelector(".wrapper").classList.add("viewingStatus"),document.querySelector("#menu-opener").checked=!0,document.querySelector("#menu-opener").addEventListener("click",i)}({title:"Enviando..."});const n=new FormData(t.target);fetch(t.target.action,{method:e.method,body:n,headers:{Accept:"application/json"}}).then((t=>{t.ok?(c({title:"Recibimos tu mensaje",text:"Muy pronto te responderemos. Gracias por elegirnos."}),e.reset()):(c({title:"Ups!",text:"No pudimos enviar tu mensaje, contactanos por otro medio!"}),t.json().then((e=>{Object.hasOwn(e,"errors")})))})).catch((e=>{c({title:"Ups!",text:"No pudimos enviar tu mensaje, contactanos por otro medio!"})}))}))}window.addEventListener("DOMContentLoaded",(()=>{document.body.classList.contains("is-preload")&&document.body.classList.remove("is-preload"),window.addEventListener("keydown",(e=>{"o"===e.key&&document.body.toggleAttribute("outline")})),window.addEventListener("click",(e=>{if(document.querySelector(".wrapper").classList.contains("viewingStatus"))return null;document.querySelector(".menu-opener").checked&&e.target!==document.querySelector(".menu-opener")&&(document.querySelector(".menu-opener").checked=!1)})),window.addEventListener("scroll",function(e,t){let n;return(...o)=>{clearTimeout(n),n=setTimeout((()=>{e(...o)}),t)}}((e=>{0===window.scrollY&&document.body.classList.remove("has-scroll"),window.scrollY>0&&document.body.classList.add("has-scroll","no-scroll-animation")}),10)),a(),s()}));