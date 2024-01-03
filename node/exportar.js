// Aula 5 - Node: Sistemas de Módulos - Exports

console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports ={   // jeito errado
    nome: 'Teste'
}

console.log(module.exports)

module.exports = {
    publico: true
}
