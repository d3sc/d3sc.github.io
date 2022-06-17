var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  centerSlide: "true",
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //   untuk Responsive
  //   breakpoints: {
  //     0: {
  //       slidesPerView: 1,
  //     },
  //     520: {
  //       slidesPerView: 2,
  //     },
  //     950: {
  //       slidesPerView: 3,
  //     },
  //   },
});
