/* Aula 25 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Configuração: NextJS, TailwindCSS e Firebase */

//const { extend } = require("lodash");

//Original - Arquivo adicionado
//module.exports = {
//    purge: [
//        './src/pages/**/*.{js,ts,jsx,tsx}',
//        './src/components/**/*.{js,ts,jsx,tsx}'
//    ],
//    darkMode: false, // or 'media' or 'class'
//    theme: {
//        extend: {},
//    },
//    variants: {
//        extend: {},
//    },
//    plugins: [],
//}


module.exports = {
    purge: {
      content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}'
      ],
      safelist: [
        /^bg-/,
        /^to-/,
        /^from-/,
      ]
    }, 
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}