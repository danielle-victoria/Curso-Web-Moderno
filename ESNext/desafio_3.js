// Aula 17 e 18 - ESNext: Desafio Promise e Resposta 

const fs = require('fs')
const path = require('path')

function lerArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo){
            resolve(conteudo.toString())
        })
        console.log('Depois de ler')
    })
}

const caminho = path.join(__dirname, 'dados.txt')
/*lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))*/

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    //.then(linhas => console.log(linhas[1]))
    //.then(linhas => console.log(linhas.length))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)