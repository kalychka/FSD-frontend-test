$(function() {
    $('.expandable-checkbox__list').ready().hide();
    $('.expandable-checkbox__title').click(function() {
        $(this).parent().find('.expandable-checkbox__list').fadeToggle("5000");
        
        $(this).find('span').toggleClass('expandable-checkbox__transform');
    })
})