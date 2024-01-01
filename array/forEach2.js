// Aula 5 - Array: For-Each - 2


/*const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)
   
})


for(let i in aprovados){
    console.log(`${(i+1)}) ${aprovados[i]}`)

}*/

// Versão da aula

Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados1 = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados1.forEach2(function(nome, indice){
    console.log(`${indice+1}) ${nome}`)
})