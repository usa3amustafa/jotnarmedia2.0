// marquee
document.addEventListener('DOMContentLoaded', function () {
  Marquee3k.init()
})

// swiper
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

// lenis
const lenis = new Lenis()

lenis.on('scroll', e => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
