// Aula 9 - Node: Objeto Global do Node

require('./global')

console.log(MinhaApp.saudacao())
//console.log(global.MinhaApp.saudacao()) // Cuidado! O padrão é usar o sistema de módulos

MinhaApp.nome = 'Eita'  // Não pode mudar, por causa do freeze
console.log(MinhaApp.nome)
