/* global $ */
$(document).ready(() => {
  const array = [
    'index',
    'about',
    'service',
    'gallery',
    'contact',
  ];
  const theUrl = window.location.href;

  array.forEach((item, i) => {
    if (theUrl.indexOf(item) !== -1) {
      $(`#js-menuList li a:eq(${i})`).addClass('h-text-primary');
    }
  });

  $('#js-mobileLink').on('click', (e) => {
    e.preventDefault();
    $('#js-menuList').toggleClass('h-none');
  });

  $('#js-toTop').on('click', (e) => {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0,
    }, 750);
  });

  $(window).on('scroll', () => {
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    $('.animate-bottom').each(function animateBottom() {
      const thisTop = $(this).offset().top;
      if (thisTop + windowHeight < scrollTop + 1700) {
        $(this).addClass('fadeIn-translate');
      }
    });

    $('.animate-left').each(function animateLeft() {
      const thisTop = $(this).offset().top;
      if (thisTop + windowHeight < scrollTop + 1700) {
        $(this).addClass('fadeIn-translate');
      }
    });

    $('.animate-rotate3D').each(function animateRotate3D() {
      const thisTop = $(this).offset().top;
      if (thisTop + windowHeight < scrollTop + 1600) {
        $(this).addClass('fadeIn-rotate3D');
      }
    });

    $('.animate-translate3D').each(function animateTranslate3D() {
      const thisTop = $(this).offset().top;
      if (thisTop + windowHeight < scrollTop + 1800) {
        $(this).addClass('fadeIn-translate3D');
      }
    });

    $('.animate-rotate360-1').each(function animateRotate3601() {
      const thisTop = $(this).offset().top;
      if (thisTop + windowHeight < scrollTop + 1700) {
        $(this).addClass('fadeIn-rotate360');
      }
    });

    $('.animate-rotate360-2').each(function animateRotate3602() {
      const thisTop = $(this).offset().top;
      if (thisTop + windowHeight < scrollTop + 1700) {
        $(this).addClass('fadeIn-rotate360');
      }
    });

    $('.animate-rotate360-3').each(function animateRotate3603() {
      const thisTop = $(this).offset().top;
      if (thisTop + windowHeight < scrollTop + 1800) {
        $(this).addClass('fadeIn-rotate360');
      }
    });

    $('.animate-rotate360-4').each(function animateRotate3604() {
      const thisTop = $(this).offset().top;
      if (thisTop + windowHeight < scrollTop + 1750) {
        $(this).addClass('fadeIn-rotate360');
      }
    });

    $('.animate-specaile3D').each(function animateSpecaile3D() {
      const thisTop = $(this).offset().top;
      if (thisTop + windowHeight < scrollTop + 1500) {
        $(this).addClass('fadeIn-specaile3D');
      }
    });

    if (scrollTop > 500) {
      $('#js-toTopBox').removeClass('h-none');
    } else {
      $('#js-toTopBox').addClass('h-none');
    }
  });
});
