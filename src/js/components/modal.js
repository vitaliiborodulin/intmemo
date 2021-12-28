var fotoPopup = $('.foto-popup');

if (fotoPopup.length > 0) {
    const fotoPopup = GLightbox({
        // touchNavigation: false,
        // keyboardNavigation: false,
        // draggable: false,
        selector: '.foto-popup',
        loop: true
            // fixedNavigation: true,
    });
}




MicroModal.init({
    awaitCloseAnimation: true,
    // onShow: () => $('body').scrollTop().addClass('hidden'),
    onShow: () => {
        $(this).scrollTop();
        $('body').addClass('hidden')
    },
    onClose: () => $('body').removeClass('hidden')
});

// $('.modal-close').on('click', function() {
//     MicroModal.close('request-base-form');
//     MicroModal.close('request-premium-form');
// });

// $('#btn-base-close').on('click', function() {
//     MicroModal.close('request-base-form');
//     $('body').addClass('hidden');
// });

// $('#btn-premium-close').on('click', function() {
//     MicroModal.close('request-premium-form');
//     $('body').addClass('hidden')
// });

// клики по карточкам с ценами
var priceBtn = $('.price__btn');
var baseFormBtn = $('#form-base');
var premFormBtn = $('#form-prem');
var tarif = $('#tarif');
var files = $('#files');

priceBtn.on('click', function() {
    if ($(this).attr('data-tarif') === 'base') {
        baseFormBtn.removeClass('btn-c');
        premFormBtn.addClass('btn-c');
        tarif.val('base');
        files.removeAttr('multiple');

    } else {
        baseFormBtn.addClass('btn-c');
        premFormBtn.removeClass('btn-c');
        tarif.val('prem');
        files.attr('multiple', '');
    }

    checkFormTarif();
});

// клики по кнопкам выбора на форме
var formTarif = $('.form__banner-btns a');

function checkFormTarif() {
    formTarif.each(function() {
        if (!$(this).hasClass('btn-c')) {
            var tarifData = $(this).attr('data-tarif');

            if (tarifData === 'base') {
                $('.form__banner-title').text('Базовый пакет');
                tarif.val('base');
                files.removeAttr('multiple');
            } else {
                $('.form__banner-title').text('Premium пакет');
                tarif.val('prem');
                files.attr('multiple', '');
            }
        }
    })
}

formTarif.on('click', function(e) {
    e.preventDefault();

    var activeTarif = $(this);
    formTarif.not(activeTarif).addClass('btn-c');
    activeTarif.removeClass('btn-c');

    checkFormTarif();
});

$('.form__file-reset').on('click', function() {
    $('#files').val('');
});