var requestForm = $('#request-full-form .form');

if (requestForm.length > 0) {
    requestForm.validate({
        rules: {
            fio: {
                required: true,
                minlength: 6,
            },
            birth_date: {
                required: true,
            },
            birth_place: {
                required: true,
            },
            die_date: {
                required: true,
            },
            die_place: {
                required: true,
            },
            citizen: {
                required: true,
            },
            relatives: {
                required: true,
            },
            educ: {
                required: true,
            },
            job: {
                required: true,
            },
            dop_info: {
                required: true,
            },
            words: {
                required: true,
            },
            achiv: {
                required: true,
            },
            links: {
                required: true,
            },
            grave: {
                required: true,
            },
            coords: {
                required: true,
            },
            'files[]': {
                required: true,
                // extension: "png"
            },
            req_name: {
                required: true,
                minlength: 2
            },
            req_phone: {
                required: true,
                minlength: 6,
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
            birth_date: {
                required: "Не указана дата рождения",
            },
            birth_place: {
                required: "Не указано место рождения",
            },
            die_date: {
                required: "Не указана дата смерти",
            },
            die_place: {
                required: "Не указано место смерти",
            },
            citizen: {
                required: "Не указано гражданство",
            },
            relatives: {
                required: "Добавьте родственников",
            },
            educ: {
                required: "Укажите образование",
            },
            job: {
                required: "Укажите работу",
            },
            dop_info: {
                required: "Укажите доп. информацию",
            },
            words: {
                required: "Укажите слова",
            },
            achiv: {
                required: "Укажите достижения",
            },
            links: {
                required: "Укажите ссылки",
            },
            grave: {
                required: "Укажите место",
            },
            coords: {
                required: "Укажите координаты",
            },
            'files[]': {
                required: "Прикрепите файлы",
            },
            req_name: {
                required: "Введите свое имя",
                minlength: "Длина должна быть больше 2-х символов"
            },
            req_phone: {
                required: "Введите телефон",
                minlength: "Введите корректный телефон",
            },
            delivery: {
                required: "Куда доставить?",
            }
        }
    });
}

requestForm.on('submit', function(event) {
    event.preventDefault();

    if (requestForm.valid() == true) {
        var $that = $(this),
            formData = new FormData($that.get(0));

        // $('#loader_img').show();
        // var fio = $('#request-full-form input[name=fio]').val();
        // var birth_date = $('#request-full-form input[name=birth_date]').val();
        // var birth_place = $('#request-full-form input[name=birth_place]').val();
        // var die_date = $('#request-full-form input[name=die_date]').val();
        // var die_place = $('#request-full-form input[name=die_place]').val();
        // var citizen = $('#request-full-form input[name=citizen]').val();
        // var relatives = $('#request-full-form #relatives').val();
        // var educ = $('#request-full-form #educ').val();
        // var job = $('#request-full-form #job').val();
        // var dop_info = $('#request-full-form #dop_info').val();
        // var words = $('#request-full-form #words').val();
        // var achiv = $('#request-full-form #achiv').val();
        // var links = $('#request-full-form #links').val();
        // var grave = $('#request-full-form input[name=grave]').val();
        // var coords = $('#request-full-form input[name=coords]').val();
        // // var files = $('#request-full-form #files').val();
        // var req_name = $('#request-full-form input[name=req_name]').val();
        // var req_phone = $('#request-full-form input[name=req_phone]').val();
        // var delivery = $('#request-full-form #delivery').val();
        // var tarif = $('#request-full-form input[name=tarif]').val();

        $.ajax({
            type: 'POST',
            url: "/wp-content/themes/intmemo/mail.php",
            // data: {
            //     fio: fio,
            //     birth_date: birth_date,
            //     birth_place: birth_place,
            //     die_date: die_date,
            //     die_place: die_place,
            //     citizen: citizen,
            //     relatives: relatives,
            //     educ: educ,
            //     job: job,
            //     dop_info: dop_info,
            //     words: words,
            //     achiv: achiv,
            //     links: links,
            //     grave: grave,
            //     coords: coords,
            //     // files: files,
            //     req_name: req_name,
            //     req_phone: req_phone,
            //     delivery: delivery,
            //     tarif: tarif,
            //     modeJs: 'requestForm'
            // },
            contentType: false, // важно - убираем форматирование данных по умолчанию
            processData: false, // важно - убираем преобразование строк по умолчанию
            data: formData,
            dataType: 'json',
            beforeSend: function() {
                requestForm.find('.form__log').html('Отправка...');
            },
            success: function(result) {
                // $('#contactsForm .success')
                // .addClass('bg-success')
                // .append(result.message);
                // $('#loader_img').hide();
                // requestForm.find('.form__log').html(result.message);
                requestForm.find('.form__title').hide();
                requestForm.find('.form__banner').hide();
                requestForm.find('.form__box').hide();
                requestForm.find('.form__log').hide();
                requestForm.find('.form__final').show();
            },
            complete: function(xhr, textStatus) {
                if (xhr.status === 413) {
                    requestForm.find('.form__log').text('Ошибка. Превышен размер файлов для загрузки');
                }
                console.log(xhr.status)
                    // } else if (jqXHR.status == 404) {
                    //     alert('Requested page not found. [404]');
                    // } else if (jqXHR.status == 500) {
                    //     alert('Internal Server Error [500].');
                    // } else if (exception === 'parsererror') {
                    //     alert('Requested JSON parse failed.');
                    // } else if (exception === 'timeout') {
                    //     alert('Time out error.');
                    // } else if (exception === 'abort') {
                    //     alert('Ajax request aborted.');
                    // } else {
                    //     alert('Uncaught Error.\n' + jqXHR.responseText);
                    // }
                    // requestForm.find('.form__log').text(textStatus);
            }
        });
        return false;
    } else return false;
});

// две побочные формы
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
    event.preventDefault();

    if (contactsForm.valid() == true) {

        // $('#loader_img').show();
        var contacts_name = $('.feedback__form input[name=contacts_name]').val();
        var contacts_phone = $('.feedback__form input[name=contacts_phone]').val();
        $.ajax({
            type: 'POST',
            url: "/wp-content/themes/intmemo/mail.php",
            data: {
                contacts_name: contacts_name,
                contacts_phone: contacts_phone,
                modeJs: 'contactsForm'
            },
            dataType: 'json',
            success: function(result) {
                // $('#contactsForm .success')
                // .addClass('bg-success')
                // .append(result.message);
                // $('#loader_img').hide();
                contactsForm.trigger('reset');
                contactsForm.find('.form__log').html(result.message);
            }
        });
        return false;
    } else return false;
});