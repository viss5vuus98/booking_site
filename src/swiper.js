import Swiper from "swiper";

const swiper = new Swiper('.marqueeContent', {
  allowTouchMove: false,
  slidesPerView: 'auto',
  autoplay: {
    delay: 0
  },
  loop: true,
  speed: 5000,
})