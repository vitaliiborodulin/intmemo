//= ../../node_modules/micromodal/dist/micromodal.min.js

$(function() {

    $.fn.visible = function(partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;

        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

    };

    //= components/animate.js
    //= components/modal.js
    //= components/presentation.js
    //= components/menu.js
    //= components/faq.js
    //= components/sticky.js
    //= components/aside.js
    //= components/form.js

})