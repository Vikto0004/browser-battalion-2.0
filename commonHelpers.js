import{S as x,i as c,a as d}from"./assets/vendor-8b2781a5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const m="/browser-battalion-2.0/assets/power-fd80ffc2.webp",f="/browser-battalion-2.0/assets/power-2x-3f9fafa4.webp",h="/browser-battalion-2.0/assets/power-min-dc5a1c34.jpg",u="/browser-battalion-2.0/assets/power-2x-min-7a1fbbd3.jpg",v="/browser-battalion-2.0/assets/mimino-1d7f41d2.webp",j="/browser-battalion-2.0/assets/mimino-2x-f1c5873f.webp",y="/browser-battalion-2.0/assets/mimino-min-8666f2c8.jpg",J="/browser-battalion-2.0/assets/mimino-2x-min-fc76a66c.jpg",S="/browser-battalion-2.0/assets/vyshyvanka-de727801.webp",k="/browser-battalion-2.0/assets/vyshyvanka-2x-841e8400.webp",W="/browser-battalion-2.0/assets/vyshyvanka-min-3a9dd024.jpg",N="/browser-battalion-2.0/assets/vyshyvanka-2x-min-a051def3.jpg",R="/browser-battalion-2.0/assets/green-333668db.webp",$="/browser-battalion-2.0/assets/green-2x-090176c4.webp",L="/browser-battalion-2.0/assets/green-min-0d29f8e7.jpg",G="/browser-battalion-2.0/assets/green-2x-min-fc18d9ae.jpg",P="/browser-battalion-2.0/assets/wallet-b3019c59.webp",B="/browser-battalion-2.0/assets/wallet-2x-f516c841.webp",E="/browser-battalion-2.0/assets/wallet-min-86041c09.jpg",T="/browser-battalion-2.0/assets/wallet-2x-min-5b295b0c.jpg",C="/browser-battalion-2.0/assets/chego-95fbcdda.webp",M="/browser-battalion-2.0/assets/chego-2x-4d940ca7.webp",O="/browser-battalion-2.0/assets/chego-min-b5c2f6e2.jpg",q="/browser-battalion-2.0/assets/chego-2x-min-5f3c1d1b.jpg",I="/browser-battalion-2.0/assets/energy-c6c58d07.webp",A="/browser-battalion-2.0/assets/energy-2x-5118f44d.webp",H="/browser-battalion-2.0/assets/energy-min-d20414c1.jpg",V="/browser-battalion-2.0/assets/energy-2x-min-8cd25da6.jpg",F="/browser-battalion-2.0/assets/fruitbox-d08ffba9.webp",z="/browser-battalion-2.0/assets/fruitbox-2x-11e54913.webp",K="/browser-battalion-2.0/assets/fruitbox-min-0db2fa14.jpg",U="/browser-battalion-2.0/assets/fruitbox-2x-min-051da1fe.jpg",D="/browser-battalion-2.0/assets/english-e6713cd4.webp",Q="/browser-battalion-2.0/assets/english-2x-7dc8952f.webp",X="/browser-battalion-2.0/assets/english-min-df59428e.jpg",Y="/browser-battalion-2.0/assets/english-2x-min-111f89b3.jpg",Z="/browser-battalion-2.0/assets/starlight-efcf2d1a.webp",_="/browser-battalion-2.0/assets/starlight-2x-4b86cd2d.webp",ee="/browser-battalion-2.0/assets/starlight-min-5b96ea05.jpg",te="/browser-battalion-2.0/assets/starlight-2x-min-63c6cf4f.jpg",b=[{images:{webp:{"1x":m,"2x":f},jpg:{"1x":h,"2x":u}},skills:"React, JavaScript, Node JS, Git",title:"power pulse webservice"},{images:{webp:{"1x":v,"2x":j},jpg:{"1x":y,"2x":J}},skills:"React, JavaScript, Node JS, Git",title:"mimino website"},{images:{webp:{"1x":S,"2x":k},jpg:{"1x":W,"2x":N}},skills:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page"},{images:{webp:{"1x":R,"2x":$},jpg:{"1x":L,"2x":G}},skills:"React, JavaScript, Node JS, Git",title:"green harvest online store"},{images:{webp:{"1x":P,"2x":B},jpg:{"1x":E,"2x":T}},skills:"React, JavaScript, Node JS, Git",title:"wallet webservice"},{images:{webp:{"1x":C,"2x":M},jpg:{"1x":O,"2x":q}},skills:"React, JavaScript, Node JS, Git",title:"chego jewelry website"},{images:{webp:{"1x":I,"2x":A},jpg:{"1x":H,"2x":V}},skills:"React, JavaScript, Node JS, Git",title:"energy flow webservice"},{images:{webp:{"1x":F,"2x":z},jpg:{"1x":K,"2x":U}},skills:"React, JavaScript, Node JS, Git",title:"fruitbox online store"},{images:{webp:{"1x":D,"2x":Q},jpg:{"1x":X,"2x":Y}},skills:"React, JavaScript, Node JS, Git",title:"english excellence webservice"},{images:{webp:{"1x":Z,"2x":_},jpg:{"1x":ee,"2x":te}},skills:"React, JavaScript, Node JS, Git",title:"starlight studio landing page"}],se="/browser-battalion-2.0/assets/sprite-43d473e9.svg",l=document.querySelector(".projects-list"),g=document.querySelector(".projects-load-btn");let n=0;const w=(s,o)=>{const a=s+o,r=b.slice(s,a),t=r.map(e=>`
    <li class="projects-item">
      <picture>
        <source class="projects-item-img" srcset="${e.images.webp["1x"]} 1x, ${e.images.webp["2x"]} 2x" type="image/webp">
        <source class="projects-item-img" srcset="${e.images.jpg["1x"]} 1x, ${e.images.jpg["2x"]} 2x" type="image/jpeg">
        <img class="projects-item-img" src="${e.images.jpg["1x"]}" alt="${e.title}">
      </picture>
      <p class="projects-item-skills">${e.skills}</p>
      <div class="projects-item-bottom">
        <h3 class="projects-item-title">${e.title}</h3>
        <a href="https://github.com/Vikto0004/browser-battalion-2.0" class="projects-item-btn">
          VISIT
          <svg class="projects-item-btn-icon">
            <use href="${se}#icon-arrow-visit"></use>
          </svg>
        </a>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",t),r.forEach((e,i)=>{setTimeout(()=>{l.querySelector(`li:nth-child(${s+i+1})`).classList.add("show")},100*i)})},oe=s=>{n+=3,w(n,3),n>=b.length-1&&(g.style.display="none"),setTimeout(()=>{window.scrollBy({top:300,behavior:"smooth"})},100)};w(n,3);g.addEventListener("click",oe);const re=s=>{c.settings({timeout:5e3,titleColor:"#fff",position:"topRight",messageColor:"#fff",icon:"",close:!1}),c.error({message:s,class:"error-notification",timeout:5e3,titleColor:"#fff",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",progressBarColor:"#B51B1B",close:!0})},ie=async()=>{try{const s=await d.get("https://portfolio-js.b.goit.study/api/reviews");if(s.status!==200)throw new Error(s.status);return s.data}catch(s){throw new Error(`Fetching reviews failed: ${s.message}`)}};new x("#reviews-slider",{autoHeight:!0,breakpoints:{320:{slidesPerView:1,spaceBetween:10},991:{slidesPerView:2,spaceBetween:32}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const p=document.querySelector(".swiper-wrapper.is-reviews");ie().then(s=>{const o=s.map(({author:a,avatar_url:r,review:t})=>`
            <li class="reviews-review-card swiper-slide">
                <p class="review-card-text">${t}</p>
                <div class="review-card-author">
                    <img
                        class="review-card-author-avatar"
                        src="${r}"
                        alt="review author photo"
                        width="40"
                        height="40"
                    />
                    <p class="review-card-author-name">${a}</p>
                </div>
                </li>
        `).join("");p.insertAdjacentHTML("afterbegin",o)}).catch(s=>{p.insertAdjacentHTML("afterbegin",'<p class="reviews-error-text">Not found</p>'),re(s.message)});
//# sourceMappingURL=commonHelpers.js.map
