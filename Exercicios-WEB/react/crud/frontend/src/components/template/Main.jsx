import './Main.css'
import React from 'react'
import Header from './Header'

{/* Aula 3 - Projeto Cadastro de Usuário: Criando Componentes (Template)
 */}

 {/* Aula 9 - Projeto Cadastro de Usuário: Componente Conteúdo */}
 
export default props =>
    <React.Fragment>
        <Header {...props}/>
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
            {/* Conteúdo */}
        </main>
    </React.Fragment>

