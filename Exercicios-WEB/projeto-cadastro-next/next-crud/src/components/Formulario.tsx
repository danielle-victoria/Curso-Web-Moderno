import { useState } from "react"
import Entrada from "./Entrada"
import Cliente from "../core/Cliente"
import Botao from "./Botao"

{/* Aula 32 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Componente Formulário */}


interface FormularioProps {
    cliente: Cliente
}

export default function Formulario(props: FormularioProps) {

    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? '')

    return (
        <div className="bg-gray-200 rounded p-5">
            {id? (
                <Entrada
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    className="mb-5"
                />
            ): false}
            <Entrada
                texto="Nome"
                valor={nome}
                valorMudou={setNome}
                className="mb-5"
            />
            <Entrada
                texto="Idade"
                tipo="number"
                valor={idade}
                valorMudou={setIdade}
                
            />
            <div className="flex justify-end mt-7">
                <Botao cor="bg-gradient-to-r from-blue-400 to-blue-700" className="mr-2">
                    {id ? 'Alterar' : 'Salvar' }
                </Botao>
                <Botao cor="bg-gradient-to-r from-gray-400 to-gray-700">
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}