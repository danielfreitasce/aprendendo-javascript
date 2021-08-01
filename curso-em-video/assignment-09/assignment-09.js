function contar() {

    let ini = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let passo = window.document.getElementById('passo')
    let res = window.document.getElementById('res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível contar`

    } else {

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <=0){
            window.alert("Passo inválido")

        }else if(i < f){
            //contagem crescente
            for (i ; i <= f; i += p) {

                res.innerHTML += ` ${i} &#x1F449`
                console.log = `${i} `
     
            }

            res.innerHTML += `&#x1F3C1`

        }else{
            //contagem descrecente
            for (i ; i >= f; i -= p) {

                res.innerHTML += ` ${i} &#x1F449`
                console.log = `${i} `
     
            }

            res.innerHTML += `&#x1F3C1`
        }
        

        
    }





}
