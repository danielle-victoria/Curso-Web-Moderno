// Aula 15 - Funções: Tipos de Declarações 

console.log(soma(3,4)) // -> O intepretador carrega as funções antes, por isso dá certo
//console.log(sub(3,4)) // -> Dá erro para function expression
//console.log(mult(3,4)) // -> Dá erro para named function expression


// function declaration
function soma(x,y){
    return x + y
}

// function expression
const sub = function (x,y){
    return x - y
}

console.log(sub(3,4))

// named function expression -> Pouco usada
const mult = function mult(x,y){
    return x * y
}

console.log(mult(3,4))