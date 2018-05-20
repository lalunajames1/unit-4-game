$(document).ready(function() {

var wins = 0;
var losses = 0;
var totalScore = 0;
var randNum = 0;

var red = 0;
var blue = 0;
var yellow = 0;
var green = 0;

function initializeGame() {
    wins = 0;
    losses = 0;
    totalScore = 0;
    red = 0;
    blue = 0;
    yellow = 0;
    green = 0;
}

function RandNumTarget(){
     let randNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
     console.log(randNum);
     $("#random-num").text(randNum)
}

RandNumTarget()


function redNumBtn() {
     let randRedNum = Math.floor(Math.random() * (12 - 1 + 1) + 1);
     red = randRedNum;
     console.log(red);
}

redNumBtn()

$("#red-button").on("click", function() {
     $("#red-button").attr("value", red); 

});


function blueNumBtn() {
     let randBlueNum = Math.floor(Math.random() * (12 - 1 + 1) + 1);
     blue = randBlueNum;
     console.log(blue);
     }
    
blueNumBtn()
    
$("#blue-button").on("click", function() {
     $("#blue-button").attr("value", blue); 
    
     });


function yellNumBtn() {
      let randYellNum = Math.floor(Math.random() * (12 - 1 + 1) + 1);
      yell = randYellNum;
      console.log(yell);
        }
        
yellNumBtn()
        
$("#yellow-button").on("click", function() {
      $("#yellow-button").attr("value", yell); 
        
     });

function greeNumBtn() {
      let randGreeNum = Math.floor(Math.random() * (12 - 1 + 1) + 1);
      gree = randGreeNum;
      console.log(gree);
        }
        
greeNumBtn()
        
$("#green-button").on("click", function() {
      $("#green-button").attr("value", gree);

      $("#green-button").ready(function(){

      totalScore = Number(totalScore) + Number($(this).val());
      $("#total").text(totalScore)
      console.log(totalScore)
      });
     });


});

 


/* 

if (totalScore === randNum) {
    wins++;
    RandNumTarget();
    redNumBtn();
    blueNumBtn();
    yellNumBtn();
    greeNumBtn();

} else if (totalScore > randNum) {
    loss++;
    RandNumTarget();
    redNumBtn();
    blueNumBtn();
    yellNumBtn();
    greeNumBtn();
}


*/