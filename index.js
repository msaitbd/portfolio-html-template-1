
// navigator stcky
 const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
      navbar.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'bg-white', 'shadow-lg', 'z-50');
      navbar.classList.remove('container', 'mx-auto'); // remove container width so it stretches full width
    } else {
      navbar.classList.remove('fixed', 'top-0', 'left-0', 'right-0', 'bg-white', 'shadow-lg', 'z-50');
      navbar.classList.add('container', 'mx-auto');
    }
  });



//   navbar Response icon

 const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  const dropdownBtn = document.getElementById('mobile-dropdown-btn');
  const dropdown = document.getElementById('mobile-dropdown');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  dropdownBtn.addEventListener('click', () => {
    dropdown.classList.toggle('hidden');
  });



// counter Up

 const counters = document.querySelectorAll(".counter");
  const speed = 200; // Lower = faster
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });