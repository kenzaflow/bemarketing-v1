const e=document.querySelectorAll(".cards.scroll-snap-parent"),t=["mousedown","mouseup","mouseleave","mousemove"];function o(){e.forEach((e=>{t.forEach((t=>{e.addEventListener(t,(o=>function(e,t,o){"mousedown"===t&&(r=!0,n=e.pageX-o.offsetTop,s=o.scrollLeft);"mouseleave"!==t&&"mouseup"!==t||(r=!1,o.classList.remove("active"));if("mousemove"===t)if(r){const t=2*(e.pageX-o.offsetTop-n);o.scrollLeft=s-t,o.classList.add("active")}else o.classList.remove("active")}(o,t,e)))}))}))}let n,s,r;const c=document.createElement("section");function l({title:e="",text:t=""}){const o=setInterval((()=>{null!=c.querySelector("#statusTitle")&&null!=c.querySelector("#statusText")&&(clearInterval(o),c.querySelector("#statusTitle").innerHTML=e,c.querySelector("#statusText").innerHTML=t)}),100)}const i=()=>{document.querySelector("#menu-opener").checked=!1,document.querySelector(".wrapper").classList.remove("viewingStatus"),document.querySelector(".wrapper").removeChild(c),document.querySelector("#menu-opener").removeEventListener("click",i)};function a(){const e=document.getElementById("formspree");if(!e)return null;e.addEventListener("submit",(async function(t){t.preventDefault(),function({title:e="",text:t=""}){c.id="statusForm",c.classList.add("statusForm"),c.innerHTML=`<div class="content">\n                            <p id="statusTitle" class="font-size:h2 font:heading">${e}</p>\n                            <br class="size:2">\n                            <p id="statusText" class="font-size:h4 font:heading">${t}</p>\n                        </div>`,document.querySelector(".wrapper").appendChild(c),document.querySelector(".wrapper").classList.add("viewingStatus"),document.querySelector("#menu-opener").checked=!0,document.querySelector("#menu-opener").addEventListener("click",i)}({title:"Enviando..."});const o=new FormData(t.target);fetch(t.target.action,{method:e.method,body:o,headers:{Accept:"application/json"}}).then((t=>{t.ok?(l({title:"Recibimos tu mensaje",text:"Muy pronto te responderemos. Gracias por elegirnos."}),e.reset()):(l({title:"Ups!",text:"No pudimos enviar tu mensaje, contactanos por otro medio!"}),t.json().then((e=>{Object.hasOwn(e,"errors")})))})).catch((e=>{l({title:"Ups!",text:"No pudimos enviar tu mensaje, contactanos por otro medio!"})}))}))}window.addEventListener("DOMContentLoaded",(()=>{document.body.classList.contains("is-preload")&&document.body.classList.remove("is-preload"),null!==localStorage.getItem("outline")&&document.body.setAttribute("outline",""),window.addEventListener("keydown",(e=>{"o"===e.key&&e.ctrlKey&&(e.preventDefault(),document.body.toggleAttribute("outline"),document.body.hasAttribute("outline")?localStorage.setItem("outline",""):localStorage.removeItem("outline"))})),window.addEventListener("click",(e=>{if(document.querySelector(".wrapper").classList.contains("viewingStatus"))return null;document.querySelector(".menu-opener").checked&&e.target!==document.querySelector(".menu-opener")&&(document.querySelector(".menu-opener").checked=!1)})),window.addEventListener("scroll",function(e,t){let o;return(...n)=>{clearTimeout(o),o=setTimeout((()=>{e(...n)}),t)}}((e=>{0===window.scrollY&&document.body.classList.remove("has-scroll"),window.scrollY>0&&document.body.classList.add("has-scroll","no-scroll-animation")}),10)),a(),o()}));