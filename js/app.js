$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("header").removeClass('banner');
    } else {
        $("header").addClass('banner');
    }
})