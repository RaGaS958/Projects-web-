const button=document.querySelector("#innerb");
const outer=document.querySelector("#outerb");
const icon=document.querySelector("#innerb img");
const back=document.querySelector("body");
const txt=document.querySelector("h1");
let b=true;
button.addEventListener("click",()=>{
   if(b)
   {
    outer.style.justifyContent="end";
    icon.setAttribute("src","full-moon.png");
    outer.style.backgroundColor="rgb(44, 3, 39)";
    button.style.backgroundColor="rgb(51, 19, 92)";
    txt.innerText="NIGHT";
    back.style.backgroundImage="url('nightsky.png')";
    b=false;
   }
   else
   {
    outer.style.justifyContent="start";
    icon.setAttribute("src","sun.png");
    outer.style.backgroundColor="rgb(255, 231, 20)";
    txt.innerText="DAY";  
    back.style.backgroundImage="url('daysky.png')";
    button.style.backgroundColor="rgb(60, 117, 204)";
    b=true;
   }
});