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

  const modalSide = $(modalId).attr('data-modal-side')
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
  wrapper.children(`.tabs-content[data-tab-content="${tabId}"]`).addClass('tabs-content_active')
})

//открывает модальное окно входа
$(".login").click(function (event) {
  const enrtance = $('.entrance')
  enrtance.addClass('entrance__active')
})

$(".exit").click(function (event) {
  const enrtance = $('.entrance')
  enrtance.removeClass('entrance__active')
  $('.controls__img-wrapper_active').removeClass('controls__img-wrapper_active')
})

//открывает модальное окно закладок
$(".saved-info__img_edit").click(function (event) {
  const enrtance = $('.bookmark')
  enrtance.addClass('bookmark__active')
})

$(".exit").click(function (event) {
  const enrtance = $('.bookmark')
  enrtance.removeClass('bookmark__active')
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
  $('.authorization-menu__popup').toggleClass('hidden')
  $('.header__name').toggleClass('header__name_active')

})

$(document).click(function(e) {
  if($(e.target).closest('.authorization-menu__popup').length) return;
  if($(e.target).closest('.header__name').length) return;

  $('.authorization-menu__popup').addClass('hidden')
  $('.header__name').removeClass('header__name_active')
})


//добавляет закладку открывает модальное окно добавления закладки
$('#save-icon').click(function() {
  $('.bookmark').addClass('bookmark__active')
})

//анимация сохранения закладки
$('.bookmark__button').click(function() {
  $('.bookmark').removeClass('bookmark__active')
  $('#modal-content').addClass('modal_active')
  $('.reader-controls__left').addClass('displaced')

  $('.tabs-buttons__item[data-tab-button="1"]').removeClass('tabs-buttons__item_active')
  $('.tabs-buttons__item[data-tab-button="2"]').addClass('tabs-buttons__item_active')

  $('.tabs-content[data-tab-content="1"]').removeClass('tabs-content_active')
  $('.tabs-content[data-tab-content="2"]').addClass('tabs-content_active')

  $(".reader__page>.saved-icon").addClass('saved-icon_active')
})

//выключает модальное окно при нажатии на экран
$(document).on('click',function (e) {
  if ($(e.target).closest('.modal.modal_active').length ||
  $(e.target).closest('.bookmark').length ||
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


//full screen
function toggleFullScreen() {
  var doc = window.document;
  var docEl = doc.documentElement;
  
  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen;
  
  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement) { 
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);  
  }
}

$('.format__item_fullscreen').click(function() {
  toggleFullScreen()
})

$('.reader-controls__full-screen').click(function() {
  toggleFullScreen()
}) 


//Открытие информации в оглавлении
$('.content-info__text').click(function() {
  // $(".content-info__points").removeClass("content-info__points_active");
  $(this).siblings(".content-info__points").toggleClass("content-info__points_active");
  $(this).toggleClass("content-info__text_open");
})


//изменение масштаба
let scaleArray = [
  50,
  75,
  100,
  125,
  150,
  175,
  200,
  225,
  250,
  275,
  300,
  325,
  350,
  375,
  400,
]

let i = 2

$('#less-icon').click(function() {
    if(i === 0) {
      return
    } else {
      i = i - 1
      $(".reader").attr("data-scale-percent", scaleArray[i])
      $('.scale__interest').text(scaleArray[i] + '%')
    }
 })

 $('#more-icon').click(function() {
  if(i + 1 >= scaleArray.length) {
    return
  } else {
    i = i + 1
    $(".reader").attr("data-scale-percent", scaleArray[i])
    $('.scale__interest').text(scaleArray[i] + '%')
  }
 })

 $('.reader-controls__farther').click(function() {
  if(i === 0) {
    return
  } else {
    i = i - 1
    $(".reader").attr("data-scale-percent", scaleArray[i])
  }
})

$('.reader-controls__closer').click(function() {
if(i + 1 >= scaleArray.length) {
  return
} else {
  i = i + 1
  $(".reader").attr("data-scale-percent", scaleArray[i])
}
})

//закрывает модальные окна нажатием на крестик
$(".exit").click(function (event) {
  $('.modal').removeClass("modal_active");
  $('.controls__img-wrapper').removeClass("controls__img-wrapper_active");
})

//копирование текста нажатием на кнопку

function copyText() {
  var copyText = $('.text__content-wrapper');
  copyText.select();
  document.execCommand("copy");
  $('.text__copy-description').addClass("text__copy-description_active");
}

$(".text__button").click(function (event) {
  copyText()
})

//полка

$(".shelf__description").click(function (event) {
  $('.shelf__input').toggleClass("shelf__input_active");
  $('.shelf-icon').toggleClass("shelf_close");
  $('.shelf__input-icon').toggleClass("input-icon_active");
})
