'use strict';
//Versão 1

let numeroSecreto = Math.floor(Math.random() * 20 +1);
let pontuacao = document.querySelector('.score');
let mensagem = document.querySelector('.message');

let pontuacaoMax = localStorage.getItem('pontuacaoMax') != null ? localStorage.getItem('pontuacaoMax') : 0;
document.querySelector('.highscore').textContent = pontuacaoMax;

let inputGuess = document.querySelector('.guess'); 

inputGuess.addEventListener('keypress', (event) =>{
    if (event.key === "Enter") {
        document.querySelector('.check').click();
    }   
})

document.querySelector('.check').addEventListener('click', () =>{
    
    const palpite = Number(inputGuess.value);

    if(palpite === numeroSecreto){
        
        document.querySelector('.number').textContent = numeroSecreto;
        document.querySelector('.highscore').textContent = pontuacao.textContent; 
        document.querySelector('body').style ="background-color : #60b347";
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

   if(Number(pontuacao.textContent) <= 0){

        let botaoCheck = document.querySelector('.check');
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
        let pMax = pontuacao.textContent;
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
