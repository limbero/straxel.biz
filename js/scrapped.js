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
  const videoLinks = document.querySelectorAll('.link.videobg');
  videoLinks.forEach((link) => {
    link.addEventListener('mouseover', (e) => {
      e.target.parentElement.querySelector('video').play();
    }, false);
    link.addEventListener('mouseout', (e) => {
      e.target.parentElement.querySelector('video').pause();
    }, false);
  });
});
document.addEventListener('scroll', setNavBg);

function setNavBg() {
  if (window.pageYOffset > 20) {
    document.querySelector('nav').classList.add('withbg');
  } else {
    document.querySelector('nav').classList.remove('withbg');
  }
}
