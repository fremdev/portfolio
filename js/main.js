$(document).ready(function() {
    $('nav a').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top-70
        }, 700);
    });

    $( '.swipebox' ).swipebox();
});
