$(document).ready(function () {
    //header_slider
    $(".slider").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true
    });
    //video js
    new VenoBox({
        selector: ".watch_video",
        autoplay: true,
        spinner: 'wave',
    });
    //team_slider
    $(".team_slider").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    });
    //testimonial_slider_text
    $(".testimonial_text_slider").slick({
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        asNavFor: ".testimonial_slider_img",
        focusOnSelect: true,
    });

    //testimonial_slider_img
    $(".testimonial_slider_img").slick({
        autoplay: true,
        autoplaySpeed: 1500,
        slidesToShow: 5,
        prevArrow: ".team_arrow_left",
        nextArrow: ".team_arrow_right",
        slidesToScroll: 1,
        asNavFor: ".testimonial_text_slider",
        centerMode: true,
        centerPadding: "0px",
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });
    //sticky_menu
    $(".js_sticky_section_nav").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass("sticky")
        } else {
            $("nav").removeClass("sticky")
        }
    })

    //scroll-smooth
    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 100, function () {
                window.location.hash = hash;
            })
        }
    })

    //scrollToTop
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var scroll = $(".scroll")
        var icon = $(".scroll .fa-solid")

        if (scrolling >= 400) {
            scroll.addClass("scroll_window")
            icon.addClass("fa-angle-up")
        } else {
            scroll.removeClass("scroll_window")
            icon.removeClass("fa-angle-up")
        }
    })

    //scrollspy

    $(".js_sticky_section1").waypoint(function (direction) {
        if (direction == "down") {
            $(".main_nav .scrollpy2").addClass("active")
            $(".main_nav .scrollpy1").removeClass("active")
        } else {
            $(".main_nav .scrollpy2").removeClass("active")
            $(".main_nav .scrollpy1").addClass("active")
        }
    })
    $(".js_sticky_section2").waypoint(function (direction) {
        if (direction == "down") {
            $(".main_nav .scrollpy3").addClass("active")
            $(".main_nav .scrollpy2").removeClass("active")
        } else {
            $(".main_nav .scrollpy3").removeClass("active")
            $(".main_nav .scrollpy2").addClass("active")
        }
    })
    $(".js_sticky_section3").waypoint(function (direction) {
        if (direction == "down") {
            $(".main_nav .scrollpy4").addClass("active")
            $(".main_nav .scrollpy3").removeClass("active")
        } else {
            $(".main_nav .scrollpy4").removeClass("active")
            $(".main_nav .scrollpy3").addClass("active")
        }
    })
    $(".js_sticky_section4").waypoint(function (direction) {
        if (direction == "down") {
            $(".main_nav .scrollpy5").addClass("active")
            $(".main_nav .scrollpy4").removeClass("active")
        } else {
            $(".main_nav .scrollpy5").removeClass("active")
            $(".main_nav .scrollpy4").addClass("active")
        }
    })
    $(".js_sticky_section5").waypoint(function (direction) {
        if (direction == "down") {
            $(".main_nav .scrollpy6").addClass("active")
            $(".main_nav .scrollpy5").removeClass("active")
        } else {
            $(".main_nav .scrollpy6").removeClass("active")
            $(".main_nav .scrollpy5").addClass("active")
        }
    })
    $(".js_sticky_section6").waypoint(function (direction) {
        if (direction == "down") {
            $(".main_nav .scrollpy7").addClass("active")
            $(".main_nav .scrollpy6").removeClass("active")
        } else {
            $(".main_nav .scrollpy7").removeClass("active")
            $(".main_nav .scrollpy6").addClass("active")
        }
    })

    //nav-active
    $(".main_nav li").click(function () {
        $(".main_nav li").removeClass("active"),
            $(this).addClass("active")
    })
})