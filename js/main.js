$(function(){
    $('.reviews-sliders').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive:[
          {
            breakpoint: 1105,
            settings: {
               slidesToShow: 1,
              slidesToScroll: 1,
             }
            },
                   ]
    });

    $('.btn__menu').on('click', function(){
        $('.menu__list').slideToggle();
    });

});