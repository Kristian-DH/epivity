$(".slider-news_component").each(function (index) {
  let loopMode = true;
  if ($(this).attr("loop-mode") === "true") {
    loopMode = true;
  }
  let sliderDuration = 800;
  if ($(this).attr("slider-duration") !== undefined) {
    sliderDuration = +$(this).attr("slider-duration");
  }
  const swiper = new Swiper($(this).find(".swiper")[0], {
    speed: sliderDuration,
    loop: false,
    autoHeight: false,
    centeredSlides: false,
    followFinger: true,
    freeMode: false,
    slideToClickedSlide: false,
    rewind: false,
    mousewheel: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      // mobile landscape
      320: {
        slidesPerView: 1,
        spaceBetween: "3%",
      },
      // mobile landscape
      480: {
        slidesPerView: 3,
        spaceBetween: "2%",
      },
      // tablet
      768: {
        slidesPerView: 3,
        spaceBetween: "1.2%",
      },
      // desktop
      992: {
        slidesPerView: 3,
        spaceBetween: "1.2%",
      },
      // desktop
      1920: {
        slidesPerView: 3,
        spaceBetween: "1.2%",
      },
    },
    pagination: {
      el: $(this).find(".swiper-bullet-wrapper")[0],
      bulletActiveClass: "is-active",
      bulletClass: "swiper-bullet",
      bulletElement: "button",
      clickable: true,
    },
    navigation: {
      nextEl: $(this).find(".swiper-next")[0],
      prevEl: $(this).find(".swiper-prev")[0],
      disabledClass: "is-disabled",
    },
    scrollbar: {
      el: $(this).find(".swiper-drag-wrapper")[0],
      draggable: true,
      dragClass: "swiper-drag",
      snapOnRelease: true,
    },
    slideActiveClass: "is-active",
    slideDuplicateActiveClass: "is-active",
  });
});