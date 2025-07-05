{/* Aula 22 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Pré-Renderização na Prática */}

import Layout from '../components/Layout'

export function getStaticProps(){
    return {
        props: {
            numero: Math.random()
        }
    }
}


export default function Estatico(props){
    return (
        <Layout titulo="Conteudo Estático">
            <div>{props.numero}</div>            
        </Layout>
    )
}

/*export default function Estatico(){
    return (
        <Layout titulo="Conteudo Estático">
            <div>{Math.random()}</div>
        </Layout>
    )
}*/

//npm run build e depois npm start