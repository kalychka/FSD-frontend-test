$(function() {
    // клик по label 
    $(".like-button").click(function() {
        // объявление переменной лайков
        var like = parseInt($(this).find(".like-counter").text());
        
        // увеличение числа лайков на один
        like += 1;
        // запись числа в ссылку
        $(this).find('.like-counter').text(like);
        // изменение спрайта
        $(this).find("span").text("favorite");
        // добавление модификатора
        $(this).addClass("like-button_active")
    })
})