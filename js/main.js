var mySwiper = new Swiper('.slider', {
  speed: 400,
  spaceBetween: 27,
  slidesPerView: 3,
  loop: true,
  navigation: {
    nextEl: '.arrows-right',
    prevEl: '.arrows-left'
  },
  breakpoints: {
    320:{
      slidesPerView: 1,
      spaceBetween: 0,
    },
    567:{
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768:{
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1200:{
      spaceBetween: 27,
      slidesPerView: 3,
    }
  }
});
new WOW().init();