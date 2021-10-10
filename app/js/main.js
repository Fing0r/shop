$(function() {

  $('.top-filter__grid, .top-filter__list').on('click', function () {
    $('.top-filter__grid, .top-filter__list').removeClass('top-filter__active');
    $(this).addClass('top-filter__active');
    $('.product-card').toggleClass('product-card--grid product-card--list');
  });

  $('.top-filter__grid').on('click', function () {
    $('.product-card').removeClass('product-card--grid product-card--list').addClass('product-card--grid');
    $('.catalog-products').removeClass('catalog-products--list');
  });

  $('.top-filter__list').on('click', function () {
    $('.product-card').removeClass('product-card--grid product-card--list').addClass('product-card--list');
    $('.catalog-products').addClass('catalog-products--list');
  });

  $(window).on('resize', function(){

      if($(window).width() < 769){
        if($('.catalog-products').hasClass('catalog-products--list')) {
          $('.catalog-products').removeClass('catalog-products--list');
          $('.product-card').removeClass('product-card--grid product-card--list').addClass('product-card--grid');
          } 
      };

      if($(window).width() > 770){
        if($('.top-filter__list').hasClass('top-filter__active')) {
          $('.catalog-products').addClass('catalog-products--list');
          $('.product-card').removeClass('product-card--grid').addClass('product-card--list');
          }
      };

  });

  $('.top-filter__btn-show, .shop-catalog__btn-hide').on('click', function(){
    $('.shop-catalog__filters').toggleClass('shop-catalog__filters--active');
    $('body, html').toggleClass('lock');
    $('.layer').toggleClass('layer--active');
  });

  $('.select-style').styler();

  $('.jq-selectbox').on('click', function (e) {
    e.stopPropagation();
    $(this).children('.jq-selectbox__select').toggleClass('jq-selectbox__select--active');
    return false;
  });

  !$

  $('.sel').on('click', function () {
    $('.sel').removeClass('jq-selectbox__select--active');
  });

 $(document).on('mouseup', function (e){
   e.stopPropagation();
		if (!$('.select-style').is(e.target)
      && $('.select-style').has(e.target).length === 0) {
      $('.jq-selectbox__select').removeClass('jq-selectbox__select--active');
		}
  });



  $('.promo-slider__items').slick({
    prevArrow: '<button type="button" class="promo-slider__slick-prev" aria-label="назад"><svg width="20" height="32" viewBox="0 0 20 32" xmlns="http://www.w3.org/2000/svg"><path d="M1.03821 17.0149L17.0515 31.6079C17.577 32.1307 18.4292 32.1307 18.9546 31.6079C19.4801 31.0851 19.4801 30.2369 18.9546 29.7141L3.9069 16L18.9533 2.2859C19.4788 1.76309 19.4788 0.914839 18.9533 0.392073C18.4278 -0.130695 17.5756 -0.130695 17.0502 0.392072L1.03687 14.9851C0.756805 15.2638 0.63673 15.6332 0.655437 15.9986C0.638023 16.3654 0.75806 16.7348 1.03821 17.0149Z"/></svg></button>',
    nextArrow: '<button type="button" class="promo-slider__slick-next" aria-label="вперед"><svg width="20" height="32" viewBox="0 0 20 32" xmlns="http://www.w3.org/2000/svg"><path d="M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z"/></svg></button>',

      dots: true
  });

  $(window).on('load', function(){
    if($(window).width() < 1025){
     $('.partners__items').slick({
          centerMode: true,
          infinite: true,
          arrows: false,
          centerPadding: '20px',
          speed: 200,
          slidesToShow: 4,
          slidesToScroll:1,
          autoplay:true,
            responsive: [{
                breakpoint: 568,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '20px',
                }
            }]
        });
    }
  });
  
  $(window).on('resize', function(){
    if($(window).width() < 1025){
      setTimeout(function(){
        $('.partners__items').not('.slick-initialized').slick({
          centerMode: true,
          infinite: true,
          arrows: false,
          centerPadding: '20px',
          speed: 200,
          slidesToShow: 4,
          slidesToScroll:1,
          autoplay:true,
            responsive: [
              {
                breakpoint: 568,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '20px',
                }
            }]
        });
      },100)

    }
    else{
    setTimeout(function(){  $(".partners__items.slick-initialized").slick("unslick"); },100)  
    }
  });

