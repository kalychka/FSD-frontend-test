$( function() {
    $('.dropdown__list').hide();
    $('.dropdown__complete-button__clear').hide();
    $('#dropdown-one').children('.dropdown__form').click(function() {
        $('#dropdown-one').children('.dropdown__list').slideToggle();

        $('#dropdown-one > #dropdown-adult').find(function() {
            
            $('#dropdown-adult').find('.plus').parent().click(function() {
                $('#dropdown-adult').find('.minus').parent().removeClass('dropdown-button_disable');
                var adult_value = $('#dropdown-adult').find('input').val();
                
                $('#dropdown-adult').find('input').val(parseInt(adult_value) + 1);
            });

            $('#dropdown-adult').find('.minus').parent().click(function() {
                var adult_value = $('#dropdown-adult').find('input').val();
                if (parseInt(adult_value) > 0 ) {
                    $('#dropdown-adult').find('input').val(parseInt(adult_value) - 1);
                }
                
                
            })

        });

        $('#dropdown-one > #dropdown-child').find(function() {
            
            $('#dropdown-child').find('.plus').parent().click(function() {
                $('#dropdown-child').find('.minus').parent().removeClass('dropdown-button_disable');
                var child_value = $('#dropdown-child').find('input').val();
                
                $('#dropdown-child').find('input').val(parseInt(child_value) + 1);
            });

            $('#dropdown-child').find('.minus').parent().click(function() {
                var child_value = $('#dropdown-child').find('input').val();
                if (parseInt(child_value) > 0 ) {
                    $('#dropdown-child').find('input').val(parseInt(child_value) - 1);
                }
                
            })
            
        });

        $('#dropdown-one > #dropdown-baby').find(function() {
            
            $('#dropdown-baby').find('.plus').parent().click(function() {
                $('#dropdown-baby').find('.minus').parent().removeClass('dropdown-button_disable');
                var baby_value = $('#dropdown-baby').find('input').val();
                
                $('#dropdown-baby').find('input').val(parseInt(baby_value) + 1);
            });

            $('#dropdown-baby').find('.minus').parent().click(function() {
                var baby_value = $('#dropdown-baby').find('input').val();
                if (parseInt(baby_value) > 0 ) {
                    $('#dropdown-baby').find('input').val(parseInt(baby_value) - 1);
                }
                
            })
            
        });

    });
    $('#dropdown-one').find('.dropdown__complete-button__done').click(function() {

        var score = parseInt( $('#dropdown-one #dropdown-adult').find('input').val() ) + 
                    parseInt( $('#dropdown-one #dropdown-child').find('input').val() ) + 
                    parseInt( $('#dropdown-one #dropdown-baby').find('input').val() );
        if (score > 0) {
            console.log('check');
            $('.dropdown__complete-button__clear').show();
            $('.dropdown__complete-button').css({'justify-content' : 'space-between'});
        }
        $('#dropdown-one').find('.dropdown__form_placeholder').text(`${score} Гостя`);
        $('#dropdown-one').children('.dropdown__list').slideToggle();
    })

    $('.dropdown__complete-button__clear').click(function() {
        $('#dropdown-one #dropdown-adult, #dropdown-one #dropdown-child, #dropdown-one #dropdown-baby').find('input').val(0);
        $('#dropdown-one').find('.dropdown__form_placeholder').text('Сколько гостей');
        $('#dropdown-one').children('.dropdown__list').slideToggle();
    })
})