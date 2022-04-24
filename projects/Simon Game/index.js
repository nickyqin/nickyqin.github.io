// 04/06/2022
//2 bugs:
//#1: 3 fast clicks will lead to Level 0 instead of Game Over page
//#2: next level's clicks start counting before the animation for the next level starts

//overall pattern
var gamePattern = [];
var level = 0;

var userClickedPattern = [];
//current index comparing user click to game pattern
var currentIdx = 0;

//if game is new or reset, listen for any key to start
$(document).keydown(function() {
  if (gamePattern.length === 0) {
    nextSequence();
    $("#level-title").text("Level " + level);
  }
});

//add next color in the game pattern
function nextSequence() {
  //choosing next color in the pattern
  var arrayIdx = Math.floor(Math.random() * 4);
  var arrayColors = ["green", "red", "yellow", "blue"];
  var nextColor = arrayColors[arrayIdx];
  gamePattern.push(nextColor);

  //animation and sound a little delayed after each press
  setTimeout(function() {
    $("." + nextColor).fadeOut(100).fadeIn(100);
    var sound = new Audio("sounds/" + nextColor + ".mp3");
    sound.play();
  }, 1000);

  //increment Level
  level++;
}

//check if what is clicked = what is supposed to be clicked
function isCorrectClick() {
  var isCorrectClick = userClickedPattern[currentIdx] === gamePattern[currentIdx];

  if (isCorrectClick) {
      correctClick();
  } else {
      wrongClick();
  }
}

//what happens if user clicks right color
function correctClick() {
  //keep checking through userClickedPattern
  currentIdx++;

  //if reached end of level
  if (userClickedPattern.length === gamePattern.length) {
    nextSequence();
    currentIdx = 0;
    userClickedPattern = [];

    //change level title
    setTimeout(function() {
      $("#level-title").text("Level " + level);
    }, 1000);
  }
}

//what happens if wrong color clicked
function wrongClick() {
  //sound
  var wrongSound = new Audio("sounds/wrong.mp3");
  wrongSound.play();

  //animation
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 100);

  //reset
  gamePattern = [];
  level = 0;
  currentIdx = 0;
  userClickedPattern = [];
  $("#level-title").text("Game Over, Press Any Key to Restart");
}

//user clicks
$(".btn").click(function(evt) {

    //to only accept clicks after game is at level 1
    if (gamePattern.length != 0) {

        var colorClicked = evt.target.id;

        //sounds
        var sound = new Audio("sounds/" + colorClicked + ".mp3");

        //animation
        $("#" + colorClicked).addClass("pressed");
        sound.play();
        setTimeout(function () {
          $("#" + colorClicked).removeClass("pressed");
        }, 100);

        userClickedPattern.push(colorClicked);

        //if wrong button
        isCorrectClick();
    }

});
