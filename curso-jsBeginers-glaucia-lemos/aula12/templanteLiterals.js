/** Concatenando strings: ************************************************* */

let str1 = 'JavaScript'
let str2 = 'legal!'

console.log(`Formatando strings em ${str1} é ${str2}`) //Formatando strings em JavaScript é legal!

/** Pulando linhas: ************************************************* */

console.log(`Podemos pular linhas






dessa forma`)
/** saida:Podemos pular linhas






dessa forma*/

/** Expressões booleanas: ************************************************* */
let bool1 = true;
console.log(`O oposto de true é ${!bool1}.`) //saida: O oposto de true é false.


/** chamando funções: ************************************************* */

const getValue = (num) => {
    return num + num
}

console.log(`Resultado: ${getValue(10)}`)//saida:20