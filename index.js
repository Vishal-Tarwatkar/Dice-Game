var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var h1 = document.querySelector("h1");

var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImgUrl1 = "./images/dice" + randomNumber1 + ".png";
var randomImgUrl2 = "./images/dice" + randomNumber2 + ".png";

img1.setAttribute("src", randomImgUrl1);
img2.setAttribute("src", randomImgUrl2);

if (randomNumber1 > randomNumber2) {
   h1.textContent = "Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
   h1.textContent = "Player 2 Wins";
} else if (randomNumber1 == randomNumber2) {
   h1.textContent = "It's a Draw";
}
