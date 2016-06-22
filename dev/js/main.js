$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

$(window).load(function(){


    
    var largura = $(this).width();
    if(largura > 768){
        $(window).scroll(function () {
            var ScroolH = $(this).scrollTop();
            var AlturaSection = ($('section').height() - 51);
            var AlturaMenu = 65;

            if(ScroolH > 75){
                $('.navbar').addClass('menu-hide');
            }

            if(ScroolH < 75){
                $('.navbar').removeClass('menu-hide').removeClass('menu-show');
            }

            if(ScroolH > AlturaSection){
                $('.navbar').removeClass('menu-hide').addClass('menu-show').addClass('navbar-fixed-top');
            }
            if(ScroolH < AlturaSection){
                var yPos = -($(window).scrollTop() / 2);
                $('#banner').css('background-position-y', yPos );
            }
        });
    }else{
        $('.navbar').addClass('menu-show').addClass('navbar-fixed-top');
    }
        

    /*Slider Manual hehehehe*/
    $('#previous').addClass('previous-touch');
    $('#next').addClass('next-drop');

    /*Recua*/
    $(document).on('click', '.previous-touch', function(){
        $('#pontuacao').css('background-image','url(images/bg-touchdown.png)'); 
        $('#field-goal').removeClass('show').addClass('hide');
        $('#touchdown').addClass('show').removeClass('hide');
        $('#previous').removeClass('previous-touch').addClass('previous-extra');
        $('#next').removeClass('next-drop').addClass('next-field');      
    });

    $(document).on('click', '.previous-extra', function(){
        $('#pontuacao').css('background-image','url(images/bg-extrapoint.png)'); 
        $('#touchdown').removeClass('show').addClass('hide');
        $('#extra-point').addClass('show').removeClass('hide');
        $('#previous').removeClass('previous-extra').addClass('previous-drop');
        $('#next').removeClass('next-field').addClass('next-touch');       
    });

    $(document).on('click', '.previous-drop', function(){
        $('#pontuacao').css('background-image','url(images/bg-dropkick.png)'); 
        $('#extra-point').removeClass('show').addClass('hide');
        $('#drop-kick').addClass('show').removeClass('hide');
        $('#previous').removeClass('previous-drop').addClass('previous-field');
        $('#next').removeClass('next-touch').addClass('next-field');      
    });

    $(document).on('click', '.previous-field', function(){
        $('#pontuacao').css('background-image','url(images/bg-fieldgoal.png)'); 
        $('#drop-kick').removeClass('show').addClass('hide');
        $('#field-goal').addClass('show').removeClass('hide');
        $('#previous').removeClass('previous-field').addClass('previous-touch');
        $('#next').removeClass('next-field').addClass('next-drop');      
    });


    /*Avança*/
    $(document).on('click', '.next-field', function(){
        $('#pontuacao').css('background-image','url(images/bg-fieldgoal.png)'); 
        $('#touchdown').removeClass('show').addClass('hide');
        $('#field-goal').addClass('show').removeClass('hide');
        $('#previous').removeClass('previous-extra').addClass('previous-touch');
        $('#next').removeClass('next-field').addClass('next-drop');      
    });

    $(document).on('click', '.next-drop', function(){
        $('#pontuacao').css('background-image','url(images/bg-dropkick.png)'); 
        $('#field-goal').removeClass('show').addClass('hide');
        $('#drop-kick').addClass('show').removeClass('hide');
        $('#previous').removeClass('previous-touch').addClass('previous-field');
        $('#next').removeClass('next-drop').addClass('next-extra');       
    });

    $(document).on('click', '.next-extra', function(){
        $('#pontuacao').css('background-image','url(images/bg-extrapoint.png)'); 
        $('#drop-kick').removeClass('show').addClass('hide');
        $('#extra-point').addClass('show').removeClass('hide');
        $('#previous').removeClass('previous-field').addClass('previous-drop');
        $('#next').removeClass('next-extra').addClass('next-touch');      
    });

    $(document).on('click', '.next-touch', function(){
        $('#pontuacao').css('background-image','url(images/bg-touchdown.png)'); 
        $('#extra-point').removeClass('show').addClass('hide');
        $('#touchdown').addClass('show').removeClass('hide');
        $('#previous').removeClass('previous-drop').addClass('previous-extra');
        $('#next').removeClass('next-touch').addClass('next-field');      
    });

});