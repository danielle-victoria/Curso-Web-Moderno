// Aula 15 - ESNext: Promise - 1

let a = 1
console.log(a)

//console.log(typeof Promise)

const primeiroElemento = string => string[0]
const primeiraLetra = string =>  string[0]
const letraMinuscula = letra => letra.toLowerCase()


//let p = new Promise(function(cumprirPromessa){
new Promise(function(resolve){
    //cumprirPromessa(3)
    /*cumprirPromessa({  // objeto
        x: 3,
        y:4
    })*/
    //cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel' ])  // lista
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel' ])  // lista

})

//console.log(typeof p)

/*p.then(function(valor){
    console.log(valor)
    //console.log(valor.x)


})*/

/*function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(string){
    return string[0]
}*/


    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)
    //.then((valor) =>  (valor[0]))
   
    //console.log(valor.x)
    /*.then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))*/

    
