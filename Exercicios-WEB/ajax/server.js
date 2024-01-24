// Aula 2: Ajax - Implementando server.js
// Aula 4: Ajax - XML HTTP Request -- 2 



const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true})) // responsável por transformar os dados
app.use(bodyParser.json())

//app.get('/teste', (req, res) => res.send('Ok'))

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, callback) { // define a pasta do arquivo
        callback(null, './upload')
    },
    filename: function(req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`) // define o nome do arquivo
    }
})

const upload = multer({ storage}).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req,res, err => {
        if(err) {
            return res.send('Ocorreu um erro.')
        }

        res.send('Concluído com sucesso.')
    })
})

app.listen(8080, () => console.log('Executando...'))