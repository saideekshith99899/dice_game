'use strict';


const player0Ele = document.querySelector(".player--0");
const palyer1Ele = document.querySelector(".player--1");
const score0Ele = document.querySelector('#score--0');
const score1Ele = document.querySelector("#score--1");
const diceEle = document.querySelector(".dice");
const rollEle = document.querySelector(".btn--roll");
const newGameEle = document.querySelector(".btn--new");
const holdEle = document.querySelector(".btn--hold");

const current0Ele = document.querySelector("#current--0");
const current1Ele = document.querySelector("#current--1");



score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceEle.classList.add('hidden');



const scores=[0,0];
let currentScore = 0;

let activePlayer = 0;


const switchPlayer = function(){

    document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;

        player0Ele.classList.toggle('player--active');
        palyer1Ele.classList.toggle('player--active');



};


rollEle.addEventListener("click", function() {



    const dice = Math.trunc(Math.random()*6)+1;

    diceEle.classList.remove('hidden');

    
    diceEle.src = `images/dice-${dice}.png`;


    if(dice !==1){

        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    }
    else{
      switchPlayer();

    }

   
});



holdEle.addEventListener("click" , function()  {
    scores[activePlayer] += currentScore;   
 document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]; // Corrected the ID selector

 if(score[activePlayer] >= 100){

    document.querySelector(`.player--${activePlayer}`).classList.add('player-winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player-winner');
 }

 else{
    switchPlayer();
 }
 
});



newGameEle.addEventListener("click" , function(){

    score0Ele.textContent = 0;
    score1Ele.textContent = 0;
     document.getElementById(`current--${activePlayer}`).textContent = 0;


});

















