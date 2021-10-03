// function slickify(){
//     $('.partners__items').slick({
//         arrows: false,
//         autoplay: true,
//         autoplaySpeed: 4000,
//         delay: 5000,
//         speed: 700,
//         mobileFirst: true,
//         responsive: [
//             {
//                 breakpoint: 768,
//                 settings: "unslick"
//             }
//         ]
//     });
// }

// slickify();
// $(window).on('resize', function(){
//     var $windowWidth = $(window).width();
//     if ($windowWidth < 768) {
//         slickify();   
//     }
// });

$(function() {

  $('.promo-slider__items').slick({
    prevArrow: '<button type="button" class="promo-slider__slick-prev" aria-label="назад"><svg width="20" height="32" viewBox="0 0 20 32" xmlns="http://www.w3.org/2000/svg"><path d="M1.03821 17.0149L17.0515 31.6079C17.577 32.1307 18.4292 32.1307 18.9546 31.6079C19.4801 31.0851 19.4801 30.2369 18.9546 29.7141L3.9069 16L18.9533 2.2859C19.4788 1.76309 19.4788 0.914839 18.9533 0.392073C18.4278 -0.130695 17.5756 -0.130695 17.0502 0.392072L1.03687 14.9851C0.756805 15.2638 0.63673 15.6332 0.655437 15.9986C0.638023 16.3654 0.75806 16.7348 1.03821 17.0149Z"/></svg></button>',
    nextArrow: '<button type="button" class="promo-slider__slick-next" aria-label="вперед"><svg width="20" height="32" viewBox="0 0 20 32" xmlns="http://www.w3.org/2000/svg"><path d="M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z"/></svg></button>',

      dots: true
  });

  $('.partners__items').slick({
        arrows:false,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          }
        ]
});

//боковое меню, если один эелемент находится внутри другого, то нужно дописать как тут $('.cart__close').on('click', function(e){e.stopPropagation();$('.cart').removeClass('cart--active');});  для себя

  $('.user-nav__item--cart, .cart__close').on('click', function(e){
    e.stopPropagation();
    $('.cart').toggleClass('cart--active');
    $('html').toggleClass('lock');
    $('body').toggleClass('show-scrollbar');
    $('.layer').toggleClass('layer--active');
  });

  $('.mobile__btn, .menu-mobile__btn').on('click', function(e){
    $('.menu-mobile').toggleClass('menu-mobile--active');
    $('body, html').toggleClass('lock');
    $('.layer').toggleClass('layer--active');
  });


 $('.user-nav__item--search').on('click', function(e){
    $('.search').toggleClass('search--active');
  });

 $('.catalog').on('click', function(e){
    e.stopPropagation();
    $('.catalog').toggleClass('catalog--active catalog--inactive');
    $('.catalog__items').toggleClass('catalog__items--active');
  });    


  $(document).on('mouseup', function (e){ // событие клика по веб-документу
		if (!$('.catalog').is(e.target) // если клик был не по нашему блоку
      && $('.catalog').has(e.target).length === 0) { // и не по его дочерним элементам
      $('.catalog').removeClass('catalog--active catalog--inactive').addClass('catalog--inactive'); 
      $('.catalog__items').removeClass('catalog__items--active'); 
        // скрываем его
		}

   if (!$('.menu-mobile').is(e.target) 
        && $('.menu-mobile').has(e.target).length === 0) {
        if($(".menu-mobile--active").is(":visible"))
        //проверяет видно ли меню в данный момент и если видно то выполняется действия
        {
          $('.layer').removeClass('layer--active');
          $('body, html').removeClass('lock');
          $('.menu-mobile').removeClass('menu-mobile--active');
          }
        }
        //закрываю меню, если клик происходит вне меню
	  });

   

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

});