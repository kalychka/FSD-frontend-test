$(function() {
    $("#filter-dropdown").datepicker({
        range: 'period',
        firstDay: 1,
        defaultDate: "+1d",
        dateFormat: "d MM",
        monthNames : ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Нояб','Дек'],
        dayNamesMin: [ "ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ" ],
        minDate: 0,
        showAnim: "fold",
        duration: "fast",
        onSelect: function(dateText, inst, extensionRange) {
            $('#filter-dropdown').val(extensionRange.startDateText + ' - ' + extensionRange.endDateText);
          }
    })
});