// var $container = $('.grid');

// if ($container.length > 0) {

// $container.imagesLoaded(function() {
//     $container.masonry({
//         itemSelector: '.grid-item',
//         columnWidth: '.grid-item',
//         percentPosition: true
//     });
// });

// $container.masonry({
//     itemSelector: '.grid-item',
//     columnWidth: '.grid-item',
//     percentPosition: true,
//     // horizontalOrder: true
// });

// $(window).resize(function(event) {
//     $container.masonry({
//         itemSelector: '.grid-item',
//         columnWidth: '.grid-item',
//         percentPosition: true,
//         horizontalOrder: true
//     });
// });
// }
var hiddenFotos = $('.memo__foto-list--hidden .grid-item');
var fotoMoreBtn = $('#foto-btn');

fotoMoreBtn.on('click', function(e) {
    e.preventDefault();

    hiddenFotos.each(function(index, value) {
        $(this).toggleClass('show').slideToggle();

        if ($(this).hasClass('show')) {
            fotoMoreBtn.text('Скрыть');
        } else {
            fotoMoreBtn.text('Смотреть ещё');
        }
    });

});