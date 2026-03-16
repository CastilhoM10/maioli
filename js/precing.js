const cards = document.querySelectorAll(".plan-card");
const dots = document.querySelectorAll(".dot");

let index = 1;

/* ======================
ATUALIZA CARROSSEL
====================== */

function updateCarousel(){

cards.forEach(card=>{
card.classList.remove("active","left","right");
card.style.display = "none";
});

if(window.innerWidth <= 768){

/* MOBILE */

cards[index].style.display = "block";
cards[index].classList.add("active");

}else{

/* DESKTOP */

cards.forEach(card=>{
card.style.display = "block";
});

cards[index].classList.add("active");

if(cards[index - 1]){
cards[index - 1].classList.add("left");
}

if(cards[index + 1]){
cards[index + 1].classList.add("right");
}

}

/* atualizar dots */

if(dots.length){

dots.forEach(dot => dot.classList.remove("active"));

if(dots[index]){
dots[index].classList.add("active");
}

}

}

/* ======================
BOTÃO NEXT
====================== */

document.querySelector(".next").onclick = () => {

index++;

if(index >= cards.length){
index = 0;
}

updateCarousel();

};

/* ======================
BOTÃO PREV
====================== */

document.querySelector(".prev").onclick = () => {

index--;

if(index < 0){
index = cards.length - 1;
}

updateCarousel();

};

/* ======================
SWIPE MOBILE
====================== */

let startX = 0;
let endX = 0;

const carousel = document.querySelector(".carousel");

carousel.addEventListener("touchstart",(e)=>{

startX = e.touches[0].clientX;

});

carousel.addEventListener("touchend",(e)=>{

endX = e.changedTouches[0].clientX;

handleSwipe();

});

function handleSwipe(){

let diff = startX - endX;

if(Math.abs(diff) < 50) return;

if(diff > 0){

/* swipe esquerda */

index++;

if(index >= cards.length){
index = 0;
}

}else{

/* swipe direita */

index--;

if(index < 0){
index = cards.length - 1;
}

}

updateCarousel();

}

/* ======================
RESIZE
====================== */

window.addEventListener("resize", updateCarousel);

/* iniciar */

updateCarousel();