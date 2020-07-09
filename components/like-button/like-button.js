$(function() {
    // объявление переменной лайков
    var like = 0;
    // клик по label 
    $("#like").click(function() {
        // увеличение числа лайков на один
        like += 1;
        // запись числа в ссылку
        $(this).find('#like__counter').text(like);
    })
})


$(function() {
    // объявление переменной лайков
    var like = 0;
    // клик по label 
    $("#like-active").click(function() {
        // увеличение числа лайков на один
        like += 1;
        // запись числа в ссылку
        $(this).find('#like-active__counter').text(like);
        // изменение спрайта
        $(this).find("span").text("favorite");
        // добавление модификатора
        $(this).addClass("like-button__label_active")
    })
})