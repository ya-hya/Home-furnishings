// Navbar Vars
let menubtn = document.getElementById("menuBtn");
let menulinkes = document.getElementById("menulinkes");
let links = document.getElementsByTagName("li");

// Slider Vars
const sliderCont = document.getElementById("sliderContId");
const slider = document.getElementById("sliderId");
const cards = document.querySelectorAll(".card");
let currentIndex = 0;
let prevIsClicked = 0;
let nextIsClicked = 0;
let sliderContWidth = sliderCont.offsetWidth;
let sliderWidth = slider.offsetWidth;
const cardWidth = cards[0].offsetWidth + 20;
const nextbtns = document.getElementsByClassName("next");
const prevbtns = document.getElementsByClassName("prev");

// Navbar
menubtn.onclick = ()=>{
    if (window.innerWidth < 646) {
        menulinkes.classList.toggle("isActive");
    }
}

for (let i = 0; i < links.length; i++) {
    if (window.innerWidth < 646) {
        links[i].onclick = () => menubtn.onclick();
    }
}

  
// Next button

for (let i = 0; i < nextbtns.length; i++) {
    nextbtns[i].onclick =  function () {
        if (!nextIsClicked) {
            if (currentIndex >= 0) return;
            nextIsClicked = 1;
            let sliderLeft = slider.offsetLeft * -1;
            if (sliderLeft < cardWidth)
                currentIndex += sliderLeft;
            else
                currentIndex += cardWidth;
            slider.style.left = `${currentIndex}px`;
            setTimeout(()=>{
                nextIsClicked = 0;
            },200);
        }
    };
    
}

// Previous button

for (let i = 0; i < prevbtns.length; i++) {

    prevbtns[i].onclick = function () {
        if (!prevIsClicked) {
            prevIsClicked = 1;
            let sliderLeft  = slider.offsetLeft;
            if (sliderLeft < 0) sliderLeft *= -1;
            let sliderRight = (sliderWidth - sliderLeft);
            if (sliderRight <= sliderContWidth) return;
            if (sliderRight - sliderContWidth < cardWidth)
                currentIndex -= (sliderRight - sliderContWidth);
            else
                currentIndex -= cardWidth;
            slider.style.left = `${currentIndex}px`;
            setTimeout(()=>{
                prevIsClicked = 0;
            },200);
        }
    };
}
  

