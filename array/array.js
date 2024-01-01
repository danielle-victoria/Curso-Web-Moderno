// Aula 1 - Array: Visão Geral

// Array -> estrutura heterogênea, dinâmica...

console.log(typeof Array, typeof new Array, typeof [])


let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados[3])
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)

aprovados.sort()  // Ordenação
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

// splice -> adiciona e remove elementos
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // Carlos foi excluído
console.log(aprovados)

aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // A partir do índice 1, ele vai excluir dois elementos e colocar as strings no lugar
console.log(aprovados)


