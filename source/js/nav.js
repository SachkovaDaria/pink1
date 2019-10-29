const toggleElement = document.querySelector('.main-header__toggle');
const navElement = document.querySelector('.header-nav');

toggleElement.addEventListener('click', () => {
  navElement.classList.toggle('header-nav--open');
  toggleElement.classList.toggle('main-header__toggle--open')
});
