//Number
let idade = 33
console.log(idade) //saida: 33

//Float 
let precoMouse = 19.90
console.log(precoMouse) //saida: 19.90

//String
let nome = 'Daniel'
console.log(nome) //saida: Nome

//Boolean
let nomeV = true
console.log(nomeV) //saida: true
let noveF = false
console.log(nomeF) //saida: false

//Date
let dataHoje = new Date() //
console.log(dataHoje) //saida: retorna a data completa com hora completa. 

//Function 
let resultado = adicionarNumeros(5, 2)
function adicionarNumeros(num1, num2) {
    return num1 + num2;
}

console.log(resultado) //saida: 7

//Array (vetores)
let frutas = ['banana', 'morango', 'abacaxi']
console.log(frutas) //retorna o array completo

Object
const pessoa = {
    nome: 'daniel',
    sobrenome: 'freitas',
    idade: 30
}

console.log(pessoa)

//Tipos de dados especiais em JavaScript
//NaN(é number)
let num = NaN
console.log(typeof num) // number
console.log(num == NaN) //falso
console.log(num === NaN) //falso

//Null
let variavelQualquer = null
console.log(variavelQualquer) //null

//Undefined
let carro
carro = undefined
console.log(carro) //undefined

//Operadores
//typeof
console.log(typeof 1) //number
console.log(typeof 'daniel') //string

//instaceof
class Carro { };
let carro = new Carro();
console.log(carro instanceof Carro) //identifica o prototype.  


//IGUALDADE ESTRITA
console.log(20 === 20) //true //compara o valor e o tipo
console.log('20' == 20) //false //compara os valores, porém imprime falso por que os tipos são diferentes

//IGUALDADE SOLTA
console.log(20 == 20) //true 
console.log('1' == 1) //true //compara valores

