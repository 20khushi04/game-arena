var userClickedPattern=[];
var gamePattern=[];
var buttonColours=["red", "blue", "green", "yellow"];
var level=0;

function nextSequence(){
   //reset the userClickedPattern to an empty array ready for the next level
   userClickedPattern = [];
   //start the game and change levels
    level++; 
    $("h1").text("Level " + level);
   var randomNumber= Math.floor(Math.random()*4);
/*step2*/
   var randomChosenColour=buttonColours[randomNumber];
   gamePattern.push(randomChosenColour);
/*step3*/
//Use jQuery to select the button with the same id as the randomChosenColour
//se jQuery to animate a flash to the button selected in step 1.
   var selectedButton = $("#" + randomChosenColour);
   $(selectedButton).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// use Javascript to play the sound for the button colour selected in step 1.
    playSound(randomChosenColour);
}

/*step4*/

//setect when any of the buttons are clicked and trigger a handler function that has variable called userChosenColour to store the id of the button that got clicked.

$(".btn").click(function(){
   var userChosenColour=$(this).attr("id");
   userClickedPattern.push(userChosenColour);
   //when button clicked sound is produced
   playSound(userChosenColour);
   animatePress(userChosenColour);
   checkAnswer(userClickedPattern.length-1);
});

function playSound(name){
   var audio = new Audio("sounds/"+name+".mp3" );
   audio.play();
}


function animatePress(currentColor) {
   $("#" + currentColor).addClass("pressed");
   setTimeout(function () {
     $("#" + currentColor).removeClass("pressed");
   }, 100);
 }

//detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
   var keyPressed= false;

$(document).keydown(function(){
     
     if(!keyPressed){
      $("#level-title").text("Level " + level);
      nextSequence();
      keyPressed= true;
     }
     
});


function checkAnswer(currentLevel)
{   
   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) 
   {
     console.log("success");   
     if (userClickedPattern.length === gamePattern.length)
      {
       // Call nextSequence() 
       setTimeout(function () {
         nextSequence();
       }, 1000);
      }
   } 
   else 
   {
      //add changes if wrong
     console.log("wrong");
     playSound("wrong");
     $("body").addClass("game-over");
     setTimeout(function () {
       $("body").removeClass("game-over");
     }, 200);
     $("#level-title").text("Game Over, Press Any Key to Restart");

     startOver();
   }
}

function startOver() {

   // reset the values.
   level = 0;
   gamePattern = [];
   keyPressed = false;
 }


