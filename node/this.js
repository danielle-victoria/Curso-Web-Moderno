// Aula 10 e 11 - Node: Entendendo o "this"

console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)


function logThis(){
    console.log('Dentro de uma função')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

}

logThis()

// This fora de uma função aponta para module.exports e exports
// This dentro de uma função aponta para global
// Dentro de uma arrow function, o this não vai apontar mais para o objeto global, e sim para o module.export / exports.