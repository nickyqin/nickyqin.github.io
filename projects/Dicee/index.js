//Math.random() * 6, return the dice
//change src

var player1Dice = Math.floor(Math.random() * 6);
var player2Dice = Math.floor(Math.random() * 6);

//create a for loop that loops through the images file
//and adds each additional image to the array (LOOK BELOW)
var diceArr = ["images/dice1.png", "images/dice2.png", "images/dice3.png",
  "images/dice4.png", "images/dice5.png", "images/dice6.png",];

document.querySelector(".img1").setAttribute("src", diceArr[player1Dice]);
document.querySelector(".img2").setAttribute("src", diceArr[player2Dice]);

if (player1Dice > player2Dice) {
  document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (player2Dice > player1Dice) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}


//better alternate to selecting the file
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//
// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
//
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
