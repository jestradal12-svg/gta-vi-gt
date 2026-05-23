
// 1. LOADER - Oculta la pantalla de carga
window.addEventListener('load', function() {
  var loader = document.getElementById('loader');
  setTimeout(function() {
    loader.style.display = 'none';
  }, 2000);
});

// 2. NAVBAR - Cambia color al hacer scroll
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 60) {
    navbar.classList.add('navbar--scrolled');
  } else {
    navbar.classList.remove('navbar--scrolled');
  }
});

// 3. MENU HAMBURGUESA - Abre y cierra en movil
var toggle = document.querySelector('.navbar__toggle');
var links  = document.querySelector('.navbar__links');

toggle.addEventListener('click', function() {
  links.classList.toggle('navbar__links--open');
});

// 4. SMOOTH SCROLL - Navegacion suave
var anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
}); 