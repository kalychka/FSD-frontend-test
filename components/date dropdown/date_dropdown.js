$(function() {
    $('.datepicker-from').datepicker({
        range: true,
        multipleDatesSeparator: '-',
        classes: 'date-dropdown',
        clearButton: true,
        prevHtml: 'arrow_back',
        nextHtml: 'arrow_forward',
        todayButton: true,
        navTitles: {
            days: '<h2>MM yyyy</h2>'
        },
        language: {
            today: 'Применить'
        },
        onRenderCell: function(date, cellType) {
            if (cellType == 'day') {
                return {
                    html: `${date.getDate()}<div class="bg-selected"><span></span></div>`
                }
            }
        },
        onSelect: function (fd, d, picker) { 
            $(".datepicker-from").val(fd.split("-")[0]);
            $(".datepicker-to").val(fd.split("-")[1]);  
        }
    })
    $(".datepicker").find(".datepicker--button").click(function() {
        if (this.dataset.action === 'today') {
            $(this).parents('.date-dropdown').removeClass('active');
        }
    })
    $('.datepicker-to').click(function() {
        $(this).parents('.date-dropdown__container').find('.datepicker-from').data('datepicker').show();
    })
})


