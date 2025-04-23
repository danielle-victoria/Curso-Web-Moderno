/* Arquivo interpretado pelo node*/

const modoDev = process.env.NODE_ENV !== 'production' // Aula 7 - Desenvolvimento & Produção
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin') // Aula 7 - Desenvolvimento & Produção
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin') // Aula 7 - Desenvolvimento & Produção


module.exports = {
    //mode: "development",
    mode: modoDev ? 'development' : 'production',//Aula 7 - Desenvolvimento & Produção
    entry: {main:'./src/principal.js'}, // ponto de entrada
    //entry: path.resolve(__dirname, './src/principal.js')
    output: {    /* Aula 3 - Configurando a Pasta de Saída */
        filename: 'principal.js',
        path: __dirname + '/public'  //Pasta de destino
    },
    devServer: { //Aula 9 - Adicionando WebServer
        static: {
            directory: __dirname + "/public",
        },
        port: 9000
    },
    optimization: {
        minimize: !modoDev,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    ecma: 6
                }
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
        }, {
            test: /\.(png|svg|jpg|gif|jpeg)$/, // Aula 8 - Carregando Arquivos de Imagens
            //use: ['file-loader']
            type: 'asset/resource'
        }]
    } 
}

