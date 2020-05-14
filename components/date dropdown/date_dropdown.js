$( function() {
    $( "#datepicker" ).datepicker({
        defaultDate: "+1d",
        buttonImageOnly: true,
        showOn: "both",
        firstDay: 1,
        dateFormat: "dd.mm.yy",
        minDate: 0,
        monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        dayNamesMin: [ "ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ" ],
        duration: "fast",
        gotoCurrent: true,
        showAnim: "fold",
    });
  } );