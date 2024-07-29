import{i as l,S as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function f(o){const s="https://pixabay.com/api/",i="45170057-222a781b727842b81c5ded16b",t=new URLSearchParams({key:i,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${s}?${t}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function m({webformatURL:o,largeImageURL:s,tags:i,likes:t,views:e,comments:r,downloads:a}){return`<li class="gallery">
            <a class="list" href="${s}">
              <img class="photo" src="${o}" alt="${i}" />
              <ul class="properties-list">
                <li>
                  <p class="prop">Likes</p>
                  <p class="prop-value">${t}</p>
                </li>
                <li>
                  <p class="prop">Views</p>
                  <p class="prop-value">${e}</p>
                </li>
                <li>
                  <p class="prop">Comments</p>
                  <p class="prop-value">${r}</p>
                </li>
                <li>
                  <p class="prop">Downloads</p>
                  <p class="prop-value">${a}</p>
                </li>
              </ul>
            </a>
          </li>`}function d(o){return o.map(m).join("")}const n="/goit-js-hw-11/assets/error-7a2045ea.svg",p=document.querySelector(".js-form"),h=document.querySelector(".js-gallery-list"),c=document.querySelector(".loader");p.addEventListener("submit",g);function g(o){o.preventDefault();const i=new FormData(p).get("search").trim();if(i==="")return l.error({iconUrl:n,title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",message:"The field cannot be empty!"});c.classList.remove("hidden"),f(i).then(t=>{if(t.hits.length===0)return l.error({iconUrl:n,title:"Error",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});h.innerHTML=d(t.hits),new u(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(t=>{console.log(t)}).finally(()=>{c.classList.add("hidden"),o.target.reset()})}
//# sourceMappingURL=commonHelpers.js.map
