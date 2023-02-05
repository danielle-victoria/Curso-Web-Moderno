// novo recurso do ES2015
//Operador destructuring - Casos com Objetos

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//Operador destructuring 
const {nome, idade} = pessoa //extrai os atributos nome e idade do objeto pessoa
console.log(nome, idade)

//Outra forma
const{nome: n, idade: i} = pessoa
console.log(n, i)

//Atributos não definidos
const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: { logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)