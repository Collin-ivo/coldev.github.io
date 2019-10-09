(function () {
  'use strict';

  /* eslint-disable */
  const dateToday = new Date();
      $.datepicker.regional['ru'] = {
                      closeText: 'Закрыть',
                      prevText: 'Пред',
                      nextText: 'След',
                      currentText: 'Сегодня',
                      monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                      'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
                      monthNamesShort: ['января','февраля','марта','апреля','мая','июня',
                      'июля','августа','сентября','октября','ноября','декабря'],
                      dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
                      dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
                      dayNamesMin: ['вс','пн','вт','ср','чт','пт','сб'],
                      weekHeader: 'Нед',
                      dateFormat: 'dd M, DD',
                      firstDay: 1,
                      isRTL: false,
                      showMonthAfterYear: false,
                      yearSuffix: ''
                    };
              $.datepicker.setDefaults($.datepicker.regional['ru']);

              $('.datepicker--from').datepicker({
              minDate: dateToday,
              onSelect: function( selectedDate ) {
                  $( ".datepicker--to" ).datepicker( "option", "minDate", selectedDate );
              },
                  });


  $('input[name*="date"], .datepicker').datepicker();

  // $('#driver-my-transfers__tabs').tabs();


  // OWL Carousel

  $(document).ready(function(){
    const autoSlider = document.querySelector(`.auto-slider`);
    if (autoSlider) {

      const sliderImages = [
        `img/image-2.png`,
        `img/img1.png`,
        `img/img2.png`,
        `img/img3.png`
      ];

      const slideCarouselFragment = document.createDocumentFragment();

      for (let i = 0; i < sliderImages.length; i++) {
        const slideItem = document.createElement(`div`);
        const slideImg = document.createElement(`img`);
        slideImg.setAttribute(`alt`, ` `);
        slideImg.setAttribute(`src`, sliderImages[i]);
        slideItem.appendChild(slideImg);
        slideCarouselFragment.appendChild(slideItem);
      }

      let bigImageCounter = 0;
      const autoSliderBig = autoSlider.querySelector(`.auto-slider__big img`);
      const changeBig = (direction) => {
        if (direction > 0) {
          if (bigImageCounter < sliderImages.length - 1) {
            bigImageCounter += 1;
          } else {
            bigImageCounter = 0;
          }
        }
        if (direction < 0) {
          if (bigImageCounter > 0) {
            bigImageCounter -= 1;
          } else {
            bigImageCounter = sliderImages.length - 1;
          }
        }
        $(`.auto-slider__big img`).fadeTo(1, 0);
        autoSliderBig.setAttribute(`src`, sliderImages[bigImageCounter]);
        $(`.auto-slider__big img`).fadeTo(500, 1);
      };

      // наполняем слайдер

      autoSliderBig.setAttribute(`src`, sliderImages[bigImageCounter]);
      const autoSliderCarousel = autoSlider.querySelector(`.auto-slider__carousel > .carousel`);

      while (autoSliderCarousel.firstChild) {
        autoSliderCarousel.firstChild.remove();
      }
      autoSliderCarousel.appendChild(slideCarouselFragment);



      // запускаем карусель
      $(".carousel").owlCarousel({
        loop: true,
        responsive:{
          374:{
              items:2,
              margin: 16
          },
          768:{
              items:3,
              margin: 24
          }
        },
        autoWidth: true,
        dots: false,
        nav: true,
        navContainerClass: `auto-slider__navigation`,
        navClass: [`auto-slider__control auto-slider__control--prev`, `auto-slider__control auto-slider__control--next`],
        navText: [`<span></span>`, `<span></span>`],
        mouseDrag: false,
        touchDrag: false,
      });

      // сменяем главный кадр по нажатию на кнопку вперед / назад
      const autoSliderNavigation = document.querySelector(`.auto-slider__navigation`);
      autoSliderNavigation.addEventListener(`click`, (evt) => {
        if (evt.target.classList.contains(`auto-slider__control--next`)) {
          changeBig(1);
        }
        if (evt.target.classList.contains(`auto-slider__control--prev`)) {
          changeBig(-1);
        }
      });

    }






  });

    /* eslint-enabled */



  // ЗВЕЗДНЫЙ РЕЙТИНГ

  $(`.profile-raty`).raty({
    number: 5,
    starHalf: '../img/star-half-alt-solid.svg',
    starOff: '../img/star-half-alt-white.svg',
    starOn: '../img/star-solid.svg',
    hints: [`Очень плохо!`, `Плохо`, `Нормально`, `Хорошо`, `Отлично!`],
    score: 4.5,
    half: true,
    // readOnly: true
  });


  // Счетчик пассажиров

  function catalogItemCounter(field){

    var fieldCount = function(el) {
      var
        // Мин. значение
        min = el.data('min') || false,

        // Макс. значение
        max = el.data('max') || false,

        // Кнопка уменьшения кол-ва
        dec = el.prev('.dec'),

        // Кнопка увеличения кол-ва
        inc = el.next('.inc');

      function init(el) {
        if(!el.attr('disabled')){
          dec.on('click', decrement);
          inc.on('click', increment);
        }

        // Уменьшим значение
        function decrement() {
          var value = parseInt(el[0].value);
          value--;

          if((!min || value >= min) && value >= 0) {
            el[0].value = value;
          }
        }
        // Увеличим значение
        function increment() {
          var value = parseInt(el[0].value);

          value++;

          if(!max || value <= max) {
            el[0].value = value++;
          }
        }    }

      el.each(function() {
        init($(this));
      });
    };

    $(field).each(function(){
      fieldCount($(this));
    });
  }
  catalogItemCounter('.fieldCount');



  //1-3 Sign in && Sign Up
  const changeSignIn = () => {
    $("#sign-in-popup__mask").toggle("fade", 350);
    $("#sign-in-popup").toggleClass("active");
  };
  const changeSignUp = () => {
    $("#sign-up-popup__mask").toggle("fade", 350);
    $("#sign-up-popup").toggleClass("active");
  };

  if (document.querySelector(".user-menu__sign-in")) {
    $(".user-menu__sign-in, #sign-in-popup__mask, #sign-in-popup .popup__close, .sign-popup__toggle-button").click(function(evt) {
      evt.preventDefault();
      changeSignIn();
    });
  }

  if (document.querySelector(`.user-menu__sign-in`)) {
    $(".user-menu__sign-up, #sign-up-popup__mask, #sign-up-popup .popup__close, .sign-popup__toggle-button").click(function(evt) {
      evt.preventDefault();
      changeSignUp();
    });
  }

  // LK Menu Tablet
  if(document.querySelector(`.lk-menu`)) {
    $("#lk-menu-open, .lk-menu--popup ~ .lk-menu__overlay, .lk-menu--popup .lk-menu__close-button").click(function(evt) {
      evt.preventDefault();
      if (window.innerWidth >= 768) {
        $(".lk-menu--popup").toggleClass(`active`);
      }

    });
  }

  // LK Header Menu Popup
  if(document.querySelector(`.lk-menu`)) {
    $(".lk-header__open-popup, .lk-menu--popup ~ .lk-menu__overlay, .lk-menu--popup .lk-menu__close-button").click(function(evt) {
      evt.preventDefault();
      if (window.innerWidth < 768) {
        $(".lk-menu--popup").toggleClass(`active`);
        $(".lk-header__open-popup").toggleClass(`active`);
      }
    });
  }

  // Filter Search Popup
  if (document.querySelector(`.search-result__filter-open`)) {
    $(".search-result__filter-open, #filter-search__mask, .filter-search--popup .popup__close").click(function() {
      $("#filter-search__mask, .filter-search--popup").toggle("fade", 350);
    });
  }

  // Map Popup
  if (document.querySelector(`.route-info__button-map`)) {
    $(".route-info__button-map, #map-popup__mask, .map-popup .popup__close").click(function(evt) {
      evt.preventDefault();
      $("#map-popup__mask, .map-popup").toggle("fade", 350);
    });
  }

  // 6-1 Map Popup

  if (document.querySelector(`.lk-add-transf__view-map`)) {
    $(".lk-add-transf__view-map, #map-radius-popup__mask, .map-radius-popup .popup__close").click(function(evt) {
      if (window.innerWidth < 768) {
        evt.preventDefault();
        $("#map-radius-popup__mask, .map-radius-popup").toggle("fade", 350);
      }
    });
  }


  //6-3 Driver Edit Transfer Popup

  if (document.querySelector(".booking-transfer-card__edit-transf")) {
    $(".booking-transfer-card__edit-transf, #lk-edit-transf-popup__mask, #lk-edit-transf-popup .popup__close").click(function(evt) {
      if (window.innerWidth >= 768) {
        evt.preventDefault();
        $("#lk-edit-transf-popup__mask, #lk-edit-transf-popup").toggle("fade", 350);
      }
    });
  }

  // 7-1 Driver Transfer Popup
  if (document.querySelector("#driver-request-transfer")) {
    $("#driver-request-transfer .request-transfer-table__more, #driver-request-transfer .driver-transfer-card__detail, #view-transf-popup__mask, #view-transf-popup .popup__close").click(function(evt) {
      if (document.body.clientWidth >= 768) {
        evt.preventDefault();
        $("#view-transf-popup__mask, #view-transf-popup").toggle("fade", 350);
      }
    });
  }
  if (document.querySelector("#driver-request-auto")) {
    $("#driver-request-auto .request-transfer-table__more, #driver-request-auto .driver-transfer-card__detail, #view-rent-popup__mask, #view-rent-popup .popup__close").click(function(evt) {
      if (document.body.clientWidth >= 768) {
        evt.preventDefault();
        $("#view-rent-popup__mask, #view-rent-popup").toggle("fade", 350);
      }
    });
  }


  // 8-2 Driver Auto Edit Popup
  if (document.querySelector(".driver-my-auto__edit-button")) {
    $(".driver-my-auto__edit-button, .popup-mask, .popup .popup__close").click(function(evt) {
      if (window.innerWidth >= 768) {
        evt.preventDefault();
        $(".popup-mask, .popup").toggle("fade", 350);
      }
    });
  }

  // 7-1 / 7-3 Driver Request Transfer Tabs

  if (document.querySelector(`.driver-request-transfers`)) {
    $('.page-multiselector__radio > input[type="radio"]').on('change', function(e){
      const tab1 = $(`#driver-request-transfer`);
      const tab2 = $(`#driver-request-auto`);

      if (!tab1.hasClass(`hidden`)) {
        tab1.addClass(`hidden`);
      }
      if (!tab2.hasClass(`hidden`)) {
        tab2.addClass(`hidden`);
      }

      if ($(this).attr(`id`) == `multiselector-dr-transfers`) {
        tab1.removeClass(`hidden`);
      } else if ($(this).attr(`id`) == `multiselector-dr-auto`) {
        tab2.removeClass(`hidden`);
      }

     });
  }

  // Service Popups
  const changeServisePopup = (popupId) => {
    $(`#${popupId}__mask`).toggle("fade", 350);
    $(`#${popupId}`).toggleClass("active");
  };

  if (document.querySelector(`.popupCancelRent__open`)) {
    $(".popupCancelRent__open, #popupCancelRent__mask, #popupCancelRent .popup__close").click(function(evt) {
      evt.preventDefault();
      changeServisePopup(`popupCancelRent`);
    });
  }
  if (document.querySelector(`.popupExitAccount__open`)) {
    $(".popupExitAccount__open, #popupExitAccount__mask, #popupExitAccount .popup__close").click(function(evt) {
      evt.preventDefault();
      changeServisePopup(`popupExitAccount`);
    });
  }
  if (document.querySelector(`.popupDeleteAuto__open`)) {
    $(".popupDeleteAuto__open, #popupDeleteAuto__mask, #popupDeleteAuto .popup__close").click(function(evt) {
      evt.preventDefault();
      changeServisePopup(`popupDeleteAuto`);
    });
  }
  if (document.querySelector(`.popupDeleteTransfer__open`)) {
    $(".popupDeleteTransfer__open, #popupDeleteTransfer__mask, #popupDeleteTransfer .popup__close").click(function(evt) {
      evt.preventDefault();
      changeServisePopup(`popupDeleteTransfer`);
    });
  }
  if (document.querySelector(`.popupTransferAdd__open`)) {
    $(".popupTransferAdd__open, #popupTransferAdd__mask, #popupTransferAdd .popup__close").click(function(evt) {
      evt.preventDefault();
      changeServisePopup(`popupTransferAdd`);
    });
  }
  if (document.querySelector(`.popupDocsAdd__open`)) {
    $(".popupDocsAdd__open, #popupDocsAdd__mask, #popupDocsAdd .popup__close").click(function(evt) {
      evt.preventDefault();
      changeServisePopup(`popupDocsAdd`);
    });
  }
  if (document.querySelector(`.popupRating__open`)) {
    $(".popupRating__open, #popupRating__mask, #popupRating .popup__close").click(function(evt) {
      evt.preventDefault();
      changeServisePopup(`popupRating`);
    });
  }
  if (document.querySelector(`.popupRatingThnx__open`)) {
    $(".popupRatingThnx__open, #popupRatingThnx__mask, #popupRatingThnx .popup__close").click(function(evt) {
      evt.preventDefault();
      changeServisePopup(`popupRatingThnx`);
    });
  }

  //


  // 3-1 My Booking Transf Tabs

  if (document.querySelector(`.transfers__controls`)) {
    $('.page-multiselector__radio > input[type="radio"]').on('change', function(e){
      const tab1 = $(`#tab-1`);
      const tab2 = $(`#tab-2`);
      const tab3 = $(`#tab-3`);

      if (!tab1.hasClass(`hidden`)) {
        tab1.addClass(`hidden`);
      }
      if (!tab2.hasClass(`hidden`)) {
        tab2.addClass(`hidden`);
      }
      if (!tab3.hasClass(`hidden`)) {
        tab3.addClass(`hidden`);
      }

      if ($(this).attr(`id`) == `multiselector-tab1`) {
        tab1.removeClass(`hidden`);
      } else if ($(this).attr(`id`) == `multiselector-tab2`) {
        tab2.removeClass(`hidden`);
      } else if ($(this).attr(`id`) == `multiselector-tab3`) {
        tab3.removeClass(`hidden`);
      }

     });
  }


  // main search - tabs

  if (document.querySelector(`#main-search__tabs`)) {
    $('.page-multiselector-2__radio > input[type="radio"]').on('change', function(e){
      const tab1 = $(`#tabs-1`);
      const tab2 = $(`#tabs-2`);

      if (!tab1.hasClass(`hidden`)) {
        tab1.addClass(`hidden`);
      }
      if (!tab2.hasClass(`hidden`)) {
        tab2.addClass(`hidden`);
      }

      if ($(this).attr(`id`) == `multiselector-tab1`) {
        tab1.removeClass(`hidden`);
      } else if ($(this).attr(`id`) == `multiselector-tab2`) {
        tab2.removeClass(`hidden`);
      }

     });
  }



  // Вкладки Profile
  const profileTabs = () => {

    let tab = document.querySelectorAll('.tab'); // заголовок вкладки
    let tabContent = document.querySelectorAll('.tab-content'); // блок содержащий контент вкладки

    const hideTabsContent = (a) => {
      for (let i=a; i < tabContent.length; i++) {
          tabContent[i].classList.add("hidden");
          tab[i].parentNode.classList.remove('profile-nav__item--active');
      }
    };

    const showTabsContent = (b) => {
      if (tabContent[b].classList.contains('hidden')) {
          hideTabsContent(0);
          tab[b].parentNode.classList.add('profile-nav__item--active');
          tabContent[b].classList.remove('hidden');
      }
    };

    hideTabsContent(1);

    document.querySelector('#tabs').addEventListener(`click`, (evt) => {
      var target = event.target;

      if (target.classList.contains('tab')) {
        if (window.innerWidth >= 1440) {
          evt.preventDefault();
        }
        for (let i=0; i<tab.length; i++) {
          if (target == tab[i]) {
            showTabsContent(i);
            break;
          }
        }
      }

    });

  };

  if (document.querySelector(`.lk-profile > #tabs`)) {
    profileTabs();
  }



  // scroll

  $("#banner-about").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 600);
    return false;
  });


  // range 2


  // const displaySliderValues = () => {
  //   $('#range-lower').attr(`value`, `${$('#range-2').slider("values", 0)} ₽`);
  //   $('#range-upper').attr(`value`, `${$('#range-2').slider("values", 1)} ₽`);
  // }

  // $(`#range-2`).slider({
  //   range: true,
  //   max: 4001,
  //   values: [700, 1400],
  //   animate: `fast`,
  //   create: displaySliderValues,
  //   slide: displaySliderValues
  // });



  $('#slider').slider({
    range: "min",
    value: 8,
    max: 51,
    create: setInputsFromSlider,
    slide: setInputsFromSlider,
    stop: setInputsFromSlider
  });
  $('#sliderPopup').slider({
    value: 8,
    max: 51,
    create: setInputsFromSlider,
    slide: setInputsFromSlider,
    stop: setInputsFromSlider
  });

  function setInputsFromSlider() {
    $('#slideVal').val(`${$('#slider').slider("value")} км`);
  }

  $('#rangeslider').slider({
    values: [700, 1400],
    max: 4001,
    range: true,
    create: setInputsFrom2Slider,
    slide: setInputsFrom2Slider,
    stop: setInputsFrom2Slider
  });

  $('#rangeslider-popup').slider({
    values: [700, 1400],
    max: 4001,
    range: true,
    create: setInputsFrom2SliderPopup,
    slide: setInputsFrom2SliderPopup,
    stop: setInputsFrom2SliderPopup
  });

  function setInputsFrom2Slider() {
    $('#rangeMin').val(`${$('#rangeslider').slider("values", 0)} ₽`);
    $('#rangeMax').val(`${$('#rangeslider').slider("values", 1)} ₽`);
  }
  function setInputsFrom2SliderPopup() {
    $('#rangeMin-popup').val(`${$('#rangeslider-popup').slider("values", 0)} ₽`);
    $('#rangeMax-popup').val(`${$('#rangeslider-popup').slider("values", 1)} ₽`);
  }

  $('input').change(function(e) {
    switch (this.id) {
        case "rangeMin":
        case "rangeMax":
            var index = (this.id == "rangeMax") ? 1 : 0;
            $('#rangeslider').slider("values", index, parseInt($(this).val()));
            break;
        case "rangeMin-popup":
        case "rangeMax-popup":
            var index = (this.id == "rangeMax-popup") ? 1 : 0;
            $('#rangeslider-popup').slider("values", index, parseInt($(this).val()));
            break;
        case "slideVal":
            $('#slider').slider("value", parseInt($(this).val()));
            break;
        case "slideVal-popup":
            $('#sliderPopup').slider("value", parseInt($(this).val()));
            break;
    }
  });



  $(`.field--drop input[type="text"], .field--drop-list input[type="text"]`).attr(`readonly`, `readonly`);

  if (window.innerWidth < 1440) {
    $(`.field--drop input[type="text"], .field--drop-list input[type="text"]`).not(`datepicker`).on(`click`, function () {
    // if ($(this).not(`.datepicker`).length != 0) {
      $(`.field--drop input[type="text"], .field--drop-list input[type="text"]`).not(`datepicker`).next(`.field__dropdown-contain`).css(`top`, `-30000px`);
      $(`.field--drop input[type="text"], .field--drop-list input[type="text"]`).not(`datepicker`).next(`.field__dropdown-contain`).children(`.field__drop-out`).css(`opacity`, `0`);
      $(this).next(`.field__dropdown-contain`).css(`top`, `99%`);
      $(this).next(`.field__dropdown-contain`).children(`.field__drop-out`).css(`opacity`, `1`);
    // }
    });

    $(`.offer-list__item`).on('click', function () {
      $(this).parent().parent().parent().css(`top`, `-30000px`);
      $(this).parent().parent().css(`opacity`, `0`);
    });
  }


  $(`.offer-list__item:not(.passengers-drop__item)`).on('click', function () {
    $(this).parent().parent().parent().prev().attr(`value`, $(this).children().text());
  });

}());

//# sourceMappingURL=main.js.map
