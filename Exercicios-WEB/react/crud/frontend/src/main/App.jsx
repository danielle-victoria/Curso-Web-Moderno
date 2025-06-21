import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom' 

import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Routes from './Routes'
import Footer from '../components/template/Footer'


{/* //import { HashRouter } from 'react-router-dom'
 */}

{/* BrowserRouter -> Pode usar no lugar do HashRouter */}

{/* Aula 3 - Projeto Cadastro de Usuário: Criando Componentes (Template)
 */}

export default props =>
   <BrowserRouter>
      <div className="app">
         <Logo/>
         <Nav/>
         <Routes/>
         <Footer/>
      </div> 
   </BrowserRouter>
   