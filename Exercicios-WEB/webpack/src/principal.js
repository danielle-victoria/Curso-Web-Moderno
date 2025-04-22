/* Aula 1 - Webpack - Estrutura Básica do Projeto */

import Pessoa from './pessoa'
import './modulos/moduloA'
import './assets/css/estilo.css'

//const Pessoa = require('./pessoa')

const atendente = new Pessoa
console.log(atendente.cumprimentar())