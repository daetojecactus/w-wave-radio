//entrance//  
let entry = document.querySelector('.header__entry-btn');
let modal = document.querySelector('.entrance');
let exit = document.querySelector('.entrance__close-btn');

entry.addEventListener('click',
  function () {
    modal.classList.toggle('entrance--active');
  });

exit.addEventListener('click',
  function () {
    modal.classList.remove('entrance--active');
  });


//burger//
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__burger-nav');
let menuLinks = menu.querySelectorAll('.header__burger-link');
let burgerClose = document.querySelector('.header__burger-close');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })

  burgerClose.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  })
})

//play&pause header-bottom//
document.querySelector('.header__bottom-btn--1').addEventListener('click', function () {
  document.querySelector('.header__bottom-btn--1 .pause').classList.toggle('btn-active')
});

document.querySelector('.header__bottom-btn--2').addEventListener('click', function () {
  document.querySelector('.header__bottom-btn--2 .pause').classList.toggle('btn-active')
});

//mobile live//
document.querySelector('.header__bottom-mobile-players').addEventListener('click', function () {
  document.querySelector('.header__bottom-players').classList.toggle('btn--active')
});

//mobile live rotate//
document.querySelector('.header__bottom-mobile-players').addEventListener('click', function () {
  document.querySelector('.header__bottom-mobile-live').classList.toggle('live-rotate')
});

//play&pause podcast//  
let btnPlay = document.querySelectorAll('.podcasts__card-btn--play');
btnPlay.forEach(function (el) {
  el.addEventListener('click', function (ev) {
    ev.stopPropagation();
    btnPlay.forEach(el => { if (el != this) { el.classList.remove('btn-active') }; });
    this.classList.toggle('btn-active');
  });
});

//podcast btn-more//
document.querySelector('.podcasts__more-btn').addEventListener('click', function () {
  var elements = document.getElementsByClassName('podcasts__item');
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("podcasts__item_active");
  }
});

const btnClose = document.querySelector('.podcasts__more-btn');
btnClose.addEventListener('click', function () {
  btnClose.innerHTML =
    (btnClose.innerHTML === 'Скрыть') ? btnClose.innerHTML = 'Ещё подкасты' : btnClose.innerHTML = 'Скрыть';
})

//broadcast choices//
const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
  itemSelectText: '',
  searchEnabled: false,
  position: 'bottom',
  shouldSort: false
});

//accordion//
new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active',
  showMultiple: true,
  openOnInit: [0]
});

//tab//
let tabsBtn = document.querySelectorAll('.tab__btn');
let tabsItem = document.querySelectorAll('.guests__content');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('tab__btn--active') });
    e.currentTarget.classList.add('tab__btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('guests__content--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('guests__content--active');
  });
});

// about-us slider swiper//
var swiper3 = new Swiper('.about-us__swiper-container', {
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд'
  },
  breakpoints: {
    280: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 1
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 1
    },
    485: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 1
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 1
    },
    1025: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loopFillGroupWithBlank: true,
    }
  }
});

//form//
const form = document.querySelector('.form');
const validation = new JustValidate('.form');

validation
  .addField('.input-name', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Ошибка'
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: "Ошибка"
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: "Ошибка"
    }
  ])
  .addField('.input-mail', [
    {
      rule: 'email',
      value: true,
      errorMessage: 'Ошибка',
    },
  ])
  .onSuccess((event) => {
    console.log('Validation passes and form submitted', event);
  });


// playlists slider swiper//
var swiper4 = new Swiper('.playlists__swiper-container', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loopFillGroupWithBlank: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },
  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий слайд',
    firstSlideMessage: 'Это первый слайд',
    lastSlideMessage: 'Это последний слайд'
  },
});
