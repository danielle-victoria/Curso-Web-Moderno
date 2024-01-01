// Aula 2 - Array: Métodos Importantes

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// Exclui o último elemento
pilotos.pop() // massa quebrou o carro!
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

// Exclui o primeiro elemento
pilotos.shift()
console.log(pilotos)

// Adiciona na primeira posição
pilotos.unshift('Hamilton')
console.log(pilotos)

// Splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover
pilotos.splice(3, 1) // remover um elemento a partir da terceira posição
console.log(pilotos)


const algunsPilotos1 = pilotos.slice(2) // pega uma parte do array e cria um novo
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // índice 4 não entra
console.log(algunsPilotos2)





