// Aula 20 - ESNext: Promise - 5

const { reject } = require("lodash");

// Tratamento de erro

function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {
        try{
            con.log('tempo') // Erro -> Teste
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro!')
            }else{
                resolve(valor)
            }
        } catch (e){
            reject(e)
        }
    })
}


funcionarOuNao('Testando...', 0.5)
    .then(v => `Valor: ${v}`)
    //.then(console.log)
    //.then(v => console.log(v))
    .then(
        v => console.log(v),
        err => console.log(`Erro Específico: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))