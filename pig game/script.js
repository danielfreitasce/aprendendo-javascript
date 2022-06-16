'use strict';

//selecionando elementos
const player0Element = document.querySelector('.player--0'); 
const player1Element = document.querySelector('.player--1');
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
 
//condições iniciais
score0Element.textContent = 0; 
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0; 
let activePlayer = 0;
let playing = true; 

const switchPlayer = ()=>{
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0; 
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
}

//Jogando o dado
btnRoll.addEventListener('click', function(){

    if(!playing) return; 
    //1. Gerar um valor aleatório no dado
    const dice = Math.trunc(Math.random() * 6) + 1;
    
    //2.mostrar o dado
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    //Verificar se valor do dado
    if(dice !==1){
        //Adicionar valor ao score atual
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    }else{
        switchPlayer();
    }
});

btnHold.addEventListener('click', function(){
     //1. Adicionar o score atual para o player ativo
     if(!playing) return; 

    scores[activePlayer] += currentScore; 
    console.log(scores[activePlayer]);

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    //2. Verificar se o score é >= 100
    if( scores[activePlayer] >= 100){
        playing = false; 
        diceElement.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner'); 
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active'); 

    }else{
            //3.mudar player
        switchPlayer();
    }
});

btnNew.addEventListener('click', function(){
    window.location.reload();
})
