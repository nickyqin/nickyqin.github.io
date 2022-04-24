

//detect when drums are clicked on website
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

//detect keyboard press
document.addEventListener("keydown", function(evt) {
  var letter = evt.key;
  handleEvent(letter);
  randomColor(letter);
  buttonAnimation(letter);
})

//function called when drum is directly clicked on website
function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  handleEvent(buttonInnerHTML);
  randomColor(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

//to make sound
function handleEvent(event) {
  switch (event) {

    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default: console.log(event);
  }
}

//to change to random color
function randomColor(event) {
  var colorArray = ["red", "white", "blue", "black", "orange"];
  var randomIdx = Math.floor(Math.random() * colorArray.length);

  //document.querySelector("." + event).style.color = colorArray[randomIdx];
  //error for letters pressed that do not have a class, but everything still works :D

  //removes error
  for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
      if (event == document.querySelectorAll(".drum")[i].innerHTML) {
        document.querySelectorAll(".drum")[i].style.color = colorArray[randomIdx];
        break;
      }
  }
}

//add animation when clicked for 1 second
function buttonAnimation(event) {

  var buttonPressed = document.querySelector("." + event);
  //buttonPressed.setAttribute("class", event + " drum pressed");
  buttonPressed.classList.add("pressed");

  //remove pressed class after 1 second
  setTimeout(function() {
    buttonPressed.classList.remove("pressed");
  }, 100);
}
