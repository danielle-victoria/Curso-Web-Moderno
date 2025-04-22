/* Arquivo interpretado pelo node*/

const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: "development",
    entry: "./src/principal.js", // ponto de entrada
    //entry: path.resolve(__dirname, './src/principal.js')
    output: {    /* Aula 3 - Configurando a Pasta de Saída */
        filename: 'principal.js',
        path: __dirname + '/public'  //Pasta de destino
    },
    plugins: [  // Aula 5 - Externalizando Arquivo .CSS
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module:{    /// Aula 4 -  Carregando Arquivo .CSS
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', //Adiciona CSS a DOM injentando a tag <style>
                'css-loader' //interpretando @import, url()...
            ]
        }]
    }
}

