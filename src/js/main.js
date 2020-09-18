//= jquery.min.js


$(".controls__icon").click(function (event) {
  const modalName = $(this).parent()[0].getAttribute('data-open-modal')
  console.log(modalName);
  if(!modalName) return

  const modalId = `#modal-${modalName}`
  const isModalActive = $(modalId).hasClass('modal_active')

  $(`.modal:not(${modalId})`).removeClass('modal_active')
  $(modalId).toggleClass('modal_active')

  if(isModalActive) {
    $(this).parent().children('.icon-active').addClass('hidden')
    $(this).parent().children(':not(.icon-active)').removeClass('hidden')
  } else {
    $(this).parent().children('.icon-active').removeClass('hidden')
    $(this).parent().children(':not(.icon-active)').addClass('hidden')
  }
})