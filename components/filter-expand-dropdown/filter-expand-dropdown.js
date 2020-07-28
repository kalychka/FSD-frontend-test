$(function() {
    $('.filter-expand-dropdown').datepicker({
        inline: true,
        minDate: new Date(),
        range: true,
        multipleDatesSeparator: ' - ',
        classes: 'expand-dropdown',
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
});