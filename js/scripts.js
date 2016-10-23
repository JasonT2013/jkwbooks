var $window = $(window);
var $scrolled = $window.scrollTop();

$(document).ready(function(){
    
    
    parallax();
    
});


function parallax(){
    
    var $parallax = $('.parallax');
    
    $window.scroll(function(){
        $scrolled = $window.scrollTop();
        
        $parallax.css('top', -($scrolled * 0.4) + 'px');
    });

}

