//EVENTOS DOM. Nesste código temos a alteração da div #area ao entrar, sair e clicar .

/*Estas funções é para o caso de querer alterar usando os atributos em html ('onclick', 'onmouseenter', 'onmouseout')

   
    function clicar(){
        let a = document.getElementById('area')
        a.innerText = "clicou!"
        a.style.background = 'red'
    }

    function entrar(){
        let a = document.getElementById('area')
        a.innerText = "entrou"
    }
     
    function sair(){
        let a = document.getElementById('area')
         a.innerText = "saiu"
         a.style.background = 'green'
    }

*/

//Esta função abaixo é para o caso de alteração usando javascript

window.onload = function () {
    var a = document.getElementById('area')

    a.addEventListener('click',
        function clicar() {
            a.innerText = "clicou!"
            a.style.background = 'red'
        });

    a.addEventListener('mouseenter', function entrar() {
        a.innerText = "entrou"
    });

    a.addEventListener('mouseout', function sair() {
        a.innerText = "saiu"
        a.style.background = 'green'
    });

}




