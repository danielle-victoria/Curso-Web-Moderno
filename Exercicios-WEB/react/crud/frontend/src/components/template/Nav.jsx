import './Nav.css'
import React from 'react'

{/* Aula 3 - Projeto Cadastro de Usuário: Criando Componentes (Template)
 */}

 {/* Aula 8 - Projeto Cadastro de Usuário: Componente Navegação */}
 
export default props =>
    <aside className="menu-area">
        <nav className='menu'>
            {/* Refatorar */}
            <a href="#/">
                <i className="fa fa-home"></i> Início
            </a>
            <a href="#/users">
                <i className="fa fa-users"></i> Usuários
            </a>
        </nav>
        Navegação
    </aside>
