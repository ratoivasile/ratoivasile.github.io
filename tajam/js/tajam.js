new WOW().init();

$(document).ready(function(){

    // Header Carousel
    $('.header-carousel').slick({
        dots: true,
        arrows: false,
    });


    // Nav Bar
    $('#about-btn').on('click', function(){
        $('html, body').animate({scrollTop: $('#story').offset().top}, 600);
    });    

    $('#expertise-btn').on('click', function(){
        $('html, body').animate({scrollTop: $('#expertise').offset().top}, 600);
    });

    $('#team-btn').on('click', function(){
        $('html, body').animate({scrollTop: $('#team').offset().top}, 600);
    });
    $('#works-btn').on('click', function(){
        $('html, body').animate({scrollTop: $('#works').offset().top}, 600);
    });
    $('#feedback-btn').on('click', function(){
        $('html, body').animate({scrollTop: $('#feedback').offset().top}, 600);
    });
    $('#contact-btn').on('click', function(){
        $('html, body').animate({scrollTop: $('#contact').offset().top}, 600);
    });

    // Play Video
    $('.story-video-btn').on('click', function(){
        $('.video').toggle()
            .append($('<iframe>')
                .attr('style', 'width: 100%; height: 550px')
                .attr('src', 'https://www.youtube.com/embed/dzxFdtWmjto?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0')
                .attr('frameborder', '0')
                .attr('allow', 'autoplay; encrypted-media')
                );
        $('.story-video-descr').toggle();
        
    });


   
    // Feedback Carousel 
    $('.feedback-carousel').slick({
        prevArrow: '<button type="button" class="fa fa-chevron-left"></button>',
        nextArrow: '<button type="button" class="fa fa-chevron-right"></button>',
        responsive: [
            {
                breakpoint: 575,
                settings: 
                    {
                        arrows: false
                    }
            }
        ]
    });

    // SCROLL
    $(window).scroll(function(){        
        if($(this).scrollTop() > 200){
            $('#scroll').fadeIn();
        } else{
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').on('click', function(){
        $('html, body').animate({scrollTop: 0}, 600);
    });
   

});
