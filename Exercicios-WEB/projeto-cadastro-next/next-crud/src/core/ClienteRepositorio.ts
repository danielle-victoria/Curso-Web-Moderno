{/* Aula 37 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Repositório de Clientes */}
{/* Aula 38 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Integrando Cadastro com Firebase */}


import Cliente from "./Cliente"

export default interface ClienteRepositorio {
    salvar(cliente: Cliente): Promise<Cliente>
    excluir(cliente: Cliente): Promise<void>
    obterTodos(): Promise<Cliente[]>
}