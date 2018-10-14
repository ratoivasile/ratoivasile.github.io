new WOW().init();

$(document).ready(function(){

    // PRELOADER
    $('.preloader-box').css('display', 'none');
    

    // SCROLL
    $(window).scroll(function(){
        if($(document).scrollTop()>50){
            $('.header').css('display', 'fixed');
        }
        if($(this).scrollTop() > 500){
            $('#scroll').fadeIn();
        } else{
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').on('click', function(){
        $('html, body').animate({scrollTop: 0}, 600);
    });

    // NAV    
    $('#features-btn').on('click', function(){
        $('html, body').animate({scrollTop: $('#features').offset().top}, 600);
    });    

    $('#works-btn').on('click', function(){
        $('html, body').animate({scrollTop: $('#works').offset().top}, 600);
    });

    $('#team-btn').on('click', function(){
        $('html, body').animate({scrollTop: $('#team').offset().top}, 600);
    });
    $('#contact-btn').on('click', function(){
        $('html, body').animate({scrollTop: $('#contact').offset().top}, 600);
    });
    
    
    
});