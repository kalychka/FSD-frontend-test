$( function() {
    $('.dropdown__list, .dropdown__complete-button__clear').ready().hide();

    $('.dropdown').find('.dropdown__form').click(function() {
        
        $(this).parent().find('.dropdown__list').slideToggle();
        
        $(this).parent().find('#dropdown-adult, #dropdown-child, #dropdown-baby').find('.plus').parent().click(function() {
            $(this).parents('#dropdown-adult, #dropdown-child, #dropdown-baby').find('.minus').parent().removeClass('dropdown-button_disable');
            var adult_value = $(this).parents('#dropdown-adult, #dropdown-child, #dropdown-baby').find('input').val();
            $(this).parents('#dropdown-adult, #dropdown-child, #dropdown-baby').find('input').val(parseInt(adult_value) + 1);
        });

        $(this).parent().find('#dropdown-adult, #dropdown-child, #dropdown-baby').find('.minus').parent().click(function() {
            var adult_value = $(this).parents('#dropdown-adult, #dropdown-child, #dropdown-baby').find('input').val();
            if (parseInt(adult_value) > 0 ) {
                $(this).parents('#dropdown-adult, #dropdown-child, #dropdown-baby').find('input').val(parseInt(adult_value) - 1);
            }
        })
         
        $(this).parent().find('.dropdown__complete-button__done').click(function() {
            var score = parseInt( $(this).parents('.dropdown').find('#dropdown-adult').find('input').val() ) + 
                        parseInt( $(this).parents('.dropdown').find('#dropdown-child').find('input').val() ) +
                        parseInt( $(this).parents('.dropdown').find('#dropdown-baby').find('input').val() );
            if (score > 0) {
                $(this).parent().find('.dropdown__complete-button__clear').show();
                $(this).parent().css({'justify-content' : 'space-between'});
            }
            $(this).parents('.dropdown').find('.dropdown__form_placeholder').text(`${score} Гостя`);
        })

        $(this).parent().find('.dropdown__complete-button__clear').click(function() {
            $(this).parents('.dropdown').find('#dropdown-adult, #dropdown-child, #dropdown-baby').find('input').val(0);
            $(this).parents('.dropdown').find('.dropdown__form_placeholder').text('Сколько гостей');
        })
          
    });    

})