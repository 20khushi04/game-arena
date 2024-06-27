function randomnumber(){
var randomNumber1=Math.floor(Math.random()*6+1);
return randomNumber1    
}

var pickNum1=randomnumber();
var diceImage= "images/dice"+pickNum1+".png";
document.querySelector(".img1").src= diceImage;

var pickNum2=randomnumber();
var diceImage= "images/dice"+pickNum2+".png";
document.querySelector(".img2").src= diceImage;

//who won?
if (pickNum1>pickNum2){
    document.querySelector("h1").textContent="🏆Player 1 wins!"
}
else if(pickNum1<pickNum2){
    document.querySelector("h1").textContent="Player 2 wins! 🏆"
}
else{
    document.querySelector("h1").textContent="Draw!"
}
