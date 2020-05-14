$( function() {
    $( "#datepicker_default" ).datepicker({
        defaultDate: "+1d",
        buttonImageOnly: true,
        showOn: "both",
        firstDay: 1,
        dateFormat: "dd.mm.yy",
        minDate: 0,
        dayNamesMin: [ "ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ" ],
        duration: "fast",
        gotoCurrent: true,
        showAnim: "fold",
    });
  } );