$('.work .owl-carousel').owlCarousel({
    // stagePadding: 350,
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    responsive: {
        0: {
            stagePadding: 0
        },
        992: {
            stagePadding: 350
        }
    }
})
$('.customers .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1
})
