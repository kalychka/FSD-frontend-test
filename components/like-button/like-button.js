$(function() {
    var like = 0;
    $("#like-one").click(function() {
        like += 1;
        $('#like-one__counter').text(like);
    })
})

$(function() {
    var like = 0;
    $("#like-two").click(function() {
        like += 1;
        $('#like-two__counter').text(like);
        $("#like-two span").text("favorite");
        $("#like-two").addClass("like-button__label_active")
    })
})