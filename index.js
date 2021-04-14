"use strict";

var randomNumber1 = Math.floor( (Math.random() * 6) + 1) ; //Zahl zwischen 1 und 6
var randomNumber2 = Math.floor( (Math.random() * 6) + 1) ; //Zahl zwischen 1 und 6



function player1 (randomNumber1) {
    
    if(randomNumber1 == 1){
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
    }
    else if (randomNumber1 == 2){
        document.querySelector(".img1").setAttribute("src","images/dice2.png");
    }
    else if (randomNumber1 == 3){
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
    }
    else if (randomNumber1 == 4){
        document.querySelector(".img1").setAttribute("src","images/dice4.png");
    }
    else if (randomNumber1 == 5){
        document.querySelector(".img1").setAttribute("src","images/dice5.png");
    }
    else if (randomNumber1 == 6){
        document.querySelector(".img1").setAttribute("src","images/dice6.png");
    }
    
}

function player2 (randomNumber2) {
    
    if(randomNumber2 == 1){
        document.querySelector(".img2").setAttribute("src","images/dice1.png");
    }
    else if (randomNumber2 == 2){
        document.querySelector(".img2").setAttribute("src","images/dice2.png");
    }
    else if (randomNumber2 == 3){
        document.querySelector(".img2").setAttribute("src","images/dice3.png");
    }
    else if (randomNumber2 == 4){
        document.querySelector(".img2").setAttribute("src","images/dice4.png");
    }
    else if (randomNumber2 == 5){
        document.querySelector(".img2").setAttribute("src","images/dice5.png");
    }
    else if (randomNumber2 == 6){
        document.querySelector(".img2").setAttribute("src","images/dice6.png");
    }

}

function vergleich() {
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
        
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    }
    else if (randomNumber1 == randomNumber2){
        document.querySelector("h1").innerHTML = "Draw!";
    }
    
}
document.querySelector(".btn1").addEventListener("click", player1);
document.querySelector(".btn2").addEventListener("click", player2);

vergleich();

