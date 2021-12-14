var textSlides = $('.present__item');
var picSlides = $('.present__pic');
// var activeTextSlide = $('.present__item.active');


function doProgress() {
    var progress = $(".present__list .active .present__progress");
    progress.css('width', 0 + '%').animate({ width: 100 + '%' }, 3000);

}

function doCurtain() {
    var curtain = $(".present__pics .active .present__curtain");
    curtain.stop(true).animate({ width: 100 + '%' }, 1500, 'swing', changeImage).animate({ width: 0 }, 1500);
};

// function checkSlideClick(slide) {
//     textSlides.bind('click');

//     if (slide.attr('data-check') == 1) {
//         slide.unbind('click');
//     }
// }

function changeImage() {
    var picNum = 0;

    textSlides.each(function(i, elem) {

            if ($(this).hasClass('active')) {
                picNum = $(this).attr('data-id');
            }
        })
        // console.log(picNum);
    var currentImage = picSlides.eq(picNum);
    picSlides.not(currentImage).removeClass('active');
    currentImage.addClass('active');

    // var curtain = $(".presents__pics .active .present__curtain");
    // console.log(currentImage.find('.present__curtain'));
    // currentImage.find('.present__curtain').animate({ width: 0 }, 1500)

}

// main loop


function changeSlide(count) {
    var count = count ? count : 0;
    let currentSlide = textSlides.eq(count);
    // let currentImage = picSlides.eq(count);

    textSlides.not(currentSlide).removeClass('active');
    // picSlides.not(currentImage).removeClass('active');
    currentSlide.addClass('active');
    // currentImage.addClass('active');

    doProgress();
    doCurtain();
}

let j = 0;

var mainInt = setInterval(function() {
    if (j >= 6) {
        j = 0;
    }

    changeSlide(j);

    j++;

}, 3000);

textSlides.on('click', function() {

    // checkSlideClick(thisSlide);


    clearInterval(mainInt);
    changeSlide($(this).attr('data-id'));
});