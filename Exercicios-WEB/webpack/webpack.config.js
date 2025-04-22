/* Arquivo interpretado pelo node*/

const modoDev = process.env.NODE_ENV !== 'production' // Aula 7 - Desenvolvimento & Produção
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')


module.exports = {
    //mode: "development",
    mode: modoDev ? 'development' : 'production',//Aula 7 - Desenvolvimento & Produção
    entry: "./src/principal.js", // ponto de entrada
    //entry: path.resolve(__dirname, './src/principal.js')
    output: {    /* Aula 3 - Configurando a Pasta de Saída */
        filename: 'principal.js',
        path: __dirname + '/public'  //Pasta de destino
    },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin({
                //cache: true,
                parallel: true
            }),
            new CssMinimizerWebpackPlugin({

            })
        ]
    },

    plugins: [  // Aula 5 - Externalizando Arquivo .CSS
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module:{    /// Aula 4 -  Carregando Arquivo .CSS
        rules: [{
            //test: /\.css$/,
            test: /\.s?[ac]ss$/, // Aula 6 - Carregando Arquivo .SCSS (SASS)
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', //Adiciona CSS a DOM injentando a tag <style>
                'css-loader', //interpretando @import, url()...
                'sass-loader',
            ]
        }]
    }
}