$(function() {
    var $range = $(".price-filter").find(".price-filter__input")
    var $inputFrom = $(".price-filter__min");
    var $inputTo = $(".price-filter__max");
    var instance;
    var min = $range.attr('data-min');
    var max = $range.attr('data-max');
    var from = $range.attr('data-from');
    var to = $range.attr('data-to');
    
    $range.ionRangeSlider({
        type: "double",
        onStart: updateInputs,
        onChange: updateInputs,
        onFinish: updateInputs
    });
    instance = $range.data("ionRangeSlider");
    
    function updateInputs (data) {
        from = data.from;
        to = data.to;
    
        $inputFrom.prop("value", from);
        $inputTo.prop("value", to);
    }
    
    $inputFrom.on("change", function () {
        var val = $(this).prop("value");
    
        if (val < min) {
            val = min;
        } else if (val > to) {
            val = to;
        }
    
        instance.update({
            from: val
        });
    
        $(this).prop("value", val);
    
    });
    
    $inputTo.on("change", function () {
        var val = $(this).prop("value");

        if (val < from) {
            val = from;
        } else if (val > max) {
            val = max;
        }
    
        instance.update({
            to: val
        });
    
        $(this).prop("value", val);
    });
});

  $('.user-nav__item--cart, .cart__close').on('click', function(e){
    e.stopPropagation();
    $('.cart').toggleClass('cart--active');
    $('html').toggleClass('lock');
    $('body').toggleClass('show-scrollbar');
    $('.layer').toggleClass('layer--active');
  });

  $('.mobile-btn, .menu-mobile__btn').on('click', function(e){
    $('.menu-mobile').toggleClass('menu-mobile--active');
    $('body, html').toggleClass('lock');
    $('.layer').toggleClass('layer--active');
  });

 $('.user-nav__item--search').on('click', function(e){
    $('.search').toggleClass('search--active');
 });

 $('.filter__title').on('click', function(e){
   var $parent = '.' + $(e.currentTarget).parent().attr('class').split(' ')[0];
   e.stopPropagation();
    $( $parent ).children('.filter__title').toggleClass('filter__title--active filter__title--inactive');
    $( $parent ).children('.filter__form').toggleClass('filter__form--active');
 });


  $('.catalog').on('click', function(e){
    e.stopPropagation();
    $(this).toggleClass('catalog--active catalog--inactive');
    $('.catalog__items').toggleClass('catalog__items--active');
 }); 

  $(document).on('mouseup', function (e){ // событие клика по веб-документу
		if (!$('.catalog').is(e.target) // если клик был не по нашему блоку
      && $('.catalog').has(e.target).length === 0) { // и не по его дочерним элементам
      $('.catalog').removeClass('catalog--active catalog--inactive').addClass('catalog--inactive'); 
      $('.catalog__items').removeClass('catalog__items--active'); 
        // скрываем его
		};

    if (!$('.menu-mobile').is(e.target) 
      && $('.menu-mobile').has(e.target).length === 0) {
      if($(".menu-mobile--active").is(":visible"))
      //проверяет видно ли меню в данный момент и если видно то выполняется действия
      {
        $('.layer').removeClass('layer--active');
        $('body, html').removeClass('lock');
        $('.menu-mobile').removeClass('menu-mobile--active');
        }
      };
        //закрываю меню, если клик происходит вне меню

        if (!$('.shop-catalog__filters').is(e.target) 
      && $('.shop-catalog__filters').has(e.target).length === 0) {
      if($(".shop-catalog__filters--active").is(":visible"))
      {
        e.stopPropagation();
        $('.layer').removeClass('layer--active');
        $('body, html').removeClass('lock');
        $('.shop-catalog__filters').removeClass('shop-catalog__filters--active');
        // shop-catalog__filters shop-catalog__filters--active
        }
      }
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