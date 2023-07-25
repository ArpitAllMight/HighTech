$(document).ready(function () {
  $(function () {
    $("#header").load("assets/header.html");
    $("#footer").load("assets/footer.html");
  });
  $(".main-Slider").slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $(".slickSlider").slick({
    arrows: true,
    prevArrow: ".arrowSlick .leftArrow",
    nextArrow: ".arrowSlick .rightArrow",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 885,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $(".count").countUp({
    time: 2000,
    delay: 10,
  });
  $(".slick-Slider").slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ".slickArrows .fa-chevron-left",
    nextArrow: ".slickArrows .fa-chevron-right",
  });
  $("#scrollToTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  $("div#tabsNav span").click(function () {
    $(this).addClass("selected").siblings().removeClass("selected");
    $("#tabsContent .tab-content").hide();
    $($(this).data("value")).fadeIn("slow");
  });

  var swiper = new Swiper(".swiperOne", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 360px
      360: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      // when window width is >= 500px
      500: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      // when window width is >= 700px
      700: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  });
  var swiper2 = new Swiper(".swiper1", {
    slidesPerView: 1.1,
    loop: true,
    spaceBetween: 0,
    // effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  var swiper = new Swiper(".swiperTwo", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 360px
      360: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      // when window width is >= 500px
      500: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
      // when window width is >= 700px
      700: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  });
  var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 1.1,
    loop: true,
    spaceBetween: 0,
    // effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

  $("#tabs .swiper1-detail .clkBtn").click(function () {
    $("#popUp .container.one").addClass("active");
    $("main").addClass("active");
  });

  $("#tabs .swiper2-detail .clkBtn").click(function () {
    $("#popUp .container.two").addClass("active");
    $("main").addClass("active");
  });

  $("#popUp .cross").click(function () {
    $("#popUp .container").removeClass("active");
    $("main").removeClass("active");
  });
});
