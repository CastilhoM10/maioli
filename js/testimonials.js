

document.addEventListener("DOMContentLoaded", function(){

const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".testimonial-card");
const next = document.querySelector(".test-next");
const prev = document.querySelector(".test-prev");

let index = 0;

function updateSlider(){
track.style.transform = "translateX(-" + index * 100 + "%)";
}

next.addEventListener("click", function(){

index++;

if(index >= cards.length){
index = 0;
}

updateSlider();

});

prev.addEventListener("click", function(){

index--;

if(index < 0){
index = cards.length - 1;
}

updateSlider();

});

});

