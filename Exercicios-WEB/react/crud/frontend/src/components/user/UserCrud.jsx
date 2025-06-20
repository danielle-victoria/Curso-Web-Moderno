import React, {Component} from "react"
import Main from "../template/Main"

{/* Aula 10 - Projeto Cadastro de Usuário: Componente Cadastro Usuário #01 */}

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir!' 
}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}