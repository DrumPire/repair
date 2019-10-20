var mySwiper = new Swiper(".slider", {
  speed: 400,
  spaceBetween: 27,
  slidesPerView: 3,
  loop: true,
  navigation: {
    nextEl: ".arrows-right",
    prevEl: ".arrows-left"
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    567: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 50
    },
    1200: {
      spaceBetween: 27,
      slidesPerView: 3
    }
  }
});

new WOW().init();

// валидация форм
$(document).ready(function() {
  $("#brif-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userphone: {
        required: true
      },
      useremail: {
        required: true,
        email: true
      }
    },
    errorElement: "span",
    errorClass: "invalid",
    messages: {
      username: "Укажите ваше имя",
      userphone: "Укажите ваш телефон",
      useremail: {
        required: "Укажите ваш email",
        email: "Введите корректный email"
      }
    },
    submitHandler: function() { 
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $('#brif-form').serialize(),
        success: function() {
          $('#brif-form')[0].reset();
          $('.done').addClass('visibl-brif');
          function sendForm(){
            $('.done').removeClass('visibl-brif');
          }
          setTimeout(sendForm, 5000);
        }
      });
    }
  });
  $("#offer-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userphone: {
        required: true
      }
    },
    errorElement: "span",
    errorClass: "offer-invalid",
    messages: {
      username: "Укажите ваше имя",
      userphone: "Укажите ваш телефон"
    },
    submitHandler: function() { 
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $('#offer-form').serialize(),
        success: function() {
          $('#offer-form')[0].reset();
          $('.done').addClass('visibl');
          function sendForm(){
            $('.done').removeClass('visibl');
          }
          setTimeout(sendForm, 5000);
        }
      });
    }
  });
  $("#modal-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userphone: {
        required: true
      }
    },
    errorElement: "span",
    errorClass: "invalid",
    messages: {
      username: "Укажите ваше имя",
      userphone: "Укажите ваш телефон"
    },
    submitHandler: function() { 
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $('#modal-form').serialize(),
        success: function() {
          $('#modal-form')[0].reset();
          $('.done').addClass('visibl-modal');
          function sendForm(){
            $('.done').removeClass('visibl-modal');
          }
          setTimeout(sendForm, 5000);
        }
      });
    }
  });
 
  // маска для телефона
  $(".phone").mask("+38 (999) 999-99-99");
});
