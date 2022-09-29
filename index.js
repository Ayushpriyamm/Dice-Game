//changing image for dice 2
var randomNumber1=Math.floor(1+Math.random()*6);

var randomDiceImage1="images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);;

//changing image for dice 2
var randomNumber2=Math.floor(1+Math.random()*6);

var randomDiceImage2="images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

//displaying winner by changing h1
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩 Player1 wins"
}
else if (randomNumber2>randomNumber1) {
   document.querySelector("h1").innerHTML="Player2 wins 🚩"
}
else{
  document.querySelector("h1").innerHTML="Draw !";
}
