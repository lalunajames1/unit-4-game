
$(document).ready(function() { 

var wins = 0;
var losses = 0;
var totalScore = 0;
var red = 0;
var blue = 0;
var yell = 0;
var gree = 0;

function restartGame() {
   wins = 0;
   losses = 0;
   totalScore = 0;
}

initializeGame()

function initializeGame() {
    red = randNum();
    blue = randNum();
    yell = randNum();
    gree = randNum();
    RandNumTarget();
    $("#red-button").attr("value", red); 
    $("#blue-button").attr("value", blue);
    $("#yellow-button").attr("value", yell); 
    $("#green-button").attr("value", gree);
    
}

function RandNumTarget() {
     initalRandNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
     console.log(initalRandNum);
     $("#random-num").text(initalRandNum)
}

function randNum() {
    let randRedNum = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    console.log(randRedNum);
    return randRedNum;
   
}
  
$(".btn").on("click", function() {

    if (losses === 5){
        $("#game-over").text("YOU LOST!!!!");
        endGame()
        return
       
    } else if (wins === 3) {
        $("#game-over").text("YOU WON!!!!");
        return
    }
    
      totalScore = Number(totalScore) + Number($(this).attr("value"));
      $("#total").text(totalScore)
      console.log(totalScore)
   
      if (totalScore === initalRandNum) {
          initializeGame() 
          wins++;
          $("#win").text(wins); 
          totalScore = 0; 
          $("#total").text(totalScore); 
        
        
    
      } else if (totalScore > initalRandNum) {
          initializeGame() 
          losses++;
          $("#loss").text(losses);
          totalScore = 0;
          $("#total").text(totalScore);
    } 
      
});
      
     function endGame() {
    

     }
});





