// Aula 20 - Node: API Com Express - 1

const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true}))

/*app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...')
    next()
})*/

/*app.use((req, res, next) => { // Não importa a url 
    res.send({nome: 'Notebook', preco: 123.45}) // Converter para JSON
})*/

/*app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 123.45}) // Converter para JSON
})*/

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)  // JSON
})

// Atualizar/modificar
/*app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)  // JSON
})*/


app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    res.send(produto)  // JSON
})



app.listen(porta, ()=> {
    console.log(`Servidor executando na porta ${porta}.`)
})

