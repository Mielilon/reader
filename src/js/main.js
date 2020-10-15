//= jquery.min.js

//открывает модальные окна, меняет цвет иконок и отодвигает кнопки
$(".controls__icon").click(function (event) {
  const modalName = $(this).parent()[0].getAttribute('data-open-modal')
  if(!modalName) return

  const modalId = `#modal-${modalName}`
  const isModalActive = $(modalId).hasClass('modal_active')

  $(`.modal:not(${modalId})`).removeClass('modal_active')
  $(modalId).toggleClass('modal_active')

  $('.controls__img-wrapper_active').removeClass('controls__img-wrapper_active')

  const modalSide = $(modalId).attr('data-modal-side') || 'right'
  const sideButton = $(`.reader-controls__${modalSide}`)
  $('.reader-controls__left, .reader-controls__right').removeClass('displaced')

  if(!isModalActive) {
    sideButton.addClass('displaced')
    $(this).parent().addClass('controls__img-wrapper_active')
  } else {
    sideButton.removeClass('displaced')
  }
})

//меняет контент модальных окон по табам
$(".tabs-buttons__item").click(function (event) {
  const tabId = $(this).attr('data-tab-button')
  if(!tabId) return

  const wrapper = $(this).closest('.tabs-wrapper')
  
  $(this).siblings().removeClass('tabs-buttons__item_active')
  $(this).addClass('tabs-buttons__item_active')

  wrapper.children(`.tabs-content:not([data-tab-content="${tabId}"])`).removeClass('tabs-content_active')
  wrapper.children(`.tabs-content[data-tab-content="${tabId}"]`).toggleClass('tabs-content_active')
})

//открывает модальное окно входа
$(".login").click(function (event) {
  const enrtance = $('.entrance')
  enrtance.addClass('entrance__active')
})

$(".exit").click(function (event) {
  const enrtance = $('.entrance')
  enrtance.removeClass('entrance__active')
})

//добавляет контент в блок отсутствия доступа
$('.get-access__title').click(function() {
  $(this).closest('.get-access').toggleClass('get-access_active')
})

$('.font-wrapper').click(function() {
  $(this).closest('.font__item').toggleClass('font__item_active')
})

//меняет авторизацию на кабинет
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

$(document).click(function(e) {
  if($(e.target).closest('.header__settings').length) return;
  if($(e.target).closest('.header__name').length) return;

  $('.header__settings').addClass('hidden')
})


//добавляет закладку
$('#save-icon').click(function() {
  $(".reader__page>.saved-icon").addClass('saved-icon_active')
})

$(document).on('click',function (e) {
  if ($(e.target).closest('.modal.modal_active').length ||
  $(e.target).closest('.controls__icon').length) return;

  $('.modal.modal_active').removeClass('modal_active')
  $('.controls__img-wrapper_active').removeClass('controls__img-wrapper_active')

  $('.reader-controls__left, .reader-controls__right').removeClass('displaced')
 });
 

//меняет раскладку
$('.layout-double').click(function() {
  const layout = $('.layout-page')
  layout.removeClass('continuous-page_active')
  layout.toggleClass('double-page_active')

})

$('.layout-continuous').click(function() {
  const layout = $('.layout-page')
  layout.toggleClass('continuous-page_active')
  layout.removeClass('double-page_active')
})

$('.layout-single').click(function() {
  const layout = $('.layout-page')
  layout.removeClass('continuous-page_active')
  layout.removeClass('double-page_active')
})
