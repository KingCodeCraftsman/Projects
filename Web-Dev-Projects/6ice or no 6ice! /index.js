var player1Score = 0;
var player2Score = 0;

function rollDice() {
var randomNumber1 = Math.floor(Math.random() * 6) + 1; 

var randomDiceImage = "dice" + randomNumber1 + ".png"; 

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);



if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " Play 1 W!!!";
  playerScore1++;
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 W!!!";
  PlayerScore2++;
}
else {
  document.querySelector("h1").innerHTML = "Draw!!!";
}

//Dice rolling affets below 
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

setTimeout(function () {
  image1.setAttribute("src" , randomImageSource);
  image2.setAttribute("src" , randomImageSource2);
}, 300);
//end 

//players start
var player1Name = document.getElementById("player1").value || "Player 1";
var player2Name = document.getElementById("player2").value || "Player 2";

document.getElementById("player1Name").innerHTML = player1Name;
document.getElementById("player2Name").innerHTML = player2Name;
//end

}
