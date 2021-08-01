function contar(){
   
    let ini = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
        
    res.innerHTML = `Contando:<br>`

    for(let i = Number(ini.value); i <= Number(fim.value);  i+=Number(passo.value)){

        res.innerHTML += `${i} &#x1F449`
        
    }

    res.innerHTML += `&#x1F3C1`


        
}
