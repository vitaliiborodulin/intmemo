// var linkNav = document.querySelectorAll('.memo__nav a'),
//     V = 1;
// for (var i = 0; i < linkNav.length; i++) {
//     linkNav[i].addEventListener('click', function(e) {
//         e.preventDefault();
//         var w = window.pageYOffset,
//             hash = this.href.replace(/[^#]*(.*)/, '$1');
//         t = document.querySelector(hash).getBoundingClientRect().top,
//             start = null;
//         requestAnimationFrame(step);

//         function step(time) {
//             if (start === null) start = time;
//             var progress = time - start,
//                 r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
//             window.scrollTo(0, r);
//             if (r != w + t) {
//                 requestAnimationFrame(step)
//             } else {
//                 location.hash = hash
//             }
//         }
//     }, false);
// }

// var asideLinks = $('.memo__nav-item');

// asideLinks.on('click', '[href*="#"]', function() {
//     var fixed_offset = 0;
//     var currentLink = $(this);

//     asideLinks.not(currentLink).removeClass('active');
//     currentLink.parent().toggleClass('active');

//     $('html,body').stop().animate({
//         scrollTop: $(this.hash).offset().top - fixed_offset
//     }, 300);

// });

const section = $('.memo__section'),
    nav = $('.memo__nav > ul'),
    navHeight = nav.outerHeight();

window.addEventListener('orientationchange', function() {
    navHeight = nav.outerHeight();
}, false);

$(window).on('scroll', function() {
    const position = $(this).scrollTop();

    // console.log('pos:', position)

    section.each(function() {
        const top = $(this).offset().top - navHeight - 5,
            bottom = top + $(this).outerHeight();
        // console.log('top:', top, 'bottom:', bottom)

        if (position >= top && position <= bottom) {
            nav.find('a').parent().removeClass('active');
            // section.removeClass('active');

            // $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
        }
    });
});

nav.find('a').on('click', function() {
    const id = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top - navHeight
    }, 487);

    return false;
});