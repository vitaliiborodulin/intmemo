$(".title-animation-idle").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("activate-animation");
    }
});
$(".text-animation-idle").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
        el.addClass("activate-animation");
    }
});

$(window).scroll(function(event) {
    $(".title-animation-idle").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("activate-animation");
        }
    });

    $(".text-animation-idle").each(function(i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("activate-animation");
        }
    });
});