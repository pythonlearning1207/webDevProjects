var drumsList = document.querySelectorAll(".drum");
//mouse click
for(var i = 0; i < drumsList.length; i++){
    drumsList[i].addEventListener("click", function(){
        var innerLetter = this.innerHTML;
        playSound(innerLetter);
        animation(innerLetter);
    })
}

//keyboard input
document.addEventListener("keypress", function(event){
    playSound(event.key);
    animation(event.key);
})

function animation(letter){
    document.querySelector("."+ letter).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+ letter).classList.remove("pressed");
    }, 200);
}

function playSound(letter){
    switch (letter) {
        case "w":
            var audio = new Audio();
            audio.src = "./sounds/tom-1.mp3"
            audio.play();
            break;
        case "a":
            var audio = new Audio();
            audio.src = "./sounds/tom-2.mp3"
            audio.play();
            break;
        case "s":
            var audio = new Audio();
            audio.src = "./sounds/tom-3.mp3"
            audio.play();
            break;
        case "d":
            var audio = new Audio();
            audio.src = "./sounds/tom-4.mp3"
            audio.play();
            break;
        case "j":
            var audio = new Audio();
            audio.src = "./sounds/crash.mp3"
            audio.play();
            break;
        case "k":
            var audio = new Audio();
            audio.src = "./sounds/kick-bass.mp3"
            audio.play();
            break;
        case "l":
            var audio = new Audio();
            audio.src = "./sounds/snare.mp3"
            audio.play();
            break;
        default:
            break;
    }
}