'use strict';
//Versão 1

let oNumero = Math.floor(Math.random() * 20 +1);
let pontuacaoMax = 0; 
let pontuacao = document.querySelector('.score');




document.querySelector('.check').addEventListener('click', () =>{
    
    let mensagem = document.querySelector('.message');
   

    const palpite = Number(document.querySelector('.guess').value);

    if(palpite === oNumero){
        
        document.querySelector('.number').textContent = oNumero;
        document.querySelector('.highscore').textContent = pontuacao.textContent; 
        document.querySelector('body').style ="background-color : #60b347";
        mensagem.textContent = '🎉 Acertou!';
        mostrarConfete();
        return; 
    }
        
    if(!palpite){
        mensagem.textContent = '⛔ Digite um número.';
        return;
    }

   
   pontuacao.textContent = `${Number(pontuacao.textContent) -1}`; 
   
   let diferenca = oNumero - palpite; 

   if(diferenca >= 4 )
        mensagem.textContent = '📉 Muito baixo.';
   else if(diferenca >= -2 && diferenca <=3)
        mensagem.textContent = 'Está próximo';
   else if(diferenca <= -3)
        mensagem.textContent = '📈 Muito alto.';

});

const mostrarConfete = () =>{
    party.confetti( document.querySelector('.number'),{
        shapes: ["square", "circle", "roundedRectangle"]
    });
}


document.querySelector('.again').addEventListener('click', ()=>{
    
    document.querySelector('.guess').value = '';
    document.querySelector('body').style ="";
    oNumero = Math.floor(Math.random() * 20 +1);
    document.querySelector('.number').textContent = '?';
    pontuacao.textContent = '20';
    let mensagem = document.querySelector('.message').textContent = 'Adivinhe o número';
});