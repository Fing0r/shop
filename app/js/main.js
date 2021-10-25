 //modal

 const modalLinks = document.querySelectorAll('.modal-link');
 const body = document.querySelector('body');
 const lockPadding = document.querySelectorAll('.lock-padding');

 let unlock = true;

 const timeout = 500;

 if (modalLinks.length > 0) {
   for (let index = 0; index < modalLinks.length; index++) {
     const modalLink = modalLinks[index];
     modalLink.addEventListener("click", function (e) {
       const modalName = modalLink.getAttribute('href').replace('#', '');
       const curentModal = document.getElementById(modalName);
       modalOpen(curentModal);
       e.preventDefault();
     });
   }
 }

 const modalCloseIcon = document.querySelectorAll('.modal__close');
 if (modalCloseIcon.length > 0) {
   for (let index = 0; index < modalCloseIcon.length; index++) {
     const el = modalCloseIcon[index];
     el.addEventListener("click", function (e) {
       modalClose(el.closest('.modal'));
       e.preventDefault();
     });
   }
 }

 function modalOpen(curentModal) {
   if (curentModal && unlock) {
     const modalActive = document.querySelector('.modal--active');
     if (modalActive) {
       modalClose(modalActive, false);
     } else {
       bodyLock();
     }
     curentModal.classList.add('modal--active');
     curentModal.addEventListener('click', function (e) {
       if (!e.target.closest('.modal__body')) {
         modalClose(e.target.closest('.modal'));
       }
     });
   }
 }

 function modalClose(modalActive, doUnlock = true) {
   if (unlock) {
     modalActive.classList.remove('modal--active');
     if (doUnlock) {
       bodyUnLock();
     }
   }
 }

 function bodyLock() {
   const lockPaddingValue = window.innerWidth - document.querySelector('.modal').offsetWidth + 'px';

   if (lockPadding.lenght > 0) {
     for (let index = 0; index < lockPadding.length; index++) {
       const el = lockPadding[index];
       el.style.paddingRight = lockPaddingValue;
     }
   }
   body.style.paddingRight = lockPaddingValue;
   body.classList.add('lock');

   unlock = false;
   setTimeout(function () {
     unlock = true;
   }, timeout);
 }

 function bodyUnLock() {
   setTimeout(function () {
     if (lockPadding.lenght > 0) {
       for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = '0px';
       }
     }
     body.style.paddingRight = '0px';
     body.classList.remove('lock');
   }, timeout);

   unlock = false;
   setTimeout(function () {
     unlock = true;
   }, timeout);
 }

 document.addEventListener('keydown', function (e) {
   if (e.which === 27) {
     const modalActive = document.querySelector('.modal--active');
     modalClose(modalActive);
   }
 });

 (function () {
   if (!Element.prototype.closest) {
     Element.prototype.closest = function (css) {
       var node = this;
       while (node) {
         if (node.matches(css)) return node;
         else node = node.parentElement;
       }
     }
     return null;
   }
 })();
 (function () {
   if (!Element.prototype.matches) {
     Element.prototype.matches = Element.prototype.matchesSelector ||
       Element.prototype.webkitMatchesSelector ||
       Element.prototype.mozMatchesSelector ||
       Element.prototype.msMatchesSelector;
   }
 })();

 // --------------------------------------------------------------------------------------------------------------

 //slider
 const productoneSlider = document.querySelector('.product-one__slider');
 const modalSlider = document.querySelector('.modal__body');
 const interestSlider = document.querySelector('.interest__slider');

 if (productoneSlider) {
   const productSlider = new Swiper(productoneSlider, {
     wrapperClass: 'product-one__wrapper',
     slideClass: 'product-one__slide',
     loop: true,
     navigation: {
       nextEl: '.product-one__prev',
       prevEl: '.product-one__next',
     },
   })
 }

 if (modalSlider) {
   const modalSliders = new Swiper(modalSlider, {
     wrapperClass: 'modal__content',
     slideClass: 'modal__slide',
     loop: true,
     navigation: {
       nextEl: '.modal__next',
       prevEl: '.modal__prev',
     },
     pagination: {
       el: '.modal__dots',
       type: 'bullets',
       bulletClass: 'modal__dot',
       bulletActiveClass: 'modal__dot--active',
       clickable: true,
       bulletElement: 'button',
     },
     breakpoints: {
       375: {
         wrapperClass: 'modal__content',
         slideClass: 'modal__slide',
         loop: true,
         navigation: {
           nextEl: '.modal__next',
           prevEl: '.modal__prev',
         },
         pagination: {
           el: '.modal__dots',
           type: 'bullets',
           bulletClass: 'modal__dot',
           bulletActiveClass: 'modal__dot--active',
           clickable: true,
           bulletElement: 'button',
         },
       },
       480: {
         wrapperClass: 'modal__content',
         slideClass: 'modal__slide',
         loop: true,
         navigation: {
           nextEl: '.modal__next',
           prevEl: '.modal__prev',
         }
       },
     }
   })
 }

 if (interestSlider) {
   const interestSliders = new Swiper(interestSlider, {
     wrapperClass: 'interest__list',
     slideClass: 'interest__item',
     navigation: {
       nextEl: '.interest__next',
       prevEl: '.interest__prev',
     },
     loop: true,
     slidesPerView: 4,
     spaceBetween: 31,
     slidesPerGroup: 1,
     breakpoints: {
       320: {
         slidesPerView: 1,
         slidesPerGroup: 1,
         pagination: {
           el: '.interest__dots',
           type: 'bullets',
           bulletClass: 'interest__dot',
           bulletActiveClass: 'interest__dot--active',
           clickable: true,
           bulletElement: 'button',
         },
       },
       360: {
         slidesPerView: 2,
         spaceBetween: 5,
         slidesPerGroup: 2,
         pagination: {
           el: '.interest__dots',
           type: 'bullets',
           bulletClass: 'interest__dot',
           bulletActiveClass: 'interest__dot--active',
           clickable: true,
           bulletElement: 'button',
         },
       },
       480: {
         slidesPerView: 3,
         spaceBetween: 10,
         slidesPerGroup: 1,
         navigation: {
           nextEl: '.interest__next',
           prevEl: '.interest__prev',
         },
         pagination: {
           el: '.interest__dots',
           type: 'bullets',
           bulletClass: 'interest__dot',
           bulletActiveClass: 'interest__dot--active',
           clickable: true,
           bulletElement: 'button',
         },
       },
       1024: {
         slidesPerGroup: 1,
         slidesPerView: 4,
         spaceBetween: 10,
       },
       1200: {
         slidesPerView: 4,
         spaceBetween: 28,
       }
     },
   })
 }



 // -------------------------------------------------------------------------------------------

 // We listen to the resize event
 window.addEventListener('resize', () => {
   // We execute the same script as before
   let vh = window.innerHeight * 0.01;
   document.documentElement.style.setProperty('--vh', `${vh}px`);
 });

 $(function () {

   $('.product-tabs__tab').on('click', function (e) {
     e.preventDefault();
     $('.product-tabs__tab').removeClass('product-tabs__tab--active');
     $(this).addClass('product-tabs__tab--active');
     $('.product-info__item').removeClass('product-info__item--active');
     $($(this).attr('href')).addClass('product-info__item--active');
   });


   if ('.reviews-form__rating') {
     $('.reviews-form__star').rateYo({
       starWidth: "16px",
       normalFill: "#C1C1C1",
       ratedFill: "#FFB800",
       starSvg: "<svg class='star-icon' width='16' height='16'><use xlink:href='images/sprite.svg#star'></use></svg>",
       spacing: "6px",
       fullStar: true
     });
   }

   $(".product-one__rating, .reviews-top__rating").rateYo({
     starWidth: "16px",
     normalFill: "rgba(193, 193, 193, 0.3)",
     ratedFill: "#FFB800",
     readOnly: true,
     starSvg: "<svg class='star-icon' width='16' height='16'><use xlink:href='images/sprite.svg#star'></use></svg>",
     spacing: "6px"
   });

   if ($('.product-card').hasClass('product-card--grid' || 'product-card--list')) {
     $('.top-filter__list').on('click', function () {
       $('.product-card--grid').removeClass('product-card--grid').addClass('product-card--list');
       $('.catalog-products').addClass('catalog-products--list');
       $('.top-filter__grid').removeClass('top-filter__active');
       $(this).addClass('top-filter__active');
     });

     $('.top-filter__grid').on('click', function () {
       $('.product-card--list').removeClass('product-card--list').addClass('product-card--grid');
       $('.catalog-products--list').removeClass('catalog-products--list');
       $('.top-filter__list').removeClass('top-filter__active');
       $(this).addClass('top-filter__active');
     });
   };

   $(window).on('resize', function () {

     if ($(window).width() < 812) {

       if ($('.catalog-products').hasClass('catalog-products--list')) {
         $('.catalog-products').removeClass('catalog-products--list');
         if ($('.product-card').not('.product-card--cart')) {
           $('.product-card').removeClass('product-card--grid product-card--list').addClass('product-card--grid');
         }
       }
     };

     if ($(window).width() > 811) {
       if ($('.top-filter__list').hasClass('top-filter__active')) {
         $('.catalog-products').addClass('catalog-products--list');
         if ($('.product-card').not('.product-card--cart')) {
           $('.product-card').removeClass('product-card--grid').addClass('product-card--list');
         }
       };
     };
   });

   $('.top-filter__btn-show, .shop-catalog__btn-hide').on('click', function () {
     $('.shop-catalog__filters').toggleClass('shop-catalog__filters--active');
     $('body, html').toggleClass('lock');
     $('.layer').toggleClass('layer--active');
   });

   $('.top-filter__on-num').styler();
   $('.product-one__quantity').styler();

   $('.jq-selectbox').on('click', function (e) {
     e.stopPropagation();
     $(this).children('.jq-selectbox__select').toggleClass('jq-selectbox__select--active');
     return false;
   });

   !$

   $('li').closest('.jq-selectbox__dropdown').on('click', function (e) {
     e.stopPropagation();
     $('.jq-selectbox__select').removeClass('jq-selectbox__select--active');
     $('.top-filter__on-num').removeClass('focused');
   });

   $(document).on('mouseup', function (e) {
     e.stopPropagation();
     if (!$('.top-filter__on-num').is(e.target) &&
       $('.top-filter__on-num').has(e.target).length === 0) {
       $('.jq-selectbox__select').removeClass('jq-selectbox__select--active');
     }
   });

   $('.top-filter__sort').select2({
     width: 'none'
   });

   $('.select2-selection__rendered').on('click', function (e) {
     e.stopPropagation();
     $(this).toggleClass('select2-selection__rendered--active');
     return false;
   });


   // -------------------------------------------------------------------------------------

   $(document).on('mouseup', function (e) {
     e.stopPropagation();
     if (!$('.select2 ').is(e.target) &&
       $('.select2').has(e.target).length === 0) {
       $('.select2-selection__rendered').removeClass('select2-selection__rendered--active');
     }
   });

   $('.promo-slider__items').slick({
     // prevArrow: '<button type="button" class="promo-slider__slick-prev" aria-label="назад"><svg class="prewArrow-icon"><use xlink:href="images/sprite.svg#prewArrow"></use></svg></button>',
     prevArrow: '<button type="button" class="promo-slider__slick-prev" aria-label="назад"><svg width="20" height="32" viewBox="0 0 20 32" xmlns="http://www.w3.org/2000/svg"><path d="M1.03821 17.0149L17.0515 31.6079C17.577 32.1307 18.4292 32.1307 18.9546 31.6079C19.4801 31.0851 19.4801 30.2369 18.9546 29.7141L3.9069 16L18.9533 2.2859C19.4788 1.76309 19.4788 0.914839 18.9533 0.392073C18.4278 -0.130695 17.5756 -0.130695 17.0502 0.392072L1.03687 14.9851C0.756805 15.2638 0.63673 15.6332 0.655437 15.9986C0.638023 16.3654 0.75806 16.7348 1.03821 17.0149Z"/></svg></button>',
     // nextArrow: '<button type="button" class="promo-slider__slick-next" aria-label="вперед"><svg class="nextArrow-icon"><use xlink:href="images/sprite.svg#nextArrow"></use></svg></button>',
     nextArrow: '<button type="button" class="promo-slider__slick-next" aria-label="вперед"><svg width="20" height="32" viewBox="0 0 20 32" xmlns="http://www.w3.org/2000/svg"><path d="M18.9641 14.9851L2.95082 0.392105C2.42535 -0.130702 1.57314 -0.130702 1.04767 0.392105C0.522196 0.914872 0.522196 1.76312 1.04767 2.28593L16.0954 16L1.049 29.7141C0.523529 30.2369 0.523529 31.0852 1.049 31.6079C1.57448 32.1307 2.42668 32.1307 2.95212 31.6079L18.9654 17.0149C19.2455 16.7362 19.3656 16.3668 19.3469 16.0014C19.3643 15.6346 19.2443 15.2652 18.9641 14.9851Z"/></svg></button>',
     dots: true
   });

   $(window).on('load', function () {
     if ($(window).width() < 1025) {
       $('.partners__items').slick({
         centerMode: true,
         infinite: true,
         arrows: false,
         centerPadding: '20px',
         speed: 200,
         slidesToShow: 4,
         slidesToScroll: 1,
         autoplay: true,
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

   $(window).on('resize', function () {
     if ($(window).width() < 1025) {
       setTimeout(function () {
         $('.partners__items').not('.slick-initialized').slick({
           centerMode: true,
           infinite: true,
           arrows: false,
           centerPadding: '20px',
           speed: 200,
           slidesToShow: 4,
           slidesToScroll: 1,
           autoplay: true,
           responsive: [{
             breakpoint: 568,
             settings: {
               slidesToShow: 2,
               centerPadding: '20px',
             }
           }]
         });
       }, 100)

     } else {
       setTimeout(function () {
         $(".partners__items.slick-initialized").slick("unslick");
       }, 100)
     }
   });

   //Range Slider
   const rangeSlider = document.getElementById('range-slider');

   if (rangeSlider) {
     const min = rangeSlider.getAttribute('data-min');
     const max = rangeSlider.getAttribute('data-max');
     const to = rangeSlider.getAttribute('data-to');
     const from = rangeSlider.getAttribute('data-from');

     noUiSlider.create(rangeSlider, {

       start: [parseInt(from), parseInt(to)],
       connect: true,
       step: 1,
       range: {
         'min': [parseInt(min)],
         'max': [parseInt(max)]
       }
     });

     const input0 = document.getElementById('input-0');
     const input1 = document.getElementById('input-1');
     const inputs = [input0, input1];

     rangeSlider.noUiSlider.on('update', function (values, handle) {
       inputs[handle].value = Math.round(values[handle]);
     });

     const setRangeSlider = (i, value) => {
       let arr = [null, null];
       arr[i] = value;

       console.log(arr);

       rangeSlider.noUiSlider.set(arr);
     };

     inputs.forEach((el, index) => {
       el.addEventListener('change', (e) => {
         console.log(index);
         setRangeSlider(index, e.currentTarget.value);
       });
     });
   }

   // скролбар
   document.querySelectorAll('.filter__form, .menu-mobile').forEach(el => {
     new SimpleBar(el)
   });

   $('.user-nav__item--cart, .cart__close').on('click', function (e) {
     e.stopPropagation();
     $('.cart').toggleClass('cart--active');
     $('html').toggleClass('lock');
     $('body').toggleClass('show-scrollbar');
     $('.layer').toggleClass('layer--active');
   });

   $('.mobile-btn, .menu-mobile__btn').on('click', function (e) {
     $('.menu-mobile').toggleClass('menu-mobile--active');
     $('body, html').toggleClass('lock');
     $('.layer').toggleClass('layer--active');
   });

   $('.user-nav__item--search').on('click', function (e) {
     $('.search').toggleClass('search--active');
   });

   $('.filter__title').on('click', function (e) {
     var $parent = '.' + $(e.currentTarget).parent().attr('class').split(' ')[0];
     e.stopPropagation();
     $($parent).children('.filter__title').toggleClass('filter__title--active filter__title--inactive');
     $($parent).children('.filter__form').toggleClass('filter__form--active');
   });


   $('.catalog__btn').on('click', function (e) {
     e.stopPropagation();
     $(this).toggleClass('catalog__btn--active catalog__btn--inactive');
     $('.catalog__items').toggleClass('catalog__items--active');
   });

   $(document).on('mouseup', function (e) { // событие клика по веб-документу
     if (!$('.catalog__btn').is(e.target) // если клик был не по нашему блоку
       &&
       $('.catalog__btn').has(e.target).length === 0) { // и не по его дочерним элементам
       $('.catalog__btn').removeClass('catalog__btn--active catalog__btn--inactive').addClass('catalog__btn--inactive');
       $('.catalog__items').removeClass('catalog__items--active');
       // скрываем его
     };

     if (!$('.menu-mobile').is(e.target) &&
       $('.menu-mobile').has(e.target).length === 0) {
       if ($(".menu-mobile--active").is(":visible"))
       //проверяет видно ли меню в данный момент и если видно то выполняется действия
       {
         $('.layer').removeClass('layer--active');
         $('body, html').removeClass('lock');
         $('.menu-mobile').removeClass('menu-mobile--active');
       }
     };
     //закрываю меню, если клик происходит вне меню

     if (!$('.shop-catalog__filters').is(e.target) &&
       $('.shop-catalog__filters').has(e.target).length === 0) {
       if ($(".shop-catalog__filters--active").is(":visible")) {
         e.stopPropagation();
         $('.layer').removeClass('layer--active');
         $('body, html').removeClass('lock');
         $('.shop-catalog__filters').removeClass('shop-catalog__filters--active');
       }
     };

     if (!$('.cart').is(e.target) &&
       $('.cart').has(e.target).length === 0) {
       if ($(".cart--active").is(":visible")) {
         e.stopPropagation();
         $('.layer').removeClass('layer--active');
         $('body, html').removeClass('lock');
         $('.cart').removeClass('cart--active');
       }
     };
   });

   var containerEl1 = document.querySelector('[data-ref="container-1"]');
   var containerEl2 = document.querySelector('[data-ref="container-2"]');

   var config = {
     controls: {
       scope: 'local'
     }
   };

   if (containerEl1) {
     var mixer1 = mixitup(containerEl1, config);
   }
   if (containerEl2) {
     var mixer2 = mixitup(containerEl2, config);
   }
 });










 // -----------------------------------------------------------------------------------------------



 // $('.interest__list').slick({
 //     prevArrow: '<button type="button" class="interest__slick-prev" aria-label="назад"><svg class="interest__arrow-icon" width="20" height="32"><use xlink:href="images/sprite.svg#prewArrow"></use></svg></button>',
 //     nextArrow: '<button type="button" class="interest__slick-next" aria-label="вперед"><svg class="interest__arrow-icon" width="20" height="32"><use xlink:href="images/sprite.svg#nextArrow"></use></svg></button>',
 //     slidesToShow: 4,
 //     slidesToScroll: 1,
 //     variableWidth: true,
 //   });


 // document.querySelector('.product-one__btn').addEventListener('click', () => {})

 // modal
 //  $('.product-one__wrapper').on('click', function () {
 //  $('.modal').addClass('modal--active');
 //  $('html').addClass('lock');
 //  });

 //  $('.modal, .modal__close').on('click', function () {
 //    $('.modal').removeClass('modal--active');
 //    $('html').removeClass('lock');
 //  });

 //  $('.modal__body').on('click', function (e) {
 //    e.stopPropagation();
 //  });