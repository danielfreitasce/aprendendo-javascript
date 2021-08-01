
function somar(){
    let tn1 = window.document.getElementById('txtn1')
    let tn2 = window.document.getElementById('txtn2')
    let res = window.document.getElementById('res')

    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let s = n1+n2

    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>`
}

/**Se você entende um pouco de inglês, ao ler "window.document.getElementById" já consegue deduzir o que esta função faz.
 * Através dela você pode pegar um valor inserido em um elemento html e inserir em uma variável. 
 * 
 * A função "Number" converte a string recebida pela variável tn1, converte para tipo número e joga na variável n1. 
*/