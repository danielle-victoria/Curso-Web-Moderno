//Passagem por valor --> tipos primitivos --> cópia do valor
//Passagem por referência --> apontam para mesma posição de memória  -> objetos e funções --> cópia do endereço de memória


let valor // não incializada
console.log(valor) //valor por padrão é undefined

//null -> Não aponta para nenhum endereço de memória(variável)/ausência de valor(null)
valor  = null 
console.log(valor)
//console.log(valor.toString()) //Não pode fazer isso //Erro, porque o que está antes é nulo

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50

console.log(produto)

produto.preco = undefined //evitar atribuir de forma explícita undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preço  //Se for atribuir de forma explícita, optar por null em vez do undefined
console.log(!!produto.preco)
console.log(produto)