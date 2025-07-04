//import { useEffect } from "react"
import Layout from "../../../components/Layout"
import {useRouter} from 'next/router'
//import router from 'next/router'

{/* Aula 15 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Navegação Dinâmica */}
//Nome do arquivo - [] -> Para tornar dinâmico

export default function ClientePorCodigo(){
    const router = useRouter()

    /*useEffect(() => {
        console.log(router.query.codigo)
    },[])*/
    
    return (
        <Layout titulo="Navegação Dinâmica">
            <div>Código = {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}