/* Aula 1 - Webpack - Estrutura Básica do Projeto */

import Pessoa from './pessoa'
import './modulos/moduloA'

//const Pessoa = require('./pessoa')

const atendente = new Pessoa
console.log(atendente.cumprimentar())