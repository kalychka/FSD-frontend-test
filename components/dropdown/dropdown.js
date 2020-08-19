import './dropdown.scss'
$( function() {
    // скрытие формы при загрузке страницы
    $('.dropdown__list, .dropdown__complete-button__clear').ready().hide();
    // обнуление значений полей при загрузке страницы
    $('.dropdown').find('input').ready().val(0);

    // событие клика по полю ввода
    $('.dropdown, .dropdown_bedroom').each(function() {

        $(this).find('.dropdown__form').click(function() {
            // открытие-закрытие формы
            $(this).parent().find('.dropdown__list').slideToggle();
        })

        // событие клика по кнопке "плюс"
        $(this).find('#dropdown-adult, #dropdown-child, #dropdown-baby').find('.plus').parent().click(function() {
            // удаление disable из кнопки "минус"
            $(this).parents('#dropdown-adult, #dropdown-child, #dropdown-baby').find('.minus').parent().removeClass('dropdown-button_disable');
            // получение значения поля 
            var human_value = $(this).parents('#dropdown-adult, #dropdown-child, #dropdown-baby').find('input').val();
            // увеличение значения на один
            $(this).parents('#dropdown-adult, #dropdown-child, #dropdown-baby').find('input').val(parseInt(human_value) + 1);  
        });

        // событие клика по кнопке "минус"
        $(this).find('#dropdown-adult, #dropdown-child, #dropdown-baby').find('.minus').parent().click(function() {
            // получение значения поля
            var human_value = $(this).parents('#dropdown-adult, #dropdown-child, #dropdown-baby').find('input').val();
            // проверка на положительное значение
            if (parseInt(human_value) > 0 ) {
                // уменьшение значения на один
                $(this).parents('#dropdown-adult, #dropdown-child, #dropdown-baby').find('input').val(parseInt(human_value) - 1);
            };
        })



    });  

    $('.dropdown').each(function() {
        // событие клика по кнопке "применить"
        $(this).find('.dropdown__complete-button__done').click(function() {

            // счет значения полей 
            var adult = parseInt( $(this).parents('.dropdown').find('#dropdown-adult').find('input').val() );
            var child = parseInt( $(this).parents('.dropdown').find('#dropdown-child').find('input').val() );
            var baby = parseInt( $(this).parents('.dropdown').find('#dropdown-baby').find('input').val() );
            var score = adult + child + baby;

            // если есть хоть один гость, то показать кнопку "отчистить" и изменить css контента
            if (score > 0) {
                $(this).parent().find('.dropdown__complete-button__clear').show();
                $(this).parent().css({'justify-content' : 'space-between'});
            };

            // очистка плейсхолдера
            $(this).parents('.dropdown').find('.dropdown__form_placeholder').text('');

            // ввод значений в плейсхолдер

            if (adult > 0) {
                switch (adult) {
                    case 1: $(this).parents('.dropdown').find('.dropdown__form_placeholder').append(`${adult} Гость, `);
                        break;
                    case 2:
                    case 3:
                    case 4: $(this).parents('.dropdown').find('.dropdown__form_placeholder').append(`${adult} Гостя, `); 
                        break;
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10: $(this).parents('.dropdown').find('.dropdown__form_placeholder').append(`${adult} Гостей, `);
                        break;
                }           
            }

            if (child > 0) {
                switch (child) {
                    case 1: $(this).parents('.dropdown').find('.dropdown__form_placeholder').append(`${child} Ребенок, `);
                        break;
                    case 2:
                    case 3:
                    case 4: $(this).parents('.dropdown').find('.dropdown__form_placeholder').append(`${child} Ребенка, `); 
                        break;
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10: $(this).parents('.dropdown').find('.dropdown__form_placeholder').append(`${child} Детей, `);
                        break;
                }
            }

            if (baby > 0) {
                switch (baby) {
                    case 1: $(this).parents('.dropdown').find('.dropdown__form_placeholder').append(`${baby} Младенец, `);
                        break;
                    case 2:
                    case 3:
                    case 4: $(this).parents('.dropdown').find('.dropdown__form_placeholder').append(`${baby} Младенца, `); 
                        break;
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10: $(this).parents('.dropdown').find('.dropdown__form_placeholder').append(`${baby} Младенцев, `);
                        break;
                }
            }
            
            // скрыть форму
            $(this).parents('.dropdown').find('.dropdown__list').slideToggle();
        })
        // клик по кнопке "отчистить"
        $(this).find('.dropdown__complete-button__clear').click(function() {
            // обнуление значения полей
            $(this).parents('.dropdown').find('#dropdown-adult, #dropdown-child, #dropdown-baby').find('input').val(0);
            // запись в плейсхолдер начального значения
            $(this).parents('.dropdown').find('.dropdown__form_placeholder').text('Сколько гостей');
        })
    })

    $('.dropdown_bedroom').each(function() {
        // cобытие клика по форме для dropdown-bedroom
        $(this).find('.dropdown__form').click(function() {
            
            var bedroom_value = parseInt($(this).parent().find('#dropdown-adult').find('input').val());
            var bed_value = parseInt($(this).parent().find('#dropdown-child').find('input').val());
            var bath = parseInt($(this).parent().find('#dropdown-baby').find('input').val());

            // очистка плейсхолдера
            $(this).parents('.dropdown_bedroom').find('.dropdown__form_placeholder').text('');

            if (bedroom_value > 0) {
                switch (bedroom_value) {
                    case 1: $(this).parents('.dropdown_bedroom').find('.dropdown__form_placeholder').append(`${bedroom_value} Спальня, `);
                        break;
                    case 2:
                    case 3:
                    case 4: $(this).parents('.dropdown_bedroom').find('.dropdown__form_placeholder').append(`${bedroom_value} Спальни, `); 
                        break;
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10: $(this).parents('.dropdown_bedroom').find('.dropdown__form_placeholder').append(`${bedroom_value} Спален, `);
                        break;
                }           
            }

            if (bed_value > 0) {
                switch (bed_value) {
                    case 1: $(this).parents('.dropdown_bedroom').find('.dropdown__form_placeholder').append(`${bed_value} Кровать, `);
                        break;
                    case 2:
                    case 3:
                    case 4: $(this).parents('.dropdown_bedroom').find('.dropdown__form_placeholder').append(`${bed_value} Кровати, `); 
                        break;
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10: $(this).parents('.dropdown_bedroom').find('.dropdown__form_placeholder').append(`${bed_value} Кроватей, `);
                        break;
                }           
            }
            if (bath > 0) {
                switch (bath) {
                    case 1: $(this).parents('.dropdown_bedroom').find('.dropdown__form_placeholder').append(`${bath} Ванна, `);
                        break;
                    case 2:
                    case 3:
                    case 4: $(this).parents('.dropdown_bedroom').find('.dropdown__form_placeholder').append(`${bath} Ванны, `); 
                        break;
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10: $(this).parents('.dropdown_bedroom').find('.dropdown__form_placeholder').append(`${bath} Ванн `);
                        break;
                }           
            }

        })
    })

})