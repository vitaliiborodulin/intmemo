var tip = $('.form__tip');

tip.on('click', function() {
    $(this).toggleClass('active');
    $(this).next().slideToggle()
})