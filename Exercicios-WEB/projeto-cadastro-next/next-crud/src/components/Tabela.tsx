{/* Aula 28 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Componente Tabela #01 */}

import Cliente from "../core/Cliente"

interface TabelaProps {
    clientes: Cliente[]
}

export default function Tabela(props: TabelaProps) {
    
    function renderizarCabecalho(){
        return(
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    }

    function renderizarDados(){
        return props.clientes?.map((Cliente, i) => {
            return(
                <tr key={Cliente.id}>
                    <td>{Cliente.id}</td>
                    <td>{Cliente.nome}</td>
                    <td>{Cliente.idade}</td>
                </tr>
            )
        })
    }

    
    return (
       
        <table>
            <thead>
                {renderizarCabecalho()}    
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}