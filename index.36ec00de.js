(()=>{let e=document.querySelector(".speakers-slider-prev"),d=document.querySelector(".speakers-slider-next"),i=document.querySelectorAll(".speakers-item"),n=window.innerWidth,t=0,l=r();function r(){return n<744?1:n>744&&n<1440?3:n>=1440?i.length:void 0}let s=()=>{i.forEach((e,d)=>{d<t||d>=t+l?e.style.display="none":e.style.display="flex"})},a=()=>{t<=0?e.disabled=!0:e.disabled=!1,t+l>=i.length?d.disabled=!0:d.disabled=!1};window.addEventListener("resize",()=>{n=window.innerWidth,l=r(),s(),a()}),d.addEventListener("click",()=>{t+=1,s(),a()}),e.addEventListener("click",()=>{t-=1,s(),a()}),n<1440&&(s(),a())})();//# sourceMappingURL=index.36ec00de.js.map

//# sourceMappingURL=index.36ec00de.js.map
