function imprimirNome() {
    var nome = 'Daniel Freitas'
    console.log('Meu nome é', nome);
}
//imprimirNome()
//var só funciona dentro do escopo da função.

function imprimirIdade() {
    for (let idade = 33; idade <= 50; idade++) {
        console.log("Idade dentro do for: ", idade)
    }
    console.log("Idade fora do for: ", idade) //Apos executar o for, o programa irá mostrar um erro, pois a variavel idade não está dentro do escopo da função
}
// imprimirIdade()

function imprimirIdade2() {
    for (const idade = 33; idade <= 50; idade++) {
        console.log("idade dentro do for:", idade)
    }
}

//imprimirIdade2() //iremos receber um erro ao executar esta função, 
//porque uma variável const não muda de valor

const pessoa = {
    nome: 'Daniel',
    idade: 33
}

function imprimirDadosPessoa() {
    console.log(`Nome: ${pessoa.nome} e idade: ${pessoa.idade}`)
}

imprimirDadosPessoa()

