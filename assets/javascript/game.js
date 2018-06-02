    
    
    
$(document).ready(function() { 

    var wins = 0;
    var losses = 0;
    var totalScore = 0;
    var red = 0;
    var blue = 0;
    var yell = 0;
    var gree = 0;
    var initalRandNum = 0;
    var crystals = [];
    
    function restartGame() {
       wins = 0;
       losses = 0;
       totalScore = 0;
       $("#total").text(totalScore)
       $("#win").text(wins); 
       $("#loss").text(losses); 
       $("#game-over").text("")
       console.log('game restarts')
       initializeGame()
    
    }
    
    initializeGame()
    
    function initializeGame() {
       // red = randNum(); 
       // blue = randNum();
       // yell = randNum();
       // gree = randNum();
        randNum();
        RandNumTarget();
        $("#red-button").attr("value", crystals[0]); 
        $("#blue-button").attr("value", crystals[1]);
        $("#yellow-button").attr("value", crystals[2]); 
        $("#green-button").attr("value", crystals[3]);    
    }
    
    function RandNumTarget() {
         initalRandNum = Math.floor(Math.random() * (120 - 19 + 1) + 19);
         console.log(initalRandNum);
         $("#random-num").text(initalRandNum)
         return initalRandNum

    }
    
    function randNum() {
        for (var i = 0; i < 4; i++) {
           var randBtnNum = Math.floor(Math.random() * (12 - 1 + 1) + 1);
           crystals[i] = randBtnNum
         //  crystal.push(randBtnNum) This line does the same thing as 55
           console.log(crystals)
        }
    }
    
    $(".btn").on("click", function() {
        if (losses === 5) {
            $("#game-over").text("YOU LOST!!!!");
            endGame();

            } else if (wins === 3) {
            $("#game-over").text("YOU WON!!!!");
            endGame();
        
        } else {
            totalScore = Number(totalScore) + Number($(this).attr("value"));
          $("#total").text(totalScore);
          console.log(totalScore);
        }
       
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
              if (losses === 5 || wins === 3) {
                  let button = $("<button>").text('Restart the Game');
                  $("#button").html(button);
                  button.on('click', function() {
                      restartGame();
                     $("#button").html("")
                    });    
              }
    
         }
    });