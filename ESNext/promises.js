// Aula 10 - ESNext: Promises

// Lidar com processos assíncronos


// resolve -> situação de sucesso
// reject -> situação de falha
// resolve aceita apenas um parâmetro

function falarDepois(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
            //reject(frase) // retorna um erro
        }, segundos * 1000)
    })
}


falarDepois(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    //.catch(e => console.log(e)) // Tratar erro -> reject
