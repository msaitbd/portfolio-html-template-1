
(() => {
  const el = document.getElementById('role');
  if (!el) return;
  const t = el.dataset.text || el.textContent || '';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return el.textContent = t;
  let i = 0, d = false;
  const tick = () => {
    el.textContent = t.slice(0, i);
    if (!d ? i++ === t.length ? setTimeout(() => { d = true; tick(); }, 1500) : setTimeout(tick, 80)
      : i-- === 0 ? (d = false, setTimeout(tick, 300)) : setTimeout(tick, 40));
  };
  setTimeout(tick, 250);
})();







const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

 const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });