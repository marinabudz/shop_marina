$('.pictures__button').click(
    function(){
        $('.pictures__list2').removeClass( "pictures__list2" ).addClass( "pictures__list" );
    }
);


$('.review__slider').slick(
    { dots: false,
        arrows:true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '1px'
    });


$(window).resize(function(){
    if ($('.container').width() == 1140){
        $('.review__sliderItem').slick(
            {dots: false,
                arrows:true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '1px'
            });
        }
 });

$('.header__menuContainerItem').click(
    function(){
        $(this).next().fadeToggle(50);
    }
);

var $button =$("<button><img src='search_white.jpg' alt='search'/> </button> ")
$button.addClass("header__searchWhite")
$button.css({backgroundColor: 'white'})
('.header').append($button)


$(window).resize(function(){
    if ($('.container').width() == 1140){
        $('.review__slider').slick(
            {dots: false,
                arrows:true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '1px'
            });
        }
 });