$("#rate-buttons .rate-buttons-list__item").click(function(){  

    var select = $(this).index(); 
    console.log(select)
    for (i = 0; i <= select; i++) {
        $(this).parent().find('.rate-buttons-list__item span').eq(i).text('star');
    };

})

