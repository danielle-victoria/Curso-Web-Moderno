{/* Aula 13 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Componente Navegador */}
{/* Aula 21 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Modelos de Pré-Renderização */}

import Link from "next/link"
import styles from '../styles/Navegador.module.css'

export default function Navegador(props){
    return (
        <Link href={props.destino} passHref>
            <div className={styles.navegador} style={{
                backgroundColor: props.cor ?? 'dodgerblue'
            }}>
                {props.texto}
            </div>
            
        </Link>
    )
}