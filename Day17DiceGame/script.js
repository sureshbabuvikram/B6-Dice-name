const player1Score = document.querySelector('.player1-score');
const player2Score = document.querySelector('.player2-score');
const diceOutput1 = document.querySelector('.dice.output1');
const diceOutput2 = document.querySelector('.dice.output2');
const rollDice = document.querySelector('.play-button');
let check = true;
let gameOver = false;
let player1_score = 0;
let player2_score = 0;

rollDice.addEventListener('click', 
    function()
{
  const dice_value = Math.floor(Math.random()*6)+1;
  if(gameOver)
  {
    console.log("first condition");
    
    player1_score = 0;
    player2_score = 0;
    document.querySelector('.h1').innerText = 'Player Turn';  
    document.querySelector('.h1').style.color="blue"
    diceOutput1.innerText = '0';
    diceOutput2.innerText = '0';
    player1Score.innerText = '0';
    player2Score.innerText = '0';
    rollDice.innerText = 'Dice Roll';
    gameOver = false;
  }
  else
  {
    if(check == true)
    {
      console.log("sec cond");

      document.querySelector('.h1').innerText = 'Player 1 Turn';     
      diceOutput1.innerText = dice_value;
      player1_score += dice_value;
      player1Score.innerText = player1_score;
      if(player1_score >= 20)
      {
        gameOver = true;
        document.querySelector('.h1').innerText = 'Player 1 wins ';
        document.querySelector('.h1').style.color="red";
        rollDice.innerText = 'Reset ';
      }
      check = false;

    }
    else
    {
      console.log("else");
      
      document.querySelector('.h1').innerText  = 'Player 2 Turn';   

      diceOutput2.innerText = dice_value;
      player2_score += dice_value;
      player2Score.innerText = player2_score;
      if(player2_score >= 20)
      {
        gameOver = true;
        document.querySelector('.h1').innerText  = 'Player 2 wins ';
      document.querySelector('.h1').style.color="red";

        rollDice.innerText = 'Reset ';
      }
      check = true;

    }
  }

})