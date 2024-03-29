// Aula 12 - Funções: Callback - 2

const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callback

const notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback

notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

// Com callback e arrow

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

// "Forma mais elegante"

const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)


