
$(document).ready(function() { 

var wins = 0;
var losses = 0;
var totalScore = 0;
var red = 0;
var blue = 0;
var yell = 0;
var gree = 0;

initializeGame()

function initializeGame() {
    wins = 0;
    losses = 0;
    totalScore = 0;
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
        endGame()
        return
       
    } else if (wins === 3) {
        endGame()
        return
    }
      totalScore = Number(totalScore) + Number($(this).attr("value"));
      $("#total").text(totalScore)
      console.log(totalScore)
   
      if (totalScore === initalRandNum) {
        randNum();
        wins++;
        $("#win").text(wins); 
        totalScore = 0; 
        $("#total").text(totalScore); 
        RandNumTarget();
        
      
    
    } else if (totalScore > initalRandNum) {
        randNum();
        losses++;
        $("#loss").text(losses);
        totalScore = 0;
        $("#total").text(totalScore);
        RandNumTarget();
        
    
    } 
      
});
        
     function endGame() {
         if (losses === 5) {
         $("#game-over").text("YOU LOST!!!!");
         var button = $("#button").html("<button>");
         $("#button").append(button);
         } else if (wins === 3) {
         $("#game-over").text("YOU WON!!!!");
       }
    }

});





