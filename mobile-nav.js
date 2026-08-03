(function () {
  function initMobileMenu() {
    var burger = document.getElementById('navBurger');
    var menu = document.getElementById('mobileMenu');
    if (!burger || !menu) return;

    function setOpen(isOpen) {
      burger.classList.toggle('open', isOpen);
      menu.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', String(isOpen));
      menu.setAttribute('aria-hidden', String(!isOpen));
      document.body.classList.toggle('menu-open', isOpen);
    }

    burger.addEventListener('click', function () {
      setOpen(!menu.classList.contains('open'));
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setOpen(false); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) setOpen(false);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
})();
