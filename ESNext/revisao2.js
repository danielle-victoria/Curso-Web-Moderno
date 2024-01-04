// Aula 2 - ESNext: Revisão - 2

// Arrow Function

const soma = (a, b) => a + b
console.log(soma(2,3))
 

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()


// Parâmetro default

function log(texto = 'Node'){
    console.log(texto)
}

log(undefined) // Assume valor padrão -> Node
log(null)
log() // Assume valor padrão -> Node
log('Sou mais forte')


// Operador Rest

function total(...numeros){
    let total = 0
    numeros.forEach (n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))