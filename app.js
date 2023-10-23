document.addEventListener('DOMContentLoaded', function () {
  // Initialize marquee
  Marquee3k.init()

  // Handle navbar background and active link on scroll
  const navbar = document.querySelector('#nav')
  const sections = document.querySelectorAll('header, section')
  const navLinks = document.querySelectorAll('nav a')
  window.addEventListener('scroll', () => {
    // Navbar background change
    if (window.scrollY > 10) {
      navbar.style.backgroundColor = '#060f1e'
      navbar.style.padding = '0.5rem 0'
    } else {
      navbar.style.backgroundColor = 'transparent'
    }

    // Active link detection
    let current = ''
    sections.forEach(section => {
      const sectionTop = section.offsetTop
      const sectionHeight = section.clientHeight
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id')
      }
    })
    navLinks.forEach(link => {
      link.classList.remove('active-link')
      if (link.getAttribute('href').substr(1) === current) {
        link.classList.add('active-link')
      }
    })
  })

  // Initialize Swiper
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

  // Initialize Lenis
  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  // Navbar toggle functionality
  const nav = document.querySelector('.nav-links')
  const hamburger = document.querySelector('.hamburger-icon')
  const closeIcon = document.querySelector('.close-icon')
  const navOverlay = document.querySelector('.nav-mob-bg-overlay')
  const navItems = document.querySelectorAll('.nav-link, .nav-social-link')

  hamburger.addEventListener('click', () => {
    nav.classList.add('open-nav')
    navOverlay.classList.add('open-nav-mob-bg-overlay')
  })

  closeIcon.addEventListener('click', () => {
    nav.classList.remove('open-nav')
    navOverlay.classList.remove('open-nav-mob-bg-overlay')
  })

  navItems.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open-nav')
      navOverlay.classList.remove('open-nav-mob-bg-overlay')
    })
  })
})
