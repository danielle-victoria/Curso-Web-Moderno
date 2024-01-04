// Aula 7 - ESNext: Map

const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})

console.log(tecnologias.react) // Forma Inválida
console.log(tecnologias.get('react').framework) // Forma Válida

const chaveVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chaveVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chaveVariadas.has(123))
chaveVariadas.delete(123)
console.log(chaveVariadas.has(123))
console.log(chaveVariadas.size)

// Map não aceita repetição na chave, mas no valor, sim

chaveVariadas.set(123, 'a')
chaveVariadas.set(123, 'b')
chaveVariadas.set(456, 'b')


console.log(chaveVariadas)
