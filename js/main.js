$(document).ready(function () {

  let $btns = $('.project-area .button-group button');

  // isotope
  $btns.click(function (e) {

    $('.project-area .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('.project-area .grid').isotope({
      filter: selector
    });

    return false;

  });

  $('.project-area img').on('load', function () {
    $('.project-area .button-group #btn1').trigger('click');

  });

  // magnific popup
  $('.project-area .grid .popup-image').magnificPopup({
    type: 'image',
    gallery: { enabled: true },
    mainClass: 'mfp-with-zoom',

    zoom: {
      enabled: true,

      duration: 300,
      easing: 'ease-in-out',

      opener: function (openerElement) {

        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }

    }
  });

  // owl carousel
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,

    responsive: {
      0: {
        items: 1
      }, 576: {
        items: 2
      }
    }
  })

  // navbar shadow
  let navOffset = $('.header-area').height() + 50;

  function navbarFixed() {
    if ($('.header-area').length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= navOffset) {
          $('.header-area .navbar').addClass('navbar-shadow');
        } else {
          $('.header-area .navbar').removeClass('navbar-shadow');
        }
      })
    }
  }

  navbarFixed();


  // responsive


});

// responsive
$(window).on('load', function () {
  if (window.matchMedia('(max-width: 768px)').matches) {
    $('.project-area .button-group').addClass('d-flex');
    $('.project-area .button-group').addClass('flex-wrap');
    $('.project-area .button-group').addClass('justify-content-between');
  }

  if (window.matchMedia('(max-width: 576px)').matches) {
    $('.project-area .button-group button').addClass('btn');
    $('.project-area .button-group button').addClass('btn-light');
    $('.project-area .button-group').removeClass('justify-content-between');
  }
});

// function checkPosition() {
//   if (window.matchMedia('(min-width: 768px)').matches) {
//     $('.project-area .button-group').removeClass('d-flex');
//     $('.project-area .button-group').removeClass('justify-content-between');
//   } else {
//     $('.project-area .button-group').addClass('d-flex');
//     $('.project-area .button-group').addClass('justify-content-between');
//   }
// }

// $(document).load($(window).bind("resize", checkPosition()));

