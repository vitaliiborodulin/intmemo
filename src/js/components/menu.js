const burger = $('.header__burger');
const menu = $('.header__menu');

// if ($('html').hasClass('scroll-disabled')) {
//     $('html').removeClass('scroll-disabled');
// }

burger.on('click', function(e) {
    e.preventDefault();
    burger.toggleClass('header__burger--close');
    menu.toggleClass('header__menu--open');
    // $('html').toggleClass('scroll-disabled');
});

$(document).keyup(function(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
        $('.header__menu').removeClass('header__menu--open');
        burger.removeClass('header__burger--close');
        // $('html').removeClass('scroll-disabled');
    }
});

// $('body').on('click', '[href*="#"]', function(e) {
//     var fixed_offset = 0;

//     $('html,body').stop().animate({
//         scrollTop: $(this.hash).offset().top - fixed_offset
//     }, 300);
//     e.preventDefault();
//     burger.toggleClass('header__burger--close');
//     menu.toggleClass('header__menu--open');
// });