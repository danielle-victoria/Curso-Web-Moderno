// Aula 7 - Funções: Arrow - 1

/* Função Arrow sempre é anônima - Se quiser chamar ela depois,
   Tem que armazenar em uma variável ou constante. */

let dobro = function (a) {
    return 2 * a
}

//Arrow function - > "tradicional"
dobro = (a) => {
    return 2 * a
}

// Para quando tiver apenas um parâmetro ou a função só uma sentença de código
// return implícito
dobro = a => 2 * a

console.log(dobro(Math.PI))


let ola = function (){
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parâmetro

console.log(ola())