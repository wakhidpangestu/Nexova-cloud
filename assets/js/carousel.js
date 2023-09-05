$(document).ready(function() {
    var owl = $('.customer_section .owl-carousel');
    owl.owlCarousel({
        stagePadding: 480,
        margin: 30,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 4500,
        responsive: {
            0: {
                items: 1,
                stagePadding: 20
            },
            576: {
                items: 1,
                stagePadding: 100
            },
            768: {
                items: 1,
                stagePadding: 150
            },
            992: {
                items: 1,
                stagePadding: 220
            },
            1000: {
                items: 1,
                stagePadding: 250
            },
            1920: {
                items: 1
            }
        }
    })
})