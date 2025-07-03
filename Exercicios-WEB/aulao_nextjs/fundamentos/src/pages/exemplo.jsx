import Layout from "../components/Layout"
import Cabecalho from "../components/Cabecalho"


{/* Aula 9 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Usando Componente */}
{/*Aula 13 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Componente Navegador */}
export default function Exemplo(){
    return (
        //<Cabecalho />

        /*Para elementos repetidos <div> ou <> (mais indicado)*/

        <Layout titulo="Usando Componentes">
            <Cabecalho titulo = "Next.js & React"/>
            <Cabecalho titulo = "Aprenda Next.js na prática"/>

        </Layout>
    )
}

