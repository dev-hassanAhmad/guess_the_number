'use strict';
let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;

let number=document.querySelector(".number");

let scoreLabel=document.querySelector(".score");
scoreLabel.textContent=score;
let highScoreLabel=document.querySelector(".highscore");
highScoreLabel.textContent=highScore;


const displayMessage=function(message){
    document.querySelector(".message").textContent=message;

}


document.querySelector(".check").addEventListener("click",function(){
    const guess=Number(document.querySelector(".guess").value);
    

    if(!guess){
        displayMessage("No Number")
    }
    else if(guess===secretNumber){
        displayMessage("Correct Number");
        document.querySelector('body').style.backgroundColor="#60b347";
        
        if(score>highScore){
            highScore=score;
            document.querySelector(".highscore").textContent=highScore;
            
        }
    }
    else if(guess!=secretNumber){
        document.querySelector('body').style.backgroundColor="red";
        if(score>1){
            console.log(score)
            score=score-1;
            if(guess>secretNumber){
            displayMessage("Too High")
            
            }
            if(guess<secretNumber){
                displayMessage("Too Low")
            }
            document.querySelector(".score").textContent=score;

        }
        else{
            document.querySelector(".message").textContent="You Lost"
        }
        
        
    }



})

const again=document.querySelector(".again");
again.addEventListener("click",function(){
    secretNumber=Math.trunc(Math.random()*20)+1;

    
    score=20;
    scoreLabel.textContent=score;
    displayMessage("Start Guessing");
    document.querySelector(".guess").value="";

})