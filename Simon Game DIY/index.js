var colorBox = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClicked = [];
var level = 0;
var gameStatus = false;
//flash effect function
function flash(selectedColor) {
    $("#" + selectedColor).addClass("pressed");
    setTimeout(function() {
        $("#" + selectedColor).removeClass("pressed");
    }, 200);
}
//makeSound function
function makeSound(selectedColor) {
    var audioLocation = "./sounds/" + selectedColor + ".mp3";
    var audio = new Audio(audioLocation);
    audio.play();
}
//start the game
$("body").keypress(function() {
    if (!gameStatus) {
        gameStatus = true;
        $("h1").text("Level " + level);
        nextLevel();
    }
})

//nextLevel()
function nextLevel() {
    userClicked = [];
    level++;
    $("h1").text("Level " + level);
    //choose random number 0-3
    var randomNumber = Math.floor(Math.random()*4);
    //choose random color
    var randomColor = colorBox[randomNumber];
    gamePattern.push(randomColor);
    flash(randomColor);
    makeSound(randomColor);
}
//waiting for user select
$(".btn").click(function() {
    var clickedColor = this.id;
    console.log(clickedColor);
    userClicked.push(clickedColor);
    flash(clickedColor);
    makeSound(clickedColor);
    //check answer
    checkAnswer(userClicked.length - 1);
})

//checkAnswer()
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClicked[currentLevel]) {
        if (gamePattern.length === userClicked.length) {
            setTimeout(function() {
                nextLevel();
            },1000);
            
        }
    } else {
        gameOver();
    }
}

//gameOver()
function gameOver() {
    var audioLocation = "sounds/wrong.mp3";
    var audio = new Audio(audioLocation);
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    }, 200)
    $("h1").text("Game Over. 请投币!");
    gamePattern = [];
    userClicked = [];
    level = 0;
    gameStatus = false;
}