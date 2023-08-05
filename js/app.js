$('.owl-carousel').owlCarousel({
    stagePadding: 350,
    loop: true,
    responsive: {
        1000: {
            items: 1
        }
    }
})
$('.customers .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})
