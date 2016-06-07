$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

$(window).scroll(function () {
    var ScroolH = $(this).scrollTop();
    var AlturaSection = ($('section').height() - 51);

    if(ScroolH >= AlturaSection){
        $("nav").addClass('menu-down');
    }
    if (ScroolH < AlturaSection) {
        $('nav').removeClass('menu-down');
    }

});
