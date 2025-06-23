import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

{/* Aula 3 - Projeto Cadastro de Usuário: Criando Componentes (Template)
 */}

 {/* Aula 8 - Projeto Cadastro de Usuário: Componente Navegação */}
 
export default props =>
    <aside className="menu-area">
        <nav className='menu'>
            {/* Refatorar */}
            <Link to ="/">
                <i className="fa fa-home"></i> Início
            </Link>
            <Link to ="/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
        </nav>
        {/*Navegação*/}
    </aside>
