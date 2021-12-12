var choiceBtns = $('.sample__btns a');
var premBtn = choiceBtns.attr('data-sample', 'base');

if (baseBtn.hasClass(''))



    choiceBtns.on('click', function() {
    choiceBtns.toggleClass('btn-c');

    if ($(this).attr('data-sample') === 'base') {
        $('#memo_links').slideUp();
    } else {
        $('#memo_links').slideDown();
    }
});