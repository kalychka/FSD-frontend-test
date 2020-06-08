$(function() {
    $(".rate-buttons-list__item").click(function(){
        var select = $('.rate-buttons-list__item').index(this);  
        for (i = 0; i <= select; i++) {
            $('.rate-buttons-list__item span').eq(i).text('star');
        };
    })
    $(".rate-buttons-list__item").click(function(){
        var select = $(".rate-buttons-list__item").index(this);  
        for (i = 0; i <= select; i++) {
            $('.rate-buttons-list__item span').eq(i).text('star');
        };
    })
})