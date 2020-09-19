//= jquery.min.js


$(".controls__icon").click(function (event) {
  const modalName = $(this).parent()[0].getAttribute('data-open-modal')
  if(!modalName) return

  const modalId = `#modal-${modalName}`
  const isModalActive = $(modalId).hasClass('modal_active')

  $(`.modal:not(${modalId})`).removeClass('modal_active')
  $(modalId).toggleClass('modal_active')

  $('.controls__icon.icon-active').addClass('hidden')
  $('.controls__icon:not(.icon-active)').removeClass('hidden')

  console.log(isModalActive);

  if(isModalActive) {
    $(this).parent().children('.icon-active').removeClass('hidden')
    $(this).parent().children(':not(.icon-active)').addClass('hidden')
  } else {
    $(this).parent().children('.icon-active').removeClass('hidden')
    $(this).parent().children(':not(.icon-active)').addClass('hidden')
  }
})

$(".tabs-buttons__item").click(function (event) {
  const tabId = $(this).attr('data-tab-button')
  if(!tabId) return

  const wrapper = $(this).closest('.tabs-wrapper')
  
  $(this).siblings().removeClass('tabs-buttons__item_active')
  $(this).addClass('tabs-buttons__item_active')

  wrapper.children(`.tabs-content:not([data-tab-content="${tabId}"])`).removeClass('tabs-content_active')
  wrapper.children(`.tabs-content[data-tab-content="${tabId}"]`).toggleClass('tabs-content_active')
})

const enrtance = $('.entrance')

$(".login").click(function (event) {
  const enrtance = $('.entrance')
  enrtance.addClass('entrance__active')
})

$(".exit").click(function (event) {
  const enrtance = $('.entrance')
  enrtance.removeClass('entrance__active')
})


$('.get-access__title').click(function() {
  $(this).closest('.get-access').toggleClass('get-access_active')
})

$('.font-wrapper').click(function() {
  $(this).closest('.font__item').toggleClass('font__item_active')
})