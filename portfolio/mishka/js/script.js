
     var cartAddLink = document.querySelectorAll(".button--add-to-cart");
     var modalAddPopup = document.querySelector(".modal-add");

     for (var i = 0; i < cartAddLink.length; i++) {
       cartAddLink[i].addEventListener("click", function (evt) {
         evt.preventDefault();
         modalAddPopup.classList.add("page-modal--show");
       });
     }

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (modalAddPopup.classList.contains("page-modal--show")) {
          modalAddPopup.classList.remove("page-modal--show");
        }
      }
    });

    var navToggle = document.querySelector(".main-nav__toggle");
    var navMenu = document.querySelector(".main-nav__list");

    navMenu.classList.remove("site-list--nojs");
    navMenu.classList.add("site-list--closed");
    navToggle.classList.remove("main-nav__toggle--nojs");
    navToggle.classList.add("main-nav__toggle--closed");
    
    navToggle.addEventListener("click", function (evt) {
      if (navMenu.classList.contains("site-list--closed")) {
      navMenu.classList.remove("site-list--closed");
      navMenu.classList.add("site-list--opened");
      navToggle.classList.remove("main-nav__toggle--closed");
      navToggle.classList.add("main-nav__toggle--opened");
      } else {
        navMenu.classList.remove("site-list--opened");
        navMenu.classList.add("site-list--closed");
        navToggle.classList.add("main-nav__toggle--closed");
        navToggle.classList.remove("main-nav__toggle--opened");
      }
    });