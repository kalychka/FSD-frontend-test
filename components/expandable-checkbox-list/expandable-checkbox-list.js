$(function() {
    $('.expandable-checkbox__list').ready().hide();
    $('.expandable-checkbox__title').click(function() {
        $('.expandable-checkbox__list').fadeToggle();
        
        $(this).find('span').toggleClass('expandable-checkbox__transform');
    })
})