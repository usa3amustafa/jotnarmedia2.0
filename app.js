document.addEventListener('DOMContentLoaded', function () {
  Marquee3k.init()
})

const swiper = new Swiper('.swiper', {
  modules: [EffectSlicer],
  threshold: 5,
  observer: true,
  observeParents: true,
  watchSlidesProgress: true,
  loop: true,
  autoplay: { disableOnInteraction: false, enabled: true },
  grabCursor: true,
  effect: 'slicer',
  slidesPerGroupAuto: false,
  pagination: {
    clickable: true,
    dynamicBullets: true,
    el: '.swiper-pagination',
  },
  keyboard: { enabled: true },
})
