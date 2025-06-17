import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'


import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Home from '../components/home/Home'
import Footer from '../components/template/Footer'

{/* Aula 3 - Projeto Cadastro de Usuário: Criando Componentes (Template)
 */}

export default props =>
   <div className="app">
    <Logo/>
    <Nav/>
    <Home/>
    <Footer/>
   </div> 