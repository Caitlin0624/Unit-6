$(".Part-two-yes").hide();
$(".Part-two-no").hide();
$(".Ending-yes").hide();
$(".lost").hide();
$(".straight-button").hide();

$(".yes-button").click(function() {
    $(".Part-two-yes").show();
    $(".start").hide();
});

$(".no-button").click(function() {
    $(".lost").show();
    $(".start").hide();
    $(".Part-two-yes").hide();
});

$(".secondImage").dblclick(function() {
    $(".Ending-yes").show();
    $(".Part-two-yes").hide();
});

$(".yes").dblclick(function() {
    $(".Ending-yes").show();
    $(".Part-two-yes").hide();
});
$(".right-button").click(function() {
    $(".Part-two-no").show();
    $(".straight-button").show();
    $(".start").hide();
});

$(".pic").click(function() {
    $(".lost").show();
    $(".start").hide();
    $(".Part-two-no").hide();
    $(".straight-button").hide();
});

$(".straight-button").hover(function() {
    $(".Ending-yes").show();
    $(".start").hide();
    $(".Part-two-no").hide();
    $(".straight-button").hide();
});

$(".life").click(function() {
    $(".new").text("You choose the wrong one!");
    $(".start").hide();
    $(".life").hide();
    $(".newlife").hide();
    $(".pink").hide();
    //$(".lost").hide();
});

$(".newlife").click(function() {
    $(".Ending-yes").show();
    $(".start").hide();
    $(".lost").hide();
});