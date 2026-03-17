(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function x(e){const a=document.getElementById("app");a.innerHTML="",e.forEach(t=>{const n=document.createElement("div");n.innerHTML=`
        <div class="ep-container">
            <p class="ep">Episodio</p>
            <p class="episode">${t.episode}</p>
            
            <h3 class="ep-name">${t.name}</h3> 
            <p class="estreno">Estreno<p class="ep-air">${t.air_date}</p></p>
            
            
        </div>
    `,n.classList.add("ep"),a.appendChild(n)})}const J=async e=>await(await fetch(e)).json();async function q(e){const a=await Promise.all(e.map(n=>J(n))),t=document.getElementById("informacion");a.forEach(n=>{const s=document.createElement("div");s.innerHTML=` <span class="epep">${n.episode}</span> - <span class="eptittle">${n.name}</span>`,t.appendChild(s)})}function z(){let e=0;const a=document.querySelector("header");window.addEventListener("scroll",()=>{const t=window.pageYOffset;t>e?a.classList.add("hidden"):a.classList.remove("hidden"),e=t})}function $(){window.scrollTo({top:0,behavior:"smooth"})}function B(e){let a=document.getElementById("overlay");a.style.display="flex",document.body.style.overflow="hidden",q(e.episode),a.innerHTML="",a.innerHTML=` 

       <div class="overlay-container">
            <div class="overlay-img-container"> 
                <button id="close-overlay">X</button> 
                <img src="${e.image}" alt=""> 
            </div> 
            <section class="detail-info-container"> 
                <article> 
                    <h3 class="character-name">${e.name}</h3> 
                    <h4 class="info-tittle">Información</h4> 
                    <div class="informacion"> 
                        <div> 
                            <h5>ESTADO</h5> 
                            <p>${e.status}</p> 
                        </div> 
                        <div> 
                            <h5>ESPECIE</h5> 
                            <p>${e.species}</p> 
                        </div> 
                        <div> 
                            <h5>GÉNERO</h5> 
                            <p>${e.gender}</p> 
                        </div> 
                        <div> 
                            <h5>ORIGEN</h5> 
                            <p>${e.origin.name}</p> 
                        </div> 
                        <div> 
                            <h5>UBICACIÓN</h5> 
                            <p>${e.location.name}</p> 
                        </div> 
                    </div> 
                </article> 
                <article class=""> 
                    <h4>Apariciones (${e.episode.length})</h4> 
                    
                    <div id="informacion"></div>
                </article> 
            </section> 
        </div> 
    `,document.getElementById("close-overlay").addEventListener("click",n=>{n.preventDefault(),a.style.display="none",document.body.style.overflow="scroll"}),a.addEventListener("click",n=>{n.target.id==="overlay"&&(n.target.style.display="none",document.body.style.overflow="auto")})}function G(){const e=JSON.parse(localStorage.getItem("arrayFavId"))||[],a=document.getElementById("count-fav");a.textContent=e.length,e.length>0?a.style.display="inline-block":a.style.display="none"}let E=[];function R(e){app.innerHTML="";const a=JSON.parse(localStorage.getItem("arrayFavId"))||[];e.forEach(t=>{let n=document.createElement("div");n.innerHTML=`
        <div class="id" id="${t.id}"></div>
        <div class="img-container">
            <img src="${t.image}" alt="">
            <button class="status ${t.status}">${t.status}</button>
            <button class="favorite-btn">🤍</button>
        </div>
        <div class="info-container">
            <h3 class="character-name">${t.name}</h3>
            <p class="character-specie">${t.gender} - ${t.species}</p>
            <p class="character-location"><span>📍</span> ${t.location.name}</p>
        </div>
    `,n.addEventListener("click",()=>{B(t)});const s=n.querySelector(".favorite-btn");a.includes(t.id)&&(s.classList.add("active"),s.textContent="❤️"),s.addEventListener("click",o=>{o.preventDefault(),o.stopPropagation(),C(o)&&w()}),n.classList.add("card"),app.appendChild(n)}),O(),U()}const w=async()=>{if(document.getElementById("app").innerHTML="<p>Cargando...</p>",(JSON.parse(localStorage.getItem("arrayFavId"))||[]).length===0){app.innerHTML=`
      <div class="no-favs">
        <p>Guarda tus personajes favoritos para visualizar.</p>
      </div>
    `,actualizarPagInfo?.();return}let a=`https://rickandmortyapi.com/api/character/${localStorage.getItem("arrayFavId")}`;await fetch(a).then(t=>t.json()).then(t=>{E=Array.isArray(t)?t:[t],document.getElementById("app").innerHTML="",R(E)})};function C(e){const a=e.target.closest(".card"),t=Number(a.querySelector(".id").id);let n=JSON.parse(localStorage.getItem("arrayFavId"))||[];const s=n.includes(t);s?(n=n.filter(r=>r!==t),e.target.classList.remove("active"),e.target.textContent="🤍"):(n.push(t),e.target.classList.add("active"),e.target.textContent="❤️"),localStorage.setItem("arrayFavId",JSON.stringify(n));const o=document.getElementById("count-fav");return o.textContent=n.length,o.style.display=n.length>0?"inline-block":"none",s}function T(e){const a=document.getElementById("app"),t=JSON.parse(localStorage.getItem("arrayFavId"))||[];a.innerHTML="",e.forEach(n=>{const s=document.createElement("div");s.innerHTML=`
        <div class="id " id="${n.id}" ></div>
        <div class="img-container">
            <img src= "${n.image}" alt="">
            <button class="status ${n.status} ">${n.status}</button>

            <button class="favorite-btn " >🤍</button>
           
        </div>
        <div class="info-container">
            <h3 class="character-name">${n.name}</h3>
            <p class="character-specie">${n.gender} - ${n.species}</p>
            <p class="character-location"><span>📍</span> ${n.location.name} </p>
        </div>
    `,s.addEventListener("click",v=>{console.log("abriendo overlay"),B(n)});const o=s.querySelector(".favorite-btn");t.includes(n.id)&&(o.classList.add("active"),o.textContent="❤️"),o.addEventListener("click",v=>{v.preventDefault(),v.stopPropagation(),C(v)}),(JSON.parse(localStorage.getItem("arrayFavId"))||[]).includes(n.id)?(o.classList.add("active"),o.textContent="❤️"):(o.classList.remove("active"),o.textContent="🤍"),s.classList.add("card"),a.appendChild(s)})}let i=1,c=1,L=[],I=[];const u=async e=>{document.getElementById("app").innerHTML="<p>Cargando...</p>";let a=`https://rickandmortyapi.com/api/character/?page=${e}`;try{await fetch(a).then(t=>{if(!t.ok)throw new Error(`Error HTTP:${t.status}`);return t.json()}).then(t=>{L=t.results,i=e,c=t.info.pages,document.getElementById("app").innerHTML="",T(L),H(),N(),$()})}catch(t){console.error("Error al cargar personajes:",t),document.getElementById("app").innerHTML=`
      <p style="color:red; font-weight:bold;">
        Ocurrió un error al cargar los personajes. Intenta nuevamente.
      </p>
    `}},h=async e=>{document.getElementById("app").innerHTML="<p>Cargando...</p>";const a=`https://rickandmortyapi.com/api/episode/?page=${e}`;try{await fetch(a).then(t=>{if(!t.ok)throw Error(`Error HTTP:${t.status}`);return t.json()}).then(t=>{I=t.results,i=e,c=t.info.pages,document.getElementById("app").innerHTML="",x(I),H(),N(),$()})}catch(t){console.error("Error al cargar personajes:",t),document.getElementById("app").innerHTML=`
      <p style="color:red; font-weight:bold;">
        Ocurrió un error al cargar los personajes. Intenta nuevamente.
      </p>
    `}},M=document.getElementById("btn-ep"),S=document.getElementById("btn-ch");document.getElementById("btn-fav");function H(){const e=document.getElementById("paginfo");e.innerHTML=`Página ${i} de ${c}`}function U(){const e=document.getElementById("paginfo");e.innerHTML=""}function P(){S.classList.contains("active")&&i<c&&u(i+1),M.classList.contains("active")&&i<c&&h(i+1)}function F(){S.classList.contains("active")&&i>1&&u(i-1),M.classList.contains("active")&&i>1&&h(i-1)}const l=document.getElementById("siguiente"),d=document.getElementById("anterior");l.addEventListener("click",e=>{e.preventDefault(),P()});d.addEventListener("click",e=>{e.preventDefault(),console.log("anterior"),F()});function O(){l.disabled=!0,d.disabled=!0}function K(){l.disabled=!1,d.disabled=!1}function N(){i===1?d.disabled=!0:d.disabled=!1,i===c?l.disabled=!0:l.disabled=!1}const y=document.getElementById("app"),k=document.getElementById("search"),A=document.getElementById("filtro");async function X(){console.log("Cargando todos los personajes..."),p=await D(),console.log("Personajes cargados:",p.length),k.addEventListener("input",b),A.addEventListener("input",b)}X();async function D(){let e="https://rickandmortyapi.com/api/character",a=await fetch(e).then(s=>s.json()),t=[...a.results],n=a.info.pages;for(let s=2;s<=n;s++){let o=await fetch(`${e}?page=${s}`).then(r=>r.json());t=[...t,...o.results]}return t}let p=[];(async()=>p=await D())();function b(){if(p.length===0)return;const e=k.value.toLowerCase(),a=A.value.toLowerCase();if(e===""&&a===""){y.innerHTML="",u(i),K();return}const t=p.filter(n=>{const s=n.name.toLowerCase().includes(e),o=n.status.toLowerCase().includes(a);return s&&o});if(y.innerHTML="",t.length===0){y.innerHTML=' <div class="no-results"> <p>No se encontraron personajes con esos filtros...</p> </div> ';return}T(t),O()}console.log("MAIN CARGADO");document.addEventListener("DOMContentLoaded",()=>{u(1),G()});document.addEventListener("DOMContentLoaded",()=>{z()});l.addEventListener("click",e=>{e.preventDefault(),P()});d.addEventListener("click",e=>{e.preventDefault(),console.log("anterior"),F()});const m=document.getElementById("btn-ep"),f=document.getElementById("btn-ch"),g=document.getElementById("btn-fav");m.addEventListener("click",e=>{e.preventDefault(),f.classList.remove("active"),g.classList.remove("active"),m.classList.add("active"),document.getElementById("explorer").style.display="none",h(1)});f.addEventListener("click",e=>{e.preventDefault(),m.classList.remove("active"),g.classList.remove("active"),f.classList.add("active"),document.getElementById("explorer").style.display="inherit",u(1)});g.addEventListener("click",e=>{e.preventDefault(),f.classList.remove("active"),m.classList.remove("active"),g.classList.add("active"),document.getElementById("explorer").style.display="none",w()});
