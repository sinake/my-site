//Keeping nav menu at the top of the scroll window
var num = $('.left-nav').offset().top;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.left-nav').addClass('fixed');
    } else {
        $('.left-nav').removeClass('fixed');
    }
});


//Scrolling the page smoothly when clicking anchor link.
$('a[href*=#]').click(function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top}, 500);
});