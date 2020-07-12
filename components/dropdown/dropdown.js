$( function() {
    // скрытие формы при загрузке страницы
    $('.dropdown__list, .dropdown__complete-button__clear').ready().hide();
    // обнуление значений полей при загрузке страницы
    $('.dropdown').find('input').ready().val(0);

    // событие клика по полю ввода
    $('.dropdown, .dropdown_bedroom').find('.dropdown__form').click(function() {
        // открытие-закрытие формы
        $(this).parent().find('.dropdown__list').slideToggle();

    });  
    // событие клика по кнопке "плюс"
    $('.dropdown, .dropdown_bedroom').find('#dropdown-adult, #dropdown-child, #dropdown-baby').find('.plus').parent().click(function() {
        // удаление disable из кнопки "минус"
        $(this).parents('#dropdown-adult, #dropdown-child, #dropdown-baby').find('.minus').parent().removeClass('dropdown-button_disable');
        // получение значения поля 
        var human_value = $(this).parents('#dropdown-adult, #dropdown-child, #dropdown-baby').find('input').val();
        // увеличение значения на один
        $(this).parents('#dropdown-adult, #dropdown-child, #dropdown-baby').find('input').val(parseInt(human_value) + 1);
        
    });
 
    // событие клика по кнопке "минус"
    $('.dropdown, .dropdown_bedroom').find('#dropdown-adult, #dropdown-child, #dropdown-baby').find('.minus').parent().click(function() {
        // получение значения поля
        var human_value = $(this).parents('#dropdown-adult, #dropdown-child, #dropdown-baby').find('input').val();
        // проверка на положительное значение
        if (parseInt(human_value) > 0 ) {
            // уменьшение значения на один
            $(this).parents('#dropdown-adult, #dropdown-child, #dropdown-baby').find('input').val(parseInt(human_value) - 1);
        };
    })
    // событие клика по кнопке "применить"
    $('.dropdown').find('.dropdown__complete-button__done').click(function() {
        // счет общего значения полей
        var score = parseInt( $(this).parents('.dropdown').find('#dropdown-adult').find('input').val() ) + 
                    parseInt( $(this).parents('.dropdown').find('#dropdown-child').find('input').val() ) +
                    parseInt( $(this).parents('.dropdown').find('#dropdown-baby').find('input').val() );
        // если есть хоть один гость, то показать кнопку "отчистить" и изменить css контента
        if (score > 0) {
            $(this).parent().find('.dropdown__complete-button__clear').show();
            $(this).parent().css({'justify-content' : 'space-between'});
        };
        // вывести значение в плейсхолдер
        $(this).parents('.dropdown').find('.dropdown__form_placeholder').text(`${score} Гостя`);
        // скрыть форму
        $(this).parents('.dropdown').find('.dropdown__list').slideToggle();
    })
    // клик по кнопке "отчистить"
    $('.dropdown').find('.dropdown__complete-button__clear').click(function() {
        // обнуление значения полей
        $(this).parents('.dropdown').find('#dropdown-adult, #dropdown-child, #dropdown-baby').find('input').val(0);
        // запись в плейсхолдер начального значения
        $(this).parents('.dropdown').find('.dropdown__form_placeholder').text('Сколько гостей');
    })

    // cобытие клика по форме для dropdown-bedroom
    $('.dropdown_bedroom').find('.dropdown__form').click(function() {
        console.log('check')
        var bedroom_value = $(this).parent().find('#dropdown-adult').find('input').val();
        var bed_value = $(this).parent().find('#dropdown-child').find('input').val();
        /*
        if ( (parseInt(bedroom_value) || parseInt(bed_value)) === 0 ) {
            bedroom_value = bed_value = 0;
        }
        */
        
        $(this).parents('.dropdown_bedroom').find('.dropdown__form_placeholder').text(`${bedroom_value} Спальни, ${bed_value} Кровати`);
    })

})