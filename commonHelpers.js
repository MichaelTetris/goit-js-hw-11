import{S as u,i as n}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(s,o){const r="43418044-448fc0127227a847b3808d395",a="https://pixabay.com/api/",e=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});return fetch(`${a}?${e}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>{throw new Error("Failed to fetch images")})}function m(s){return s.hits.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:i,comments:d,downloads:p})=>`
        <li class="card">
            <div class="place-for-image">
                <a href="${a}">
                    <img src="${r}" alt="${e}" class="picture"/>
                </a>
            </div>
            <div class="info-text">
                <div class="description">
                    <span class="bold-text">Likes</span>
                    <span class="info-value">${t}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Views</span>
                    <span class="info-value">${i}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Comments</span>
                    <span class="info-value">${d}</span>
                </div>
                <div class="description">
                    <span class="bold-text">Downloads</span>
                    <span class="info-value">${p}</span>
                </div>
            </div>
        </li>`).join("")}const h=document.querySelector(".search-form"),c=document.querySelector(".loader"),l=document.querySelector(".list_gallery"),y=new u(".card .place-for-image a",{captionsData:"alt",captionDelay:250});h.addEventListener("submit",g);function g(s){s.preventDefault(),l.innerHTML="",c.style.display="inline-block";const o=s.currentTarget.elements.inputElement.value;f(o).then(r=>{if(r.total==0)return n.show({title:"Ops.",titleColor:"white",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",color:"red",position:"topRight",timeout:"5000"}),s.target.reset(),0;l.insertAdjacentHTML("beforeend",m(r)),y.refresh(),s.target.reset()}).catch(r=>{n.show({title:"Ops.",titleColor:"white",message:r,messageColor:"white",color:"red",position:"topCenter",timeout:"5000"})}).finally(()=>{c.style.display="none"})}
//# sourceMappingURL=commonHelpers.js.map
