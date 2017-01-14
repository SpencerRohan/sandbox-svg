$( document ).ready(function() {
    $('.animation').on('touchstart touchend', function(e) {
        e.preventDefault();
        $('.animation').toggleClass('hover_effect');
    });
});