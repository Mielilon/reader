//= jquery.min.js


$(".controls__icon").click(function (event) {
  const modalName = $(this).parent()[0].getAttribute('data-open-modal')
  if(!modalName) return

  const modalId = `#modal-${modalName}`
  const isModalActive = $(modalId).hasClass('modal_active')

  $(`.modal:not(${modalId})`).removeClass('modal_active')
  $(modalId).toggleClass('modal_active')

  $('.controls__img-wpapper_active').removeClass('controls__img-wpapper_active')

  if(!isModalActive) {
    // тут добавляем
    $(this).parent().addClass('controls__img-wpapper_active')
  } else {
    // тут убираем
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


$(".registration").click(function (event) {
  const authorization = $('.header__authorization')
  const name = $('.header__name')
  authorization.toggleClass('hidden')
  name.toggleClass('hidden')
})

$(".header__name").click(function (event) {
  const settings = $('.header__settings')
  settings.toggleClass('hidden')
})

$('#save-icon').click(function() {
  $(".reader__page>.saved-icon").addClass('saved-icon_active')
})

$(document).on('click',function (e) {
  if ($(e.target).closest('.modal.modal_active').length ||
  $(e.target).closest('.controls__icon').length) return;

  $('.modal.modal_active').removeClass('modal_active')
  $('.controls__img-wpapper_active').removeClass('controls__img-wpapper_active')
  // и тут убираем
 });