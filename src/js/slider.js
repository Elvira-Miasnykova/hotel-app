$(document).ready(function(){
    $('.reviews__list').slick({
        //autoplay: true,
        //centerMode: true,
        infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
        dots: true,
        easing: "ease-in-out",
        pauseOnDotsHover: true,
    });
  });