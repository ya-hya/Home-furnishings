// Navbar Vars
let menubtn = document.getElementById("menuBtn");
let menulinkes = document.getElementById("menulinkes");
let links = document.getElementsByTagName("li");

// Navbar
menubtn.onclick = () => {
  if (window.innerWidth < 646) {
    menulinkes.classList.toggle("isActive");
  }
};

for (let i = 0; i < links.length; i++) {
  if (window.innerWidth < 646) {
    links[i].onclick = () => menubtn.onclick();
  }
}

// Swiper

var swiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,

  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    350: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    991: {
      slidesPerView: 4,
      spaceBetween: 35,
    },

    1100: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});
