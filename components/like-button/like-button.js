$(function() {
    var like = 0;
    $("#like").click(function() {
        like += 1;
        $('#like__counter').text(like);
    })
})

$(function() {
    var like = 0;
    $("#like-active").click(function() {
        like += 1;
        $('#like-active__counter').text(like);
        $("#like-active span").text("favorite");
        $("#like-active").addClass("like-button__label_active")
    })
})