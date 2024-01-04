// Aula 20 - Node: API Com Express - 1

const porta = 3003

const express = require('express')
const app = express()

/*app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})*/

/*app.use((req, res, next) => { // Não importa a url 
    res.send({nome: 'Notebook', preco: 123.45}) // Converter para JSON
})*/

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 123.45}) // Converter para JSON
})


app.listen(porta, ()=> {
    console.log(`Servidor executando na porta ${porta}.`)
})