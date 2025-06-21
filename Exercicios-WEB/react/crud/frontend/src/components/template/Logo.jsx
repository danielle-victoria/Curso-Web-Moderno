 import './Logo.css'
 import logo from '../../assets/imgs/logo.png'
 import React from 'react'
 import { Link } from 'react-router-dom'

 {/* Aula 3 - Projeto Cadastro de Usuário: Criando Componentes (Template)
 */}

 export default props => 
    <aside className="logo">
        <Link to href="/" className='logo'>
        <img src={logo} alt="logo"/>
        </Link>
    </aside>
