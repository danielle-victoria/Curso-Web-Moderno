// Aula 6 - Array: Map - 1

// Map -> Serve para mapear elementos de um array para outro

const nums = [1, 2, 3, 4, 5]

// Map -> for com propósito

let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado, nums)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)


