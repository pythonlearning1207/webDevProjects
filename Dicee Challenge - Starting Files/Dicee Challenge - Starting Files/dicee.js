function ramdomNumber() {
    var ramdomNumber1 = (Math.floor(Math.random()*6)+1);
    if (ramdomNumber1===1) {
        var href = "./images/dice1.png";
        document.querySelector(".img1").setAttribute("src", href);
    }else if(ramdomNumber1===2){
        var href = "./images/dice2.png";
        document.querySelector(".img1").setAttribute("src", href);
    }else if(ramdomNumber1===3){
        var href = "./images/dice3.png";
        document.querySelector(".img1").setAttribute("src", href);
    }else if(ramdomNumber1===4){
        var href = "./images/dice4.png";
        document.querySelector(".img1").setAttribute("src", href);
    }else if(ramdomNumber1===5){
        var href = "./images/dice5.png";
        document.querySelector(".img1").setAttribute("src", href);
    }else if(ramdomNumber1===6){
        var href = "./images/dice6.png";
        document.querySelector(".img1").setAttribute("src", href);
    }
    var ramdomNumber2 = (Math.floor(Math.random()*6)+1);
    if (ramdomNumber2===1) {
        var href = "./images/dice1.png";
        document.querySelector(".img2").setAttribute("src", href);
    }else if(ramdomNumber2===2){
        var href = "./images/dice2.png";
        document.querySelector(".img2").setAttribute("src", href);
    }else if(ramdomNumber2===3){
        var href = "./images/dice3.png";
        document.querySelector(".img2").setAttribute("src", href);
    }else if(ramdomNumber2===4){
        var href = "./images/dice4.png";
        document.querySelector(".img2").setAttribute("src", href);
    }else if(ramdomNumber2===5){
        var href = "./images/dice5.png";
        document.querySelector(".img2").setAttribute("src", href);
    }else if(ramdomNumber2===6){
        var href = "./images/dice6.png";
        document.querySelector(".img2").setAttribute("src", href);
    }

    if (ramdomNumber1 > ramdomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } else if (ramdomNumber1 === ramdomNumber2){
        document.querySelector("h1").innerHTML = "TIE!";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
} 

ramdomNumber();
