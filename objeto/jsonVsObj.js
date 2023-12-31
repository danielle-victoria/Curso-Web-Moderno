// Aula 15 - Objeto: JSON Vs Objeto

const obj = {a: 1, b: 2, c: 3, soma(){ return a + b+ c}}

console.log(JSON.stringify(obj))

//console.log(JSON.parse("{a: 1, b:2, c:3}")) // Formato Inválido
//console.log(JSON.parse("{'a': 1, 'b':2, 'c':3}")) // Formato Inválido
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')) // Formato Válido
console.log(JSON.parse('{"a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')) // Formato Válido -> Para string -> "" 



