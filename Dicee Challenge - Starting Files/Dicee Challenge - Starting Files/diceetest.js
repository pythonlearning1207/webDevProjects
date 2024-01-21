function ramdomNumber() {
    var ramdomNumber1 = (Math.floor(Math.random()*6)+1);
    var img1Src = "./images/dice" + ramdomNumber1 + ".png";
    var ramdomNumber2 = (Math.floor(Math.random()*6)+1);
    var img2Src = "./images/dice" + ramdomNumber2 + ".png";
    document.querySelector(".img1").setAttribute("src", img1Src);
    document.querySelector(".img2").setAttribute("src", img2Src);
    if (ramdomNumber1 === ramdomNumber2) {
        document.querySelector("h1").innerHTML = "Tie!";
    } else if (ramdomNumber1 > ramdomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
}

ramdomNumber()