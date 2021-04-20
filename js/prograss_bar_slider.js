// ** on bootstarp carousel
var slider_list_progress = $('.slider__progress--list li'),
  li_count = slider_list_progress.length,
  slides_count = $('.carousel-inner .carousel-item'),
  li_s = slides_count.length,
  slide_num = 1

slider_list_progress.css('width', 100 / li_s + '%')

$('.current_slider_num').html(checkZero(slide_num))
$('.count_slider_num').html(checkZero(li_s))

$('.carousel').on('slide.bs.carousel', function () {
  slide_num++
  checkSlideNum()

  for (let i = 1; i <= slide_num; i++) {
    $('.slider__progress--list li:nth-child(' + i + ')').addClass('on')
    if (i == 1) {
      for (let i = 2; i <= li_s; i++) {
        $('.slider__progress--list li:nth-child(' + i + ')').removeClass('on')
      }
    }
  }

  $('.current_slider_num').html(checkZero(slide_num))
})

$('.carousel .custom_btn').trigger('click', function () {
  if ($(this).hasClass('slider__prev')) slide_num--
  else if ($(this).hasClass('slider__next')) slide_num++

  checkSlideNum()

  $('.current_slider_num').html(checkZero(slide_num))
})

function checkSlideNum() {
  if (slide_num < 1) slide_num = li_s
  else if (slide_num > li_s) slide_num = 1
}

function checkZero(oprator) {
  return oprator < 10 ? '0' + oprator : oprator
}
