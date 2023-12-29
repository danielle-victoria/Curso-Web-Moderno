// Aula 18 - Funções: Factory

// Definição: Uma função factory é aquela que retorna um objeto

// Exemplo sem factory
const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 1234
}

// Exemplo com factory
// Factory Simples
function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())