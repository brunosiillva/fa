$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

$(window).scroll(function () {
    var ScroolH = $(this).scrollTop();
    var AlturaSection = ($('section').height() - 51);
    var AlturaMenu = 65;

    if(ScroolH > 75){
    	$('.navbar').addClass('menu-hide').addClass('navbar-fixed-top');
    }

    if(ScroolH < 75){
    	$('.navbar').removeClass('menu-hide').removeClass('menu-show');
    }

    if(ScroolH > AlturaSection){
    	$('.navbar').removeClass('menu-hide').addClass('menu-show');
    }

});
