$(document).ready(function () {
  $('.reviews__list').slick({
    //autoplay: true,
    //centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    easing: 'ease-in-out',
    
    responsive: [
        {
          breakpoint: 1280,
          settings: {
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
            arrows: false,
          }
        },
        
    ]
  });
});
