// ** init aos
AOS.init({ duration: 1000, mirror: true })

/**
 ** scroll effect on nav navbar
 */
let navColor = $('[data-nav-color]')

navColor = navColor ? navColor.toArray() : []

$(function () {
  if ($('nav.main__navbar').length > 0) {
    $(window).on('scroll', function () {
      let scrollValue = $(window).scrollTop()

      // change color by scroll
      navColor.forEach(el => {
        if (scrollValue >= el.offsetTop - 100) {
          $('.navbar').css('background', el.getAttribute('data-nav-color'))
        }
      })

      // hide navbar fixed top after scrolling 300px
      if (scrollValue >= 200) {
        $('nav').addClass('fixed-top').removeClass('main__navbar')
        $('#project_toggler').css('background', navColor[0].getAttribute('data-nav-color'))
      } else {
        $('nav').removeClass('fixed-top').addClass('main__navbar')
        $('nav, #project_toggler').css('background', 'transparent')
      }

      // hide navbar links after scrolling 700px
      // toggle display navbars
      if (scrollValue >= 700) {
        $('#vivid_main_navbar .navbar-nav').addClass('d-lg-none')
        $('#nav_bars').removeClass('d-lg-none')
      } else {
        $('#vivid_main_navbar .navbar-nav').removeClass('d-lg-none')
        $('#nav_bars').addClass('d-lg-none')
      }
    })
  }
})

// ** nav toggle
$('#projects').on('click', function () {
  $('#project_toggler').fadeToggle()
  $('#projects i').toggleClass('fa-rotate-90')
})
// ** nav search icon
$('#open_search_input').on('click', function () {
  $('#nav__search').toggle('slow')
  $('.close_on_search').fadeToggle()
  $(this).parent().toggleClass('ml-auto')
})

/**
 ** items toggler
 */
$('#items__toggler [data-target]').on('click', function () {
  let itemTag = $(this).data('target')
  // console.log(itemTag)
  $(itemTag).siblings().addClass('show')
  // if (itemTag.search('all') != -1) {
  if (itemTag == '[data-category]') {
    $(itemTag).siblings().addClass('show')
  } else {
    if ($(itemTag).hasClass('show') === false) {
      $(itemTag).addClass('show')
      // console.log('yes i do not have show class')
    }
    $(itemTag).siblings(`:not(${itemTag})`).removeClass('show')
  }
})

/**
 ** toggle fixed menu
 */
$('#toggle_fixed_menu, #nav_bars').on('click', function () {
  $('#fixed_menu').toggleClass('d-none')
})

$('#nav_bars').on('click', function () {
  $('html, body').animate({ scrollTop: 0 }, 1000)
})

// if ( == false) {
// }
