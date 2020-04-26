$(function(){
  $('body').on('click', '.burger', function(event){
    event.preventDefault();

    let menu = $(this).next();
    

    if(menu.css('display') == 'none'){
      menu.slideToggle();
    }
    
    else{
      menu.slideToggle();
    }

  });
});

$(document).ready(function(){   
    $('.tag').removeClass('tag_animation').removeClass('tag_animation-bottom');  

    $('input[type="tel"]').inputmask({ "mask": "+7 (999) 999-9999" });
});

$('.multiple-items').slick({
  slidesToShow: 3,
  prevArrow: '<img class="arrow-prev" src="img/arrow-prev.png">',
  nextArrow: '<img class="arrow-next" src="img/arrow-next.png">',
  variableWidth: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 1601,
      settings: {
        slidesToShow: 2,
        infinite: true,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        infinite: true,
        arrows: false,
        dots: true
      }
    },
  ]
});

function disableScroll()
  {
    $('html, body')
      .addClass('stop-scrolling')
      .bind('touchmove', function(e){
        e.preventDefault()
      })
  };

  function enableScroll()
  {
    $('html, body').removeClass()
    .unbind('touchmove')
  };

  $('.call-button_top, .call-button_bottom, .call-order__phone-icon')
  .click(function(){
    $('.popup-container').fadeIn(400, disableScroll);
    $('.popup').animate({
      width: '320px',
      height: '550px'
    },600);
    $('.popup form').addClass('popup-flex');
  });

  $('.button, .button-mobile')
  .click(function(){
    $('.popup-container-mail').fadeIn(400, disableScroll);
    $('.popup').animate({
      width: '320px',
      height: '600px'
    },600);
    $('.popup form').addClass('popup-flex');
  });

  $('.popup-container').click(function(event){
    if(event.target == this) {
      $(this).fadeOut(400, enableScroll);
      $('.popup').animate({
      width: '0',
      height: '0'
    },600);
  }   
});

  $('.popup-container-mail').click(function(event){
    if(event.target == this) {
      $(this).fadeOut(400, enableScroll);
      $('.popup').animate({
      width: '0',
      height: '0'
    },600);
  }   
});

  $('form').each(function () {
        $(this).validate({
          submitHandler(form) {
          let th = $(form);

          $.ajax({
          type: 'POST',
          url: 'mail.php',
          data: th.serialize(),
        }).done(() => {

          th.trigger('reset');
        });

        return false;
        }
   });
  });

