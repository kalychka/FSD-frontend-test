$(function() {
    $('#datepicker__start').datepicker({
        range: true,
        multipleDatesSeparator: '-',
        classes: 'date_dropdown',
        clearButton: true,
        
        prevHtml: 'arrow_back',
        nextHtml: 'arrow_forward',
        todayButton: true,
        navTitles: {
            days: '<h2>MM yyyy</h2>'
        },
        onSelect: function (fd, d, picker) { 
            $("#datepicker__start").val(fd.split("-")[0]);
            $("#datepicker__end").val(fd.split("-")[1]);
          }
    })
})


