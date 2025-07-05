/* Aula 25 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Configuração: NextJS, TailwindCSS e Firebase */

const { extend } = require("lodash");

module.exports = {
    purge: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}