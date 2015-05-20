$(function () {
    $('#img-carousel').owlCarousel({
        margin: 10,
        loop: true,
        items: 3,
        lazyLoad: true,
        navigation: false,
        responsive: true,
        autoPlay: true,
        pagination: true
    });

});
$(window).load(function () {
    $('.flexslider').flexslider({
        controlNav: "thumbnails",
        animation: "fade",
        animationSpeed: 800
    });
});


