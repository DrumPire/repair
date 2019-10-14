$(document).ready(function(){
  var openModal = $('.navbar__button');
  var modal = $('.modal');
  var closeModal = $('#close');
  var scrollHidden = $('body');

  openModal.on('click', function(){
    modal.addClass('modal_active');
    scrollHidden.addClass('no-scroll');
  });

  closeModal.on('click', function(){
    modal.removeClass('modal_active');
    scrollHidden.removeClass('no-scroll');
  });

});