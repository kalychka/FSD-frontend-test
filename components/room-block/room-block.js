$(document).ready(function(){
    $('.room-block__carousel').slick({
        autoplay: true,
        appendArrows: $(this).find('.room-block__carousel'),
        prevArrow: '<div class="room-block__button prevArrow">expand_more</div>',
        nextArrow: '<div class="room-block__button nextArrow">expand_more</div>',
        dots: true,
        dotsClass: 'room-dots',
    });
  });