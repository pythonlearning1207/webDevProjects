console.log($("h1").css("color"));
$("a").attr("href", "https://www.yahoo.com/");


$("h1").html("<em>Hello!</em>");

$("h1").addClass("big")
/*$("body").keypress(function(event){
    $("h1").html(event.key);
})*/

$("h1").mouseover(function(){
    $("h1").css("color", "purple");
})

$("h1").mouseout(function(){
    $("h1").css("color", "black");
})

$("h1").before("<button>New</button>");

$("button").click(function(){
    $("h1").animate({margin: 20%});
})