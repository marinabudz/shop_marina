$(".pictures__button").click(function(){$(".pictures__list2").removeClass("pictures__list2").addClass("pictures__list")}),$(".review__slider").slick({dots:!1,arrows:!0,infinite:!0,autoplay:!0,autoplaySpeed:3e3,slidesToShow:3,slidesToScroll:1,centerMode:!0,centerPadding:"1px"}),$(".header__menuContainerItem").click(function(){$(this).next().fadeToggle(50)});