const navbarLinks = document.querySelectorAll('.navbar__link');

navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbarLinks.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const slider = new ChiefSlider('.slider', {
    autoplay: true,
    interval: 3000,
    swipe: true,
    loop: true,
  });
});
