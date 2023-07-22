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
  // $("#tabBTN span").click(function () {
  //   $(this).addClass("active").siblings().removeClass("active");
  //   $("#pictureTab .tabIMG").hide();
  //   $($(this).data("id")).fadeIn("slow");
  // });
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
});
