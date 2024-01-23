//step1
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4) ;
    return randomNumber;
}

var randomChosenColor = buttonColors[nextSequence()];

gamePattern.push(randomChosenColor);
flash(randomChosenColor);
playSound(randomChosenColor);

//flash function
function flash(randomChosenColor) {
    $("#randomChosenColor").addClass("flash");
    setTimeout(function(){
        $("#red").removeClass("flash");
    }, 100)
}

//playSound function
function playSound(randomChosenColor) {
    var audioLocation = "./sounds/" + randomChosenColor + ".mp3";
    var audio = new Audio(audioLocation);
    audio.play();
}

//check which button is pressed
