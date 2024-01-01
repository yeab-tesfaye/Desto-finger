
let score=JSON.parse( localStorage.getItem('score')) || {
    Wins:0,
    Losses : 0,
    Ties : 0
   };

   updateScoreElement();

function chooseGame(playerChoice){

    const computerChoice = pickComputerChoice(playerChoice);
    
    const chooseGame = `<div class="choices" style="margin-bottom: 40px;">You chose <p class="choice-info"> ${playerChoice} </p>. The Computer chose <p class="computer-choice-info"> ${computerChoice} </p>. 
            </div>
            <p class="begin" >Let's Play the Game!</p> 
          
            <p style="margin-bottom: 30px">Pick your move</p>

            <button onclick="           
            playGame('Null','${playerChoice}','${computerChoice}');    
            "class="move-button"><img src="emojis/Null-emoji.png" class="choice-emoji"></button>
                <button onclick="           
            playGame('Just','${playerChoice}','${computerChoice}');     
            " class="move-button"><img src="emojis/Just-emoji.png" class="choice-emoji"></button>
                <button onclick="           
            playGame('Finger','${playerChoice}','${computerChoice}');     
            " class="move-button"><img src="emojis/Finger-emoji.png"  class="choice-emoji"></button>
                <button onclick="           
            playGame('Can','${playerChoice}','${computerChoice}');     
            " class="move-button"><img src="emojis/Can-emoji.png"  class="choice-emoji"></button>
                <button onclick="           
            playGame('Count','${playerChoice}','${computerChoice}');     
            " class="move-button"><img src="emojis/Count-emoji.png"  class="count-emoji"></button>
                <button onclick="           
            playGame('Only','${playerChoice}','${computerChoice}');     
            " class="move-button"><img src="emojis/Only-emoji.png"  class="choice-emoji"></button>
             
                <div class="js-play-game" style="margin-top: 30px;"></div>
                <p class="js-score" style="margin-top: 30px;"></p>
                <div class="js-score-update" style="margin-top: 30px;"></div>
                `

     document.querySelector('.js-choose-game').innerHTML = chooseGame;
     
    return playerChoice;
  }

  function playGame(playerMove,playerChoice, computerChoice){
      const computerMove = pickComputerMove();

      let result='';

        if(playerMove==='Null'){
                if(computerMove==='Null'){
                    result = 'Tie'
                }
                else if(computerMove==='Just'){
                    if(playerChoice==='Just'){
                        result= 'You win!'
                    }
                    else if(computerChoice==='Just'){
                        result='You lose!'
                    }
                    else{result='Tie'}
                }
                else if(computerMove==='Finger'){
                    if(playerChoice==='Finger'){
                        result= 'You win!'
                    }
                    else if(computerChoice==='Finger'){
                        result='You lose!'
                    }
                    else{result='Tie'}
                }
                else if(computerMove==='Can'){
                    if(playerChoice==='Can'){
                        result= 'You win!'
                    }
                    else if(computerChoice==='Can'){
                        result='You lose!'
                    }
                    else{result='Tie'}
                }
                else if(computerMove==='Count'){
                    if(playerChoice==='Count'){
                        result= 'You win!'
                    }
                    else if(computerChoice==='Count'){
                        result='You lose!'
                    }
                    else{result='Tie'}
                }
                else if(computerMove==='Only'){
                    if(playerChoice==='Only'){
                        result= 'You win!'
                    }
                    else if(computerChoice==='Only'){
                        result='You lose!'
                    }
                    else{result='Tie'}
                }  
        }

        else if(playerMove==='Just'){
                if(computerMove==='Null'){
                        if(playerChoice==='Just'){
                            result= 'You win!'
                        }
                        else if(computerChoice==='Just'){
                            result='You lose!'
                        }
                        else{result='Tie'}
                }
                else if(computerMove==='Just'){
                        if(playerChoice==='Finger'){
                            result= 'You win!'
                        }
                        else if(computerChoice==='Finger'){
                            result='You lose!'
                        }
                        else{result='Tie'}
                }
                else if(computerMove==='Finger'){
                        if(playerChoice==='Can'){
                            result= 'You win!'
                        }
                        else if(computerChoice==='Can'){
                            result='You lose!'
                        }
                        else{result='Tie'}
                }
                else if(computerMove==='Can'){
                        if(playerChoice==='Count'){
                            result= 'You win!'
                        }
                        else if(computerChoice==='Count'){
                            result='You lose!'
                        }
                        else{result='Tie'}
                }
                else if(computerMove==='Count'){
                        if(playerChoice==='Only'){
                            result= 'You win!'
                        }
                        else if(computerChoice==='Only'){
                            result='You lose!'
                        }
                        else{result='Tie'}
                }
                else if(computerMove==='Only'){
                        if(playerChoice==='Just'){
                            result= 'You win!'
                        }
                        else if(computerChoice==='Just'){
                            result='You lose!'
                        }
                        else{result='Tie'}
                }
            }

        else if(playerMove==='Finger'){
                    if(computerMove==='Null'){
                        if(playerChoice==='Finger'){
                            result= 'You win!'
                        }
                        else if(computerChoice==='Finger'){
                            result='You lose!'
                        }
                        else{result='Tie'}
                }
                else if(computerMove==='Just'){
                        if(playerChoice==='Can'){
                            result= 'You win!'
                        }
                        else if(computerChoice==='Can'){
                            result='You lose!'
                        }
                        else{result='Tie'}
                }
                else if(computerMove==='Finger'){
                        if(playerChoice==='Count'){
                            result= 'You win!'
                        }
                        else if(computerChoice==='Count'){
                            result='You lose!'
                        }
                        else{result='Tie'}
                }
                else if(computerMove==='Can'){
                        if(playerChoice==='Only'){
                            result= 'You win!'
                        }
                        else if(computerChoice==='Only'){
                            result='You lose!'
                        }
                        else{result='Tie'}
                }
                else if(computerMove==='Count'){
                        if(playerChoice==='Just'){
                            result= 'You win!'
                        }
                        else if(computerChoice==='Just'){
                            result='You lose!'
                        }
                        else{result='Tie'}
                }
                else if(computerMove==='Only'){
                        if(playerChoice==='Finger'){
                            result= 'You win!'
                        }
                        else if(computerChoice==='Finger'){
                            result='You lose!'
                        }
                        else{result='Tie'}
                }

         }
         else if(playerMove==='Can'){
                    if(computerMove==='Null'){
                            if(playerChoice==='Can'){
                                result= 'You win!'
                            }
                            else if(computerChoice==='Can'){
                                result='You lose!'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Just'){
                            if(playerChoice==='Count'){
                                result= 'You win!'
                            }
                            else if(computerChoice==='Count'){
                                result='You lose!'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Finger'){
                            if(playerChoice==='Only'){
                                result= 'You win!'
                            }
                            else if(computerChoice==='Only'){
                                result='You lose!'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Can'){
                            if(playerChoice==='Just'){
                                result= 'You win!'
                            }
                            else if(computerChoice==='Just'){
                                result='You lose!'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Count'){
                            if(playerChoice==='Finger'){
                                result= 'You win!'
                            }
                            else if(computerChoice==='Finger'){
                                result='You lose!'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Only'){
                            if(playerChoice==='Can'){
                                result= 'You win!'
                            }
                            else if(computerChoice==='Can'){
                                result='You lose!'
                            }
                            else{result='Tie'}
                    }
         }

         else if(playerMove==='Count'){
                    if(computerMove==='Null'){
                            if(playerChoice==='Count'){
                                result= 'You win!'
                            }
                            else if(computerChoice==='Count'){
                                result='You lose!'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Just'){
                            if(playerChoice==='Only'){
                                result= 'You win!'
                            }
                            else if(computerChoice==='Only'){
                                result='You lose!'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Finger'){
                            if(playerChoice==='Just'){
                                result= 'You win!'
                            }
                            else if(computerChoice==='Just'){
                                result='You lose!'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Can'){
                            if(playerChoice==='Finger'){
                                result= 'You win!'
                            }
                            else if(computerChoice==='Finger'){
                                result='You lose!'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Count'){
                            if(playerChoice==='Can'){
                                result= 'You win!'
                            }
                            else if(computerChoice==='Can'){
                                result='You lose!'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Only'){
                            if(playerChoice==='Count'){
                                result= 'You win!'
                            }
                            else if(computerChoice==='Count'){
                                result='You lose!'
                            }
                            else{result='Tie'}
                    }
         }

         else if(playerMove==='Only'){
                    if(computerMove==='Null'){
                            if(playerChoice==='Only'){
                                result= 'You win!'
                            }
                            else if(computerChoice==='Only'){
                                result='You lose!'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Just'){
                            if(playerChoice==='Just'){
                                result= 'You win!'
                            }
                            else if(computerChoice==='Just'){
                                result='You lose!'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Finger'){
                            if(playerChoice==='Finger'){
                                result= 'You win!'
                            }
                            else if(computerChoice==='Finger'){
                                result='You lose!'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Can'){
                            if(playerChoice==='Can'){
                                result= 'You win!'
                            }
                            else if(computerChoice==='Can'){
                                result='You lose!'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Count'){
                            if(playerChoice==='Count'){
                                result= 'You win!'
                            }
                            else if(computerChoice==='Count'){
                                result='You lose!'
                            }
                            else{result='Tie'}
                    }
                    else if(computerMove==='Only'){
                            if(playerChoice==='Only'){
                                result= 'You win!'
                            }
                            else if(computerChoice==='Only'){
                                result='You lose!'
                            }
                            else{result='Tie'}
                    }
                }


                if(result === 'You win!'){
                    score.Wins++;                     
                 }
                 else if(result === 'You lose!'){
                    score.Losses++;
                 }
                 else if(result === 'Tie'){
                    score.Ties++;
                 }

                localStorage.setItem('score', JSON.stringify(score))
   
                updateScoreElement();


      const playGame =`<p class="result">${result}</p>
         You <img src="emojis/${playerMove}-emoji.png" class="move-icon">
        <img src="emojis/${computerMove}-emoji.png" class="move-icon"> Computer. `

      const scoreUpdate =`
                <button onclick="
                score.Wins = 0;
                score.Losses = 0;
                score.Ties = 0;
                localStorage.removeItem('score');
                updateScoreElement();
                    
            " class="reset-score-button">Reset Score</button>
            <div class="js-score-update" style="margin-top: 20px;"></div>
            `

       document.querySelector('.js-play-game').innerHTML = playGame;
       document.querySelector('.js-score-update').innerHTML = scoreUpdate;

      // document.querySelector('.js-result')= resultInfo;
      
    }

    function updateScoreElement(){
  
        document.querySelector('.js-score').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
        
     }
     

function pickComputerMove(){

  const randomNumber =  Math.random();

  let computerMove='';

              if(randomNumber>=0 && randomNumber<1/6){
              computerMove = 'Null';  
              }
              else if(randomNumber>=1/6 && randomNumber<2/6){
                  computerMove ='Just';  
              }
              else if(randomNumber>=2/6 && randomNumber<3/6){
                  computerMove ='Finger';  
              }
              else if(randomNumber>=3/6 && randomNumber<4/6){
                  computerMove ='Can';  
              }
              else if(randomNumber>=4/6 && randomNumber<5/6){
                  computerMove ='Count';  
              }
              else if(randomNumber>=5/6 && randomNumber<1){
                  computerMove ='Only';  
              }
          
          return computerMove;        
  } 
  
function pickComputerChoice(playerChoice){

    const randomNumber =  Math.random();

    let computerChoice='';

            if(randomNumber>=0 && randomNumber<1/5){
                computerChoice = 'Just'; 
                if(playerChoice==='Just'){
                    return 'Finger'||'Can'||'Count'||'Only';
                } 
            }
            else if(randomNumber>=1/5 && randomNumber<2/5){
                computerChoice ='Finger';
                if(playerChoice==='Finger'){
                    return 'Just'||'Can'||'Count'||'Only';
                }   
            }
            else if(randomNumber>=2/5 && randomNumber<3/5){
                computerChoice ='Can'; 
                if(playerChoice==='Can'){
                    return 'Finger'||'Just'||'Count'||'Only';
                }  
            }
            else if(randomNumber>=3/5 && randomNumber<4/5){
                computerChoice ='Count';
                if(playerChoice==='Count'){
                    return 'Finger'||'Can'||'Just'||'Only';
                }   
            }
            else if(randomNumber>=4/5 && randomNumber<1){
                computerChoice ='Only';  
                if(playerChoice==='Only'){
                    return 'Finger'||'Can'||'Count'||'Just';
                } 
            }
             
   return computerChoice;

}


