{/* Aula 8 - Projeto Cadastro - Integração com Banco de Dados(Firestore): CSS Modularizado */}
{/* Aula 11 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Navegação entre Componentes */}

import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'

export default function Estiloso(){
    return (
        <div className={styles.roxo}>
            <Link href="/">Voltar</Link>
            <h1>Estilo usando CSS Módulos</h1>
        </div>
    )
}
