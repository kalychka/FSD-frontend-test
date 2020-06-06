$(function() {
    var like = 0;
    $(".like-button__label").click(function() {
        like += 1;
        $(".btn-counter").text(like);
    })
})