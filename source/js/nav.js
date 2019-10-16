$(document).ready(function(){

  let burger = $('.main-header__toggle');
  let nav = $('.header-nav');

  burger.on('click', function (){

  nav.toggleClass('header-nav--open');
  burger.toggleClass('main-header__toggle--open')
  })
});
