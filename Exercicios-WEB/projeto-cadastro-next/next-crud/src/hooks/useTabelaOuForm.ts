{/* Aula 39 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Organizando Código com Hooks */}

import { useState } from "react"

export default function useTabelaOuForm() {
    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const exibirTabela = () => setVisivel('tabela')
    const exibirFormulario = () => setVisivel('form')

    return {
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',
        exibirTabela,
        exibirFormulario,
    }
}