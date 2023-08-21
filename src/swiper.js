// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.marquee', {
  allowTouchMove: false,
  slidesPerView: 'auto',
  autoplay: {
    delay: 0
  },
  loop: true,
  speed: 8000,
})

const swiper2 = new Swiper('.carousel', {
  slidesPerView: 1,
  spaceBetween: 15,  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
})