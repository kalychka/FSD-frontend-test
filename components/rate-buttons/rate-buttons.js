$("#rate-one li").click(function(){  
    var select = $('#rate-one li').index(this);  
    console.log(select);
    for (i = 0; i <= select; i++) {
        $('#rate-one li span').eq(i).text('star');
    };
})

$("#rate-two li").click(function(){  
    var select = $('#rate-two li').index(this);  
    console.log(select);
    for (i = 0; i <= select; i++) {
        $('#rate-two li span').eq(i).text('star');
    };
})
