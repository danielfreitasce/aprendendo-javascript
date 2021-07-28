//EVENTOS DOM. Nesste código temos a alteração da div area ao entrar, sair e clicar .

window.onload = function () {
    var a = document.getElementById('area')

    a.addEventListener('click',  
    function clicar(){
        //let a = window.document.getElementById('area')
        a.innerText = "clicou!"
        a.style.background = 'red'
    });

    a.addEventListener('mouseenter',function entrar(){
        // let a = window.document.getElementById('area')
         a.innerText = "entrou"
    });
     
    a.addEventListener('mouseout', function sair(){
        // let a = window.document.getElementById('area')
         a.innerText = "saiu"
         a.style.background = 'green'
     });
     
}
   
   


