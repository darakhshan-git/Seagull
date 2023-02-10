


/*--
    Menu Sticky
-----------------------------------*/
var sticky = $('.header-sticky');

windows.on('scroll', function() {
    var scroll = windows.scrollTop();
    if (scroll < 300) {
        sticky.removeClass('is-sticky');
    }else{
        sticky.addClass('is-sticky');
    }
});
   


/*--Mobile Menu-----------------------------------*/
$('#mobile-menu-trigger').on('click', function(){
    $('#offcanvas-mobile-menu').removeClass('inactive').addClass('active');
});


$('#offcanvas-menu-close-trigger').on('click', function(){
    $('#offcanvas-mobile-menu').removeClass('active').addClass('inactive');
});



$("#testi-demo").owlCarousel({
    loop: true,
    margin: 20,
    // nav: true,
    responsiveClass: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        loop: true
      }
    }
  })