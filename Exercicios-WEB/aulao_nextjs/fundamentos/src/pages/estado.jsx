{/* Aula 16 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Componente com Estado */}

import { useState } from "react"
import Layout from "../components/Layout"

export default function Estado() {
    
    //const state = useState(0)
    //let numero = state[0]
    //let alterarNumero = state[1]

    // console.log(state)

    //Estado interno
    const[numero, setNumero] = useState(0)  //React Hooks

    function incrementar(){
        //alterarNumero(numero + 1)
        setNumero(numero + 1)
    }

    return (
        <Layout titulo="Componente com Estado">
            <span>{numero}</span>
            <button onClick={incrementar}>Incrementar</button>
        </Layout>
    )
}