/* Arquivo interpretado pelo node*/

const webpack = require('webpack')

module.exports = {
    mode: "development",
    entry: "./src/principal.js", // ponto de entrada
    //entry: path.resolve(__dirname, './src/principal.js')
    output: {    /* Aula 3 - Configurando a Pasta de Saída */
        filename: 'principal.js',
        path: __dirname + '/public'  //Pasta de destino
    }
}

