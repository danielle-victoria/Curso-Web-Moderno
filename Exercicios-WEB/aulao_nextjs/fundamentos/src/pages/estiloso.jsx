{/* Aula 8 - Projeto Cadastro - Integração com Banco de Dados(Firestore): CSS Modularizado */}
{/* Aula 11 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Navegação entre Componentes */}
{/* Aula 12 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Componente Layout */}


import Layout from '../components/Layout'
import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'

export default function Estiloso(){
    return (
        <Layout titulo="Exemplo de CSS Modularizado">
            <div className={styles.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
        </div>
        </Layout>
        
    )
}
