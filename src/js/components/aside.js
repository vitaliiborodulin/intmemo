const section = $('.memo__section');

if (section.lenght > 0) {

    const nav = $('.memo__nav > ul'),
        navHeight = nav.outerHeight();

    window.addEventListener('orientationchange', function() {
        navHeight = nav.outerHeight();
    }, false);

    $(window).on('scroll', function() {
        const position = $(this).scrollTop();

        section.each(function() {
            const top = $(this).offset().top - navHeight - 5,
                bottom = top + $(this).outerHeight();

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

}