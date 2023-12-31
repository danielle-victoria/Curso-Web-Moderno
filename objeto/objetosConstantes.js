// Aula 4 - Objeto: Constante

// pessoa -> 123 -> (...)

const pessoa ={
    nome: 'João'
}

pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- 456 -> (...)

// Erro - Não permitido
/*pessoa = {
     nomes: 'Ana' }*/

// Objeto Constante
Object.freeze(pessoa) // objeto congelado

pessoa.nome = 'Maria' // Comando é ignorado
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João'})
pessoaConstante.nome = 'Maria' // Comando é ignorado
console.log(pessoaConstante)
