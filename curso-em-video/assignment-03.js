//Alterando os elementos do DOM 

var nome = window.prompt('Qual é seu nome?')
document.write(`Olá, ${nome}! Seu nome tem ${nome.length} letras.`)
document.write(`Seu nome em maiúscula fica assim ${nome.toUpperCase()}.`)
document.write(`Seu nome em minúscula fica assim ${nome.toLowerCase()}. `)

/**docuent.write irá escrever no documento HTML a mensagem que você definir entre parênteses.
 * A função .toUpperCase() antecedida da váriavel tipo string, no exemplo acima é "nome", irá converter todas as eletras em maiúsculo. 
 * A função .toLowerCase() converterá tudo em minúsculo. 
 */


/*

Algumas funções que merecem ser anotadas:

let n = 1.7897;

n.toFixed(2) //Exive o valor com duas casas decimais
n.toFixed(2).replace('.', ',') //substitui o ponto pela vígula na exibição do valor 
n.toLocaleString('pt-BR',{style:'currency', currency: 'BRL'}) //Converte para exibir em real brasileiro.

console.log(n.toFixed(2).replace('.', ',') )*/