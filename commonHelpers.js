import{S as $,i as h,a as E,A as B,g as y,b as S,c as C}from"./assets/vendor-9dc8c84a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const M="/browser-battalion-2.0/assets/light-favicon-38b8258a.svg",T="/browser-battalion-2.0/assets/dark-favicon-4c820c32.svg",W=document.querySelector(".theme-checkbox"),A=document.querySelector("body"),k=document.querySelector('link[rel="icon"]');let c=!1;const P=localStorage.getItem("dark-theme");P&&(c=!0,document.body.classList.add("dark-theme"),k.href=T,W.checked=!0);W.addEventListener("change",()=>{A.classList.toggle("dark-theme"),c=!c,c?(localStorage.setItem("dark-theme",c),k.href=T):(k.href=M,localStorage.removeItem("dark-theme"))});const G=()=>{document.querySelector(".mob-menu-container").classList.add("is-open"),document.body.style.overflow="hidden"},I=()=>{document.querySelector(".mob-menu-container").classList.remove("is-open"),document.body.style.overflow="auto"};document.querySelector(".open-menu-btn").addEventListener("click",G);document.querySelector(".close-menu-btn").addEventListener("click",I);const O=e=>{e.preventDefault();const t=e.currentTarget.getAttribute("href").slice(1),r=document.getElementById(t);I(),window.scrollTo({top:r.offsetTop,behavior:"smooth"})};document.querySelectorAll(".mob-menu-list a").forEach(e=>{e.addEventListener("click",O)});const F="/browser-battalion-2.0/assets/power-fd80ffc2.webp",D="/browser-battalion-2.0/assets/power-2x-3f9fafa4.webp",H="/browser-battalion-2.0/assets/power-min-dc5a1c34.jpg",V="/browser-battalion-2.0/assets/power-2x-min-7a1fbbd3.jpg",z="/browser-battalion-2.0/assets/mimino-2b5b8a74.webp",K="/browser-battalion-2.0/assets/mimino-2x-de044129.webp",U="/browser-battalion-2.0/assets/mimino-min-3819552e.jpg",Y="/browser-battalion-2.0/assets/mimino-2x-min-494fbcaf.jpg",_="/browser-battalion-2.0/assets/vyshyvanka-de727801.webp",Q="/browser-battalion-2.0/assets/vyshyvanka-2x-841e8400.webp",X="/browser-battalion-2.0/assets/vyshyvanka-min-3a9dd024.jpg",Z="/browser-battalion-2.0/assets/vyshyvanka-2x-min-a051def3.jpg",ee="/browser-battalion-2.0/assets/green-c088cbc4.webp",te="/browser-battalion-2.0/assets/green-2x-99340e65.webp",se="/browser-battalion-2.0/assets/green-min-9879c57a.jpg",oe="/browser-battalion-2.0/assets/green-2x-min-b0b2c1f7.jpg",re="/browser-battalion-2.0/assets/wallet-b3019c59.webp",ae="/browser-battalion-2.0/assets/wallet-2x-f516c841.webp",ie="/browser-battalion-2.0/assets/wallet-min-86041c09.jpg",ne="/browser-battalion-2.0/assets/wallet-2x-min-5b295b0c.jpg",ce="/browser-battalion-2.0/assets/chego-95fbcdda.webp",le="/browser-battalion-2.0/assets/chego-2x-4d940ca7.webp",pe="/browser-battalion-2.0/assets/chego-min-b5c2f6e2.jpg",de="/browser-battalion-2.0/assets/chego-2x-min-5f3c1d1b.jpg",be="/browser-battalion-2.0/assets/energy-c6c58d07.webp",ge="/browser-battalion-2.0/assets/energy-2x-5118f44d.webp",me="/browser-battalion-2.0/assets/energy-min-d20414c1.jpg",ue="/browser-battalion-2.0/assets/energy-2x-min-8cd25da6.jpg",we="/browser-battalion-2.0/assets/fruitbox-d08ffba9.webp",fe="/browser-battalion-2.0/assets/fruitbox-2x-11e54913.webp",xe="/browser-battalion-2.0/assets/fruitbox-min-0db2fa14.jpg",ve="/browser-battalion-2.0/assets/fruitbox-2x-min-051da1fe.jpg",he="/browser-battalion-2.0/assets/english-e6713cd4.webp",ye="/browser-battalion-2.0/assets/english-2x-7dc8952f.webp",Se="/browser-battalion-2.0/assets/english-min-df59428e.jpg",ke="/browser-battalion-2.0/assets/english-2x-min-111f89b3.jpg",je="/browser-battalion-2.0/assets/starlight-efcf2d1a.webp",Le="/browser-battalion-2.0/assets/starlight-2x-4b86cd2d.webp",Je="/browser-battalion-2.0/assets/starlight-min-5b96ea05.jpg",qe="/browser-battalion-2.0/assets/starlight-2x-min-63c6cf4f.jpg",N=[{images:{webp:{"1x":F,"2x":D},jpg:{"1x":H,"2x":V}},skills:"React, JavaScript, Node JS, Git",title:"power pulse webservice"},{images:{webp:{"1x":z,"2x":K},jpg:{"1x":U,"2x":Y}},skills:"React, JavaScript, Node JS, Git",title:"mimino website"},{images:{webp:{"1x":_,"2x":Q},jpg:{"1x":X,"2x":Z}},skills:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page"},{images:{webp:{"1x":ee,"2x":te},jpg:{"1x":se,"2x":oe}},skills:"React, JavaScript, Node JS, Git",title:"green harvest online store"},{images:{webp:{"1x":re,"2x":ae},jpg:{"1x":ie,"2x":ne}},skills:"React, JavaScript, Node JS, Git",title:"wallet webservice"},{images:{webp:{"1x":ce,"2x":le},jpg:{"1x":pe,"2x":de}},skills:"React, JavaScript, Node JS, Git",title:"chego jewelry website"},{images:{webp:{"1x":be,"2x":ge},jpg:{"1x":me,"2x":ue}},skills:"React, JavaScript, Node JS, Git",title:"energy flow webservice"},{images:{webp:{"1x":we,"2x":fe},jpg:{"1x":xe,"2x":ve}},skills:"React, JavaScript, Node JS, Git",title:"fruitbox online store"},{images:{webp:{"1x":he,"2x":ye},jpg:{"1x":Se,"2x":ke}},skills:"React, JavaScript, Node JS, Git",title:"english excellence webservice"},{images:{webp:{"1x":je,"2x":Le},jpg:{"1x":Je,"2x":qe}},skills:"React, JavaScript, Node JS, Git",title:"starlight studio landing page"}],Ee="/browser-battalion-2.0/assets/sprite-e1d3e66b.svg",j=document.querySelector(".projects-list"),b=document.querySelector(".projects-load-btn");let g=0;const R=(e,t)=>{const r=e+t,a=N.slice(e,r),o=a.map(s=>`
    <li class="projects-item">
      <picture>
        <source class="projects-item-img" srcset="${s.images.webp["1x"]} 1x, ${s.images.webp["2x"]} 2x" type="image/webp">
        <source class="projects-item-img" srcset="${s.images.jpg["1x"]} 1x, ${s.images.jpg["2x"]} 2x" type="image/jpeg">
        <img class="projects-item-img" src="${s.images.jpg["1x"]}" alt="${s.title}">
      </picture>
      <p class="projects-item-skills">${s.skills}</p>
      <div class="projects-item-bottom">
        <h3 class="projects-item-title">${s.title}</h3>
        <a href="https://github.com/Vikto0004/browser-battalion-2.0" target="_blank" class="projects-item-btn">
          VISIT
          <svg class="projects-item-btn-icon">
            <use href="${Ee}#icon-arrow-visit"></use>
          </svg>
        </a>
      </div>
    </li>
  `).join("");j.insertAdjacentHTML("beforeend",o),a.forEach((s,i)=>{setTimeout(()=>{j.querySelector(`li:nth-child(${e+i+1})`).classList.add("show")},100*i)})},Te=e=>{b.classList.add("load"),setTimeout(()=>{b.classList.remove("load"),g+=3,R(g,3),g>=N.length-1&&(b.style.display="none"),setTimeout(()=>{window.scrollBy({top:300,behavior:"smooth"})},100)},1e3)};R(g,3);b.addEventListener("click",Te);const We=e=>{h.settings({timeout:5e3,titleColor:"#fff",position:"topRight",messageColor:"#fff",icon:"",close:!1}),h.error({message:e,class:"error-notification",timeout:5e3,titleColor:"#fff",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0})},Ie=async()=>{try{const e=await E.get("https://portfolio-js.b.goit.study/api/reviews");if(e.status!==200)throw new Error(e.status);return e.data}catch(e){throw new Error(`Fetching reviews failed: ${e.message}`)}};new $("#reviews-slider",{autoHeight:!0,breakpoints:{320:{slidesPerView:1,spaceBetween:10},991:{slidesPerView:2,spaceBetween:32}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const L=document.querySelector(".swiper-wrapper.is-reviews"),Ne=async()=>{try{const t=(await Ie()).map(({author:r,avatar_url:a,review:o})=>`
            <li class="reviews-review-card swiper-slide">
                <p class="review-card-text">${o}</p>
                <div class="review-card-author">
                    <img
                        class="review-card-author-avatar"
                        src="${a}"
                        alt="review author photo"
                        width="40"
                        height="40"
                    />
                    <p class="review-card-author-name">${r}</p>
                </div>
                </li>
        `).join("");L.insertAdjacentHTML("afterbegin",t)}catch(e){L.insertAdjacentHTML("afterbegin",'<p class="reviews-error-text">Not found</p>'),We(e.message)}};Ne();const J=document.querySelector(".work-together-form"),n=document.querySelector(".work-together-input"),w=document.querySelector(".work-together-message"),m=document.querySelector(".work-together-success"),u=document.querySelector(".work-together-errorInput"),f=document.querySelector(".work-together-errorMessage"),Re=document.querySelector(".work-together-close"),p=document.querySelector(".work-together-backdrop"),x=document.querySelector(".work-together-loader");Re.addEventListener("click",()=>{p.classList.remove("is-open")});window.addEventListener("keydown",function(e){e.key==="Escape"&&p.classList.remove("is-open")});p.addEventListener("click",e=>{e.target===e.currentTarget&&p.classList.remove("is-open")});const $e=()=>{n.validity.valid?(m.style.display="block",u.style.display="none"):m.style.display="none",n.value===""&&(m.style.display="none")};n.addEventListener("input",$e);J.addEventListener("submit",e=>{e.preventDefault(),n.value.trim()===""&&(u.style.display="block",u.textContent="the field must be filled"),w.value.trim()===""?f.style.display="block":f.style.display="none",n.value.trim()!==""&&w.value.trim()!==""&&(x.classList.remove("is-hide"),E.post("https://portfolio-js.b.goit.study/api/requests",{email:n.value,comment:w.value}).then(t=>{x.classList.add("is-hide"),p.classList.add("is-open");const r=document.querySelector(".work-together-modal-title"),a=document.querySelector(".work-together-modal-text");r.textContent=t.data.title,a.textContent=t.data.message,u.style.display="none",f.style.display="none",m.style.display="none",J.reset()}).catch(t=>{x.classList.add("is-hide"),h.error({title:"Error",message:t.message,position:"center"})}))});const q=e=>{let t=e.id,r=Math.abs(parseInt(t.replace(/[^0-9]/g,"")));return document.getElementById(`ac-${r-1}`)};new B(".accordion-container",{openOnInit:[0],beforeOpen:e=>{const t=q(e);e.id!=="ac-0"?(t.classList.add("border-bottom-animate"),e.classList.add("border-bottom-animate")):(e.classList.add("border-top-animate"),e.classList.add("border-bottom-animate"))},beforeClose:e=>{const t=q(e);e.id!=="ac-0"?(t.classList.remove("border-bottom-animate"),e.classList.remove("border-bottom-animate")):(e.classList.remove("border-top-animate"),e.classList.remove("border-bottom-animate"))}});const l=document.querySelector(".scroll-btn ");let v=0,d=!0;window.addEventListener("scroll",function(){let e=window.pageYOffset;e<v&&d?(l.classList.add("is-active-scroll"),d=!1):e>v&&!d?(l.classList.remove("is-active-scroll"),d=!0):e===0&&l.classList.remove("is-active-scroll"),v=e<=0?0:e});l.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"}),l.classList.remove("is-active-scroll")});y.registerPlugin(S);document.addEventListener("DOMContentLoaded",function(){new C(".text-split",{types:"words, chars",tagName:"span"});function e(t,r){S.create({trigger:t,start:"top bottom",onLeaveBack:()=>{r.progress(0),r.pause()}}),S.create({trigger:t,start:"top 90%",onEnter:()=>r.play()})}document.querySelectorAll(".letters-fade-in-random").forEach(function(t,r){let a=y.timeline({paused:!0});a.from(t.querySelectorAll(".char"),{opacity:0,duration:.7,ease:"power1.out",stagger:{amount:.4,from:"random"}}),e(t,a)}),y.set(".text-split",{opacity:1})});
//# sourceMappingURL=commonHelpers.js.map
