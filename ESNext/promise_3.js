// Aula 16 - ESNext: Promise - 3

function gerarNumerosEntre(min, max){
    if(min > max){
        //let a = [min, max]
        //const [x,y] = a

        [max, min] = [min, max]
    }

    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

/*gerarNumerosEntre(1, 60)
    .then(console.log)*/

gerarNumerosEntre(1, 60)
    .then(num => num * 10)
    .then(numX10 => ` O número gerado foi ${numX10}`)
    .then(console.log)