//parallax for home screen
$(window).scroll(function(e){
    parallax();
});

function parallax(){
    var scrolled = $(window).scrollTop();
    $('.parallax').css('top', -(scrolled * 0.4) + 'px');
}

