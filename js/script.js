const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const states = document.querySelectorAll(".switch-state .item");

prev.addEventListener("click", function () {
  console.log("prev");
});
next.addEventListener("click", function () {
  console.log("prev");
});

const swiper = new Swiper(".formslider", {
  autoHeight: true,
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

swiper.on("slideChange", function () {
  states.forEach((state) => state.classList.remove("active"))
  states[swiper.realIndex].classList.add('active')
});
