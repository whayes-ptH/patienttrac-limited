// Mobile navigation toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close nav when a link is clicked
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
})();

// Contact form – display a confirmation message on submit
(function () {
  var form = document.querySelector('.contact-form');
  if (!form) { return; }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var confirmation = document.createElement('p');
    confirmation.className = 'form-confirmation';
    confirmation.textContent = 'Thank you for your message. A member of our team will be in touch shortly.';

    form.innerHTML = '';
    form.appendChild(confirmation);
  });
})();
