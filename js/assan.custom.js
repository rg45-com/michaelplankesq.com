$(function () {
    /* 
     Custom js file for assan
     */
    $(".nav-sticky-top").sticky({topSpacing: 0});
//shrink header
    $(document).on("scroll", function () {
        if
                ($(document).scrollTop() > 150) {
            $(".nav-sticky").addClass("nav-stick-top");
        } else
        {
            $(".nav-sticky").removeClass("nav-stick-top");
        }
    });
//back to top
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('#back-to-top').addClass('show');
                    } else {
                        $('#back-to-top').removeClass('show');
                    }
                };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

/**Carousel images**/
    $('.carousel-image').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        navText: [
            "<i class='ti-angle-left'></i>",
            "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.owl-main-slide').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoHeight: true,
        navText: [
            "<i class='ti-angle-left'></i>",
            "<i class='ti-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });



//smooth scroll
    smoothScroll.init({
        selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
        speed: 1000, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic', // Easing pattern to use
        offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
        callback: function (anchor, toggle) {} // Function to run after scrolling
    });

});
