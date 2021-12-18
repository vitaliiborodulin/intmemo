var obj = $('.sticky');

if (obj.length > 0) {
    var offset = obj.offset();
    var topOffset = offset.top;
    // var marginTop = obj.css("marginTop");

    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop >= topOffset) {

            obj.css({
                // marginTop: 90,
                position: 'fixed',
                top: 0
            });
        }

        if (scrollTop < topOffset) {

            obj.css({
                // marginTop: 20,
                position: 'relative',
            });
        }
    });
}