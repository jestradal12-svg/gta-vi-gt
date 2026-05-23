/**
 * main.js — JavaScript Vanilla
 * Proyecto: GTA-VI-GT Landing Page
 * Procesos y Soluciones Tecnológicas, S.A.
 *
 * SIN frameworks, SIN jQuery, SIN librerías externas.
 * Solo JavaScript puro que el navegador entiende directamente.
 */

/* ==============================================
   1. LOADER — Oculta la pantalla de carga
   ============================================== */
window.addEventListener('load', function () {
  var loader = document.querySelector('.loader');
  if (!loader) return;

  // Espera 2s para que se vea la animación de carga
  setTimeout(function () {
    loader.classList.add('hidden');
  }, 2000);
});


/* ==============================================
   2. NAVBAR — Cambia estilo al hacer scroll
   ============================================== */
(function () {
  var navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  });
})();


/* ==============================================
   3. MENÚ HAMBURGUESA — Abre y cierra en móvil
   ============================================== */
(function () {
  var toggle = document.querySelector('.navbar__toggle');
  var links  = document.querySelector('.navbar__links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    links.classList.toggle('navbar__links--open');

    // Animación de las 3 líneas del botón
    var spans = toggle.querySelectorAll('span');
    toggle.classList.toggle('navbar__toggle--open');

    if (toggle.classList.contains('navbar__toggle--open')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  });

  // Cierra el menú al hacer clic en un link
  var navLinks = links.querySelectorAll('a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('navbar__links--open');
      toggle.classList.remove('navbar__toggle--open');
      var spans = toggle.querySelectorAll('span');
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    });
  });
})();


/* ==============================================
   4. REVEAL — Anima elementos al hacer scroll
   ============================================== */
(function () {
  var elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  function checkReveal() {
    var windowHeight = window.innerHeight;

    elements.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      // Si el elemento está a 80px de entrar a la vista
      if (rect.top < windowHeight - 80) {
        el.classList.add('visible');
      }
    });
  }

  // Revisar al cargar y al hacer scroll
  window.addEventListener('scroll', checkReveal);
  checkReveal(); // Revisión inicial
})();


/* ==============================================
   5. COUNTER — Animación de números en estadísticas
   ============================================== */
(function () {
  var counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  var started = false;

  function animateCounters() {
    if (started) return;

    var firstCounter = counters[0];
    var rect = firstCounter.getBoundingClientRect();

    if (rect.top < window.innerHeight) {
      started = true;

      counters.forEach(function (counter) {
        var target   = parseInt(counter.getAttribute('data-count'), 10);
        var duration = 2000; // 2 segundos
        var start    = 0;
        var step     = target / (duration / 16); // ~60fps

        var timer = setInterval(function () {
          start += step;
          if (start >= target) {
            counter.textContent = target;
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(start);
          }
        }, 16);
      });
    }
  }

  window.addEventListener('scroll', animateCounters);
})();


/* ==============================================
   6. SMOOTH SCROLL — Navegación suave por anclas
   ============================================== */
(function () {
  var anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var targetId = link.getAttribute('href');
      if (targetId === '#') return;

      var target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      var offsetTop = target.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });
})();


/* ==============================================
   7. PARALLAX — Efecto de profundidad en el hero
   ============================================== */
(function () {
  var heroBg = document.querySelector('.hero__bg');
  if (!heroBg) return;

  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY;
    // Mueve el fondo más lento que el scroll (efecto parallax)
    heroBg.style.transform = 'translateY(' + scrollY * 0.4 + 'px)';
  });
})();
