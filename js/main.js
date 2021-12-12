// $(function() {
//     console.log(1);
// });

document.addEventListener("DOMContentLoaded", function() {

    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //     // some code..
    // } else {}
    window.scrollReveal = new scrollReveal();

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
    const lightbox = GLightbox({
        touchNavigation: false,
        keyboardNavigation: false,
        draggable: false,
        selector: '.popup'
    });
    // $('.faq__answer:first').show()
    // $('.faq__question:first').addClass('faq__question--open');
    
    $('.faq__question').on('click', function() {
        var question = $(this);
        var answer = $(this).next();
    
        $('.faq__question').not(question).removeClass('faq__question--open');
        question.toggleClass('faq__question--open');
    
        $('.faq__answer:visible').not(answer).slideUp(200);
        answer.slideToggle(200);
    
    })
    var linkNav = document.querySelectorAll('.memo__nav a'),
        V = 0.1;
    for (var i = 0; i < linkNav.length; i++) {
        linkNav[i].addEventListener('click', function(e) {
            e.preventDefault();
            var w = window.pageYOffset,
                hash = this.href.replace(/[^#]*(.*)/, '$1');
            t = document.querySelector(hash).getBoundingClientRect().top,
                start = null;
            requestAnimationFrame(step);
    
            function step(time) {
                if (start === null) start = time;
                var progress = time - start,
                    r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
                window.scrollTo(0, r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash
                }
            }
        }, false);
    }

})