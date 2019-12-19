/// <reference path="jquery-1.6.2.js" />
/// <reference path="jquery-ui-1.8.16.custom.js" />

$(function () {
    
    $("#target").css("position","relative")
        .css("position", "relative")
        .click(function() {
            $(this).toggleClass("leftTarget","slow");
        /*$(this).animate({
            "width": "+=20",
            "height": "+=20",
            "background-color": "red"
            left: 300
        }, 1000, 'easeInOutElastic');*/
    
        /*$(this).effect("explode", { pieces: 16 }, function() {
            alert("Done!")
        });*/

    });

});