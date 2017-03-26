document.addEventListener('DOMContentLoaded', function () {
  setNavBg();
  [].forEach.call(
    document.querySelectorAll('a.divlink'),
    function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        history.pushState(null, null, el.getAttribute('href'));
        document.querySelector(el.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  );
});
document.addEventListener('scroll', setNavBg);

function setNavBg() {
  if (window.pageYOffset > 20) {
    document.querySelector('nav').classList.add('withbg');
  } else {
    document.querySelector('nav').classList.remove('withbg');
  }
}
