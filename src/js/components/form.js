// $("#request-full-form").submit(function(e) {
//     var str = $(this).serialize();
//     $.ajax({
//         type: "POST",
//         url: "/send_callback.php",
//         data: str,
//         success: function(msg) {
//             dataLayer.push({ 'event': 'callbackform' })
//         }
//     });
//     return false;
// });

var requestForm = $('#request-full-form');

if (requestForm.length > 0) {
    requestForm.validate({
        rules: {
            fio: {
                required: true,
                minlength: 6,
            },
            your_name: {
                required: true,
                minlength: 2
            },

            your_phone: {
                required: true,
                minlength: 6,
                // digits: true
            },
            delivery: {
                required: true,
            }
        },
        messages: {
            fio: {
                required: "Введите имя покойного",
                minlength: "Длина должна быть больше 6-ти символов"
            },
            your_name: {
                required: "Введите свое имя",
                minlength: "Длина должна быть больше 2-х символов"
            },
            your_phone: {
                required: "Введите телефон",
                minlength: "Введите корректный телефон",
                // digits: "Вводите только цифры"
            },
            delivery: {
                required: "Куда доставить?",
            }
        }
    });
}

requestForm.on('submit', function(event) {
    if (requestForm.valid() == true) {
        event.preventDefault();
        requestForm.find('.form__title').html('<h2 class="form__title text-center">Спасибо за вашу заявку</h2>');
        requestForm.find('.form__box').hide();
    }
});

var contactsForm = $('.feedback__form');
if (contactsForm.length > 0) {
    contactsForm.validate({
        rules: {
            contacts_name: {
                required: true,
                minlength: 2
            },

            contacts_phone: {
                required: true,
                minlength: 6,
                // digits: true
            }
        },
        messages: {
            contacts_name: {
                required: "Введите свое имя",
                minlength: "Длина должна быть больше 2-х символов"
            },

            contacts_phone: {
                required: "Введите телефон",
                minlength: "Введите корректный телефон",
                // digits: "Вводите только цифры"
            }
        }
    });
}

contactsForm.on('submit', function(event) {
    if (contactsForm.valid() == true) {
        event.preventDefault();

        // $('#loader_img').show();
        var contacts_name = $('.contacts__form input[name=contacts_name]').val();
        var contacts_phone = $('.contacts__form input[name=contacts_phone]').val();
        $.ajax({
            type: 'POST',
            data: {
                contacts_name: contacts_name,
                contacts_phone: contacts_phone,
                modeJs: 'contactsForm'
            },
            dataType: 'json',
            success: function(result) {
                // $('#contactsForm .success').addClass('bg-success').append(result.message);
                // $('#loader_img').hide();
                // contactsForm.trigger('reset');
            },
            error: function(result) {
                // console.log(result)
                contactsForm.trigger('reset');
                // contactsForm.find('.form__log').html(result.statusText);
                contactsForm.find('.form__log').html('Сообщение успешно отправлено');
            }
        });
        return false;
    } else return false;
});