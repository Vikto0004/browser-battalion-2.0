import{S as j,i as w,a as S,A as k}from"./assets/vendor-d136673e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=r(s);fetch(s.href,t)}})();const J=()=>{document.querySelector(".mob-menu-container").classList.add("is-open")},x=()=>{document.querySelector(".mob-menu-container").classList.remove("is-open")};document.querySelector(".open-menu-btn").addEventListener("click",J);document.querySelector(".close-menu-btn").addEventListener("click",x);const L=e=>{e.preventDefault();const o=e.currentTarget.getAttribute("href").slice(1),r=document.getElementById(o);x(),window.scrollTo({top:r.offsetTop,behavior:"smooth"})};document.querySelectorAll(".mob-menu-list a").forEach(e=>{e.addEventListener("click",L)});const W="/browser-battalion-2.0/assets/power-fd80ffc2.webp",q="/browser-battalion-2.0/assets/power-2x-3f9fafa4.webp",E="/browser-battalion-2.0/assets/power-min-dc5a1c34.jpg",N="/browser-battalion-2.0/assets/power-2x-min-7a1fbbd3.jpg",R="/browser-battalion-2.0/assets/mimino-1d7f41d2.webp",$="/browser-battalion-2.0/assets/mimino-2x-f1c5873f.webp",T="/browser-battalion-2.0/assets/mimino-min-8666f2c8.jpg",G="/browser-battalion-2.0/assets/mimino-2x-min-fc76a66c.jpg",M="/browser-battalion-2.0/assets/vyshyvanka-de727801.webp",B="/browser-battalion-2.0/assets/vyshyvanka-2x-841e8400.webp",I="/browser-battalion-2.0/assets/vyshyvanka-min-3a9dd024.jpg",P="/browser-battalion-2.0/assets/vyshyvanka-2x-min-a051def3.jpg",A="/browser-battalion-2.0/assets/green-333668db.webp",C="/browser-battalion-2.0/assets/green-2x-090176c4.webp",O="/browser-battalion-2.0/assets/green-min-0d29f8e7.jpg",F="/browser-battalion-2.0/assets/green-2x-min-fc18d9ae.jpg",H="/browser-battalion-2.0/assets/wallet-b3019c59.webp",V="/browser-battalion-2.0/assets/wallet-2x-f516c841.webp",D="/browser-battalion-2.0/assets/wallet-min-86041c09.jpg",z="/browser-battalion-2.0/assets/wallet-2x-min-5b295b0c.jpg",K="/browser-battalion-2.0/assets/chego-95fbcdda.webp",U="/browser-battalion-2.0/assets/chego-2x-4d940ca7.webp",_="/browser-battalion-2.0/assets/chego-min-b5c2f6e2.jpg",Q="/browser-battalion-2.0/assets/chego-2x-min-5f3c1d1b.jpg",X="/browser-battalion-2.0/assets/energy-c6c58d07.webp",Y="/browser-battalion-2.0/assets/energy-2x-5118f44d.webp",Z="/browser-battalion-2.0/assets/energy-min-d20414c1.jpg",ee="/browser-battalion-2.0/assets/energy-2x-min-8cd25da6.jpg",te="/browser-battalion-2.0/assets/fruitbox-d08ffba9.webp",se="/browser-battalion-2.0/assets/fruitbox-2x-11e54913.webp",oe="/browser-battalion-2.0/assets/fruitbox-min-0db2fa14.jpg",re="/browser-battalion-2.0/assets/fruitbox-2x-min-051da1fe.jpg",ie="/browser-battalion-2.0/assets/english-e6713cd4.webp",ae="/browser-battalion-2.0/assets/english-2x-7dc8952f.webp",ne="/browser-battalion-2.0/assets/english-min-df59428e.jpg",ce="/browser-battalion-2.0/assets/english-2x-min-111f89b3.jpg",le="/browser-battalion-2.0/assets/starlight-efcf2d1a.webp",pe="/browser-battalion-2.0/assets/starlight-2x-4b86cd2d.webp",be="/browser-battalion-2.0/assets/starlight-min-5b96ea05.jpg",ge="/browser-battalion-2.0/assets/starlight-2x-min-63c6cf4f.jpg",f=[{images:{webp:{"1x":W,"2x":q},jpg:{"1x":E,"2x":N}},skills:"React, JavaScript, Node JS, Git",title:"power pulse webservice"},{images:{webp:{"1x":R,"2x":$},jpg:{"1x":T,"2x":G}},skills:"React, JavaScript, Node JS, Git",title:"mimino website"},{images:{webp:{"1x":M,"2x":B},jpg:{"1x":I,"2x":P}},skills:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page"},{images:{webp:{"1x":A,"2x":C},jpg:{"1x":O,"2x":F}},skills:"React, JavaScript, Node JS, Git",title:"green harvest online store"},{images:{webp:{"1x":H,"2x":V},jpg:{"1x":D,"2x":z}},skills:"React, JavaScript, Node JS, Git",title:"wallet webservice"},{images:{webp:{"1x":K,"2x":U},jpg:{"1x":_,"2x":Q}},skills:"React, JavaScript, Node JS, Git",title:"chego jewelry website"},{images:{webp:{"1x":X,"2x":Y},jpg:{"1x":Z,"2x":ee}},skills:"React, JavaScript, Node JS, Git",title:"energy flow webservice"},{images:{webp:{"1x":te,"2x":se},jpg:{"1x":oe,"2x":re}},skills:"React, JavaScript, Node JS, Git",title:"fruitbox online store"},{images:{webp:{"1x":ie,"2x":ae},jpg:{"1x":ne,"2x":ce}},skills:"React, JavaScript, Node JS, Git",title:"english excellence webservice"},{images:{webp:{"1x":le,"2x":pe},jpg:{"1x":be,"2x":ge}},skills:"React, JavaScript, Node JS, Git",title:"starlight studio landing page"}],de="/browser-battalion-2.0/assets/sprite-43d473e9.svg",m=document.querySelector(".projects-list"),c=document.querySelector(".projects-load-btn");let l=0;const h=(e,o)=>{const r=e+o,i=f.slice(e,r),s=i.map(t=>`
    <li class="projects-item">
      <picture>
        <source class="projects-item-img" srcset="${t.images.webp["1x"]} 1x, ${t.images.webp["2x"]} 2x" type="image/webp">
        <source class="projects-item-img" srcset="${t.images.jpg["1x"]} 1x, ${t.images.jpg["2x"]} 2x" type="image/jpeg">
        <img class="projects-item-img" src="${t.images.jpg["1x"]}" alt="${t.title}">
      </picture>
      <p class="projects-item-skills">${t.skills}</p>
      <div class="projects-item-bottom">
        <h3 class="projects-item-title">${t.title}</h3>
        <a href="https://github.com/Vikto0004/browser-battalion-2.0" target="_blank" class="projects-item-btn">
          VISIT
          <svg class="projects-item-btn-icon">
            <use href="${de}#icon-arrow-visit"></use>
          </svg>
        </a>
      </div>
    </li>
  `).join("");m.insertAdjacentHTML("beforeend",s),i.forEach((t,a)=>{setTimeout(()=>{m.querySelector(`li:nth-child(${e+a+1})`).classList.add("show")},100*a)})},we=e=>{c.classList.add("load"),setTimeout(()=>{c.classList.remove("load"),l+=3,h(l,3),l>=f.length-1&&(c.style.display="none"),setTimeout(()=>{window.scrollBy({top:300,behavior:"smooth"})},100)},2e3)};h(l,3);c.addEventListener("click",we);const me=e=>{w.settings({timeout:5e3,titleColor:"#fff",position:"topRight",messageColor:"#fff",icon:"",close:!1}),w.error({message:e,class:"error-notification",timeout:5e3,titleColor:"#fff",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0})},ue=async()=>{try{const e=await S.get("https://portfolio-js.b.goit.study/api/reviews");if(e.status!==200)throw new Error(e.status);return e.data}catch(e){throw new Error(`Fetching reviews failed: ${e.message}`)}};new j("#reviews-slider",{autoHeight:!0,breakpoints:{320:{slidesPerView:1,spaceBetween:10},991:{slidesPerView:2,spaceBetween:32}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const u=document.querySelector(".swiper-wrapper.is-reviews");ue().then(e=>{const o=e.map(({author:r,avatar_url:i,review:s})=>`
            <li class="reviews-review-card swiper-slide">
                <p class="review-card-text">${s}</p>
                <div class="review-card-author">
                    <img
                        class="review-card-author-avatar"
                        src="${i}"
                        alt="review author photo"
                        width="40"
                        height="40"
                    />
                    <p class="review-card-author-name">${r}</p>
                </div>
                </li>
        `).join("");u.insertAdjacentHTML("afterbegin",o)}).catch(e=>{u.insertAdjacentHTML("afterbegin",'<p class="reviews-error-text">Not found</p>'),me(e.message)});const y=document.querySelector(".work-together-form"),n=document.querySelector(".work-together-input"),g=document.querySelector(".work-together-message");document.querySelector(".work-together-submit");const p=document.querySelector(".work-together-success"),b=document.querySelector(".work-together-errorInput"),d=document.querySelector(".work-together-errorMessage"),xe=document.querySelector(".work-together-close"),v=document.querySelector(".work-together-backdrop"),fe=()=>{g.value!==""&&n.value!==""&&(v.classList.add("is-open"),y.reset(),b.style.display="none",d.style.display="none",p.style.display="none")};xe.addEventListener("click",()=>{v.classList.remove("is-open")});const he=()=>{n.validity.valid?(p.style.display="block",b.style.display="none"):p.style.display="none",n.value===""&&(p.style.display="none")};n.addEventListener("input",he);y.addEventListener("submit",e=>{e.preventDefault(),n.value.trim()===""&&(b.style.display="block",b.textContent="the field must be filled"),g.value.trim()===""?d.style.display="block":d.style.display="none",n.value.trim()!==""&&g.value.trim()!==""&&fe()});new k(".accordion-container");
//# sourceMappingURL=commonHelpers.js.map
