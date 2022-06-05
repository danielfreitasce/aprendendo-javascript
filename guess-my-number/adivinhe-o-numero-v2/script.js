'use strict';
//Versão 1

let numeroSecreto = Math.floor(Math.random() * 20 +1);
let pontuacao = document.querySelector('.score');
let mensagem = document.querySelector('.message');

let pontuacaoMax = localStorage.getItem('pontuacaoMax') != null ? localStorage.getItem('pontuacaoMax') : 0;
let highscoreElemento = document.querySelector('.highscore');
highscoreElemento.textContent= pontuacaoMax;

let inputGuess = document.querySelector('.guess'); 
let check = document.querySelector('.check');

inputGuess.addEventListener('keypress', (event) =>{
    if (event.key === "Enter") {
        check.click();
    }   
})

check.addEventListener('click', () =>{
    
    const palpite = Number(inputGuess.value);

    if(palpite === numeroSecreto){
        
        let numero = document.querySelector('.number');
        numero.textContent = numeroSecreto;
        numero.style.width = '30rem';

        highscoreElemento.textContent = Number(pontuacao.textContent) >= Number(highscoreElemento.textContent) ? pontuacao.textContent : Number(highscoreElemento.textContent); 

        document.querySelector('body').style.backgroundColor ='#60b347';
        mensagem.textContent = '🎉 Acertou!';
        mostrarConfete();
        return; 
    }
        
    if(!palpite){
        mensagem.textContent = '⛔ Digite um número entre 1 e 20';
        return;
    }

   let pontuacaoAtual = Number(pontuacao.textContent); 
   pontuacao.textContent = `${pontuacaoAtual - 1}`; 
   console.log(' pontuacao.textContent ' +  pontuacao.textContent);

   if(Number(pontuacao.textContent) <= 0){

        let botaoCheck = check;
        botaoCheck.disabled = true;
        botaoCheck.style = 'background-color: #6a6f73; cursor: not-allowed'
        mensagem.textContent = '💥 Você perdeu o jogo';

        return; 
   }
   else{
        calcularDiferencaEMostrarMensagem(palpite); 
   }

});

document.querySelector('.again').addEventListener('click', ()=>{
    
    if(document.querySelector('.guess').value)
    {
        let pontuacaoAtual = Number(pontuacao.textContent); 

        let pontuacaoMaxAtual = Number(highscoreElemento.textContent);

        let pMax = pontuacaoAtual >= pontuacaoMaxAtual ? pontuacaoAtual : pontuacaoMaxAtual;
        localStorage.setItem("pontuacaoMax", pMax);
        location.reload();
    }
   
});

document.querySelector('.reset').addEventListener('click', ()=>{
    localStorage.clear();
    location.reload();
});


const calcularDiferencaEMostrarMensagem = (palpite) =>{
    
    let diferenca = numeroSecreto - palpite; 

    if(diferenca >= 3 )
        mensagem.textContent = '📉 Muito baixo.';
    else if(diferenca >= -2 && diferenca <=2)
        mensagem.textContent = '🔍 Está próximo';
    else if(diferenca <= -3)
        mensagem.textContent = '📈 Muito alto.';
}

const mostrarConfete = () =>{
    party.confetti( document.querySelector('.number'),{
        shapes: ["square", "circle", "roundedRectangle"]
    });
    party.confetti(document.body);
}
