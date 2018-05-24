


$(".bell").click(function(){
    var width= $(window).width();
    if(width>570) {
        $(".notification").toggle();
        $(".messages").hide();

    }


})

$(".envelope").click(function(){
    var width= $(window).width();
    if(width>570) {

        $(".messages").toggle();
        $(".notification").hide();
    }
})


$("main").click(function(){
    $(".messages").hide();
    $(".notification").hide();
})

$('.carousel').carousel()
