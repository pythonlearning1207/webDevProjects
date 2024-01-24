//step1
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var userChosenColor;
var randomNumber;
var randomChosenColor;
var gameStart = false;
var level = 0;

//start the game
$(document).keypress(function(){
    if(gameStart === false){
        gameStart = true;
        setTimeout(function(){
            $("h1").text("Level 0");
            nextSequence();
        },500);
    }
})
//check which button is pressed
$(".btn").click(function(){
    userChosenColor = ($(this).attr("id"));
    flash(userChosenColor);
    playSound(userChosenColor);
    userClickedPattern.push(userChosenColor);
    //check answer
    checkAnswer(userClickedPattern.length - 1);
});
//checkAnswer()
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (gamePattern.length === userClickedPattern.length) {
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else {
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        restart();
    }
}
//nextSequence();
function nextSequence() {
    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level);
    randomNumber = Math.floor(Math.random()*4) ;
    randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    flash(randomChosenColor);
    playSound(randomChosenColor);
}
//restart() function
function restart() {
    gamePattern = [];
    userClickedPattern = [];
    gameStart = false;
    level = 0;
}
//flash function
function flash(randomChosenColor) {
    $("#" + randomChosenColor).addClass("flash");
    setTimeout(function(){
        $("#" + randomChosenColor).removeClass("flash");
    }, 100)
}
//playSound function
function playSound(randomChosenColor) {
    var audioLocation = "./sounds/" + randomChosenColor + ".mp3";
    var audio = new Audio(audioLocation);
    audio.play();
}


