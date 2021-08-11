//resposive nav menu

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

//video slider navigation

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");
const slider = document.querySelector(".hero-section");

let sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

//image slider autoplay
const numberOfSlides = slides.length;
let slideNumber = 0;
let playslider;
let repeater = () => {
  playslider = setInterval(function () {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    contents.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });
    btns.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });
    slideNumber++;
    if (slideNumber > numberOfSlides - 1) {
      slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
    btns[slideNumber].classList.add("active");
    contents[slideNumber].classList.add("active");
  }, 7000);
};
repeater();

//stop the image slider autoplay on mouseover

slider.addEventListener("mouseover", () => {
  clearInterval(playslider);
});

//play the image slider autoplay on mouseleave

slider.addEventListener("mouseout", () => {
  repeater();
});
