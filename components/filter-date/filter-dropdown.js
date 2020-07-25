$(function() {
    $('#filter-dropdown').datepicker({
        minDate: new Date(),
        range: true,
        multipleDatesSeparator: ' - ',
        classes: 'filter-dropdown',
        clearButton: true,
        prevHtml: 'arrow_back',
        nextHtml: 'arrow_forward',
        todayButton: true,
        navTitles: {
            days: '<h2>MM yyyy</h2>'
        },
        language: {
            today: 'Применить',
            dateFormat: 'dd M'
        },
        onRenderCell: function(date, cellType) {
            if (cellType == 'day') {
                return {
                    html: `${date.getDate()}<div class="bg-selected"><span></span></div>`
                }
            }
        }
    })
    $(".filter-dropdown").find(".datepicker--button").click(function() {
        if (this.dataset.action === 'today') {
            $(this).parents('.filter-dropdown').removeClass('active');
        }
    })
    $('.datepicker-to').click(function() {
        $(this).parents('.date-dropdown__container').find('.datepicker-from').data('datepicker').show();
    })
});