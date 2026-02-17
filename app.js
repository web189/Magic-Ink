function wa(){
window.open("https://wa.me/628881190614","_blank");
}

function scrollPortfolio(){
document.getElementById("portfolio").scrollIntoView({
behavior:"smooth"
});
}

// LOADING HILANG → LANGSUNG KE HEADER
window.onload=()=>{
setTimeout(()=>{
document.getElementById("loader").style.display="none";
window.scrollTo(0,0);
},1200);
};

// LOADING BAR PROGRESS
let load=0;
const fill=document.getElementById("loadFill");

let interval=setInterval(()=>{
load+=3;
fill.style.width=load+"%";

if(load>=100){
clearInterval(interval);

setTimeout(()=>{
document.getElementById("loader").style.opacity="0";

setTimeout(()=>{
document.getElementById("loader").style.display="none";
window.scrollTo(0,0);
},600);

},400);
}

},40);



// SCROLL ANIMATION
const obs=new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.classList.add("active");
}
});
});
document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));

// BOOKING SCROLL
function scrollBooking(){
document.getElementById("booking").scrollIntoView({behavior:"smooth"});
}

// WA
function kirim(){
let nama=document.getElementById("nama").value;
let desain=document.getElementById("desain").value;
let jenis=document.getElementById("jenis").value;

let text=`Halo Magic Ink
Nama: ${nama}
Desain: ${desain}
Jenis: ${jenis}`;

window.open("https://wa.me/628881190614?text="+encodeURIComponent(text));
}

// IG
function ig(){
window.open("https://instagram.com/magicinktattootemporary");
}

// TIKTOK
function tiktok(){
window.open("https://tiktok.com/@magicinktattootemporary");
}

const glow=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",e=>{
glow.style.left=e.clientX-100+"px";
glow.style.top=e.clientY-100+"px";
});

const slider=document.getElementById("slider");
const after=document.getElementById("afterImg");

if(slider){
slider.addEventListener("input",()=>{
after.style.width=slider.value+"%";
});
}

// RIPPLE EFFECT
document.querySelectorAll(".fx").forEach(btn=>{
btn.addEventListener("click",function(e){

let ripple=document.createElement("span");
ripple.classList.add("ripple");

let rect=btn.getBoundingClientRect();
ripple.style.left=e.clientX-rect.left+"px";
ripple.style.top=e.clientY-rect.top+"px";

btn.appendChild(ripple);

setTimeout(()=>{ripple.remove()},600);

});
});

function openIg(){
window.open("https://instagram.com/benyoriki");
}
