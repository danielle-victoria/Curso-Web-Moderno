// Aula 14 - Objeto: Evitando Modificações

// Object.preventExtensionsw  -> Não permite que o objeto seja extendido

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag

// produto -> objeto pode ser modificado, mas não pode receber novos atributos
console.log(produto)

//Object.seal //selar objeto -> Não consegue: adicionar novos atributos, exluir atributos. Entretanto, consegue modificar os valores.

const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:' , Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes
