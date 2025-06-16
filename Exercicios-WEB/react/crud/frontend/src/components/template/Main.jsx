import './Main.css'
import React from 'react'
import Header from './Header'

{/* Aula 3 - Projeto Cadastro de Usuário: Criando Componentes (Template)
 */}
 
export default props =>
    <React.Fragment>
        <Header {...props}/>
        <main className="content">
            Conteúdo
        </main>
    </React.Fragment>

