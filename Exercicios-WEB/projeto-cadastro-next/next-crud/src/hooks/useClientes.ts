{/* Aula 39 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Organizando Código com Hooks */}

import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente()
    
      const { tabelaVisivel, exibirTabela, exibirFormulario} = useTabelaOuForm()
      const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
      const [clientes, setClientes] = useState<Cliente[]>([])
      const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
    
      /*const clientes = [
        new Cliente('Ana', 34, '1'),
        new Cliente('Bia', 45, '2'),
        new Cliente('Carlos', 23, '3'),
        new Cliente('Pedro', 54, '4')
      ]*/
    
        useEffect((obterTodos), [])
    
        function obterTodos(){
          repo.obterTodos().then(clientes => {
            setClientes(clientes)
            //setVisivel('tabela')
            exibirTabela()
          })
        }
      function selecionarCliente(cliente: Cliente){
        //console.log(cliente.nome)
        setCliente(cliente)
        //setVisivel('form')
        exibirFormulario()
      }
      
      async function excluirCliente(cliente: Cliente){
        //console.log(`Excluir... ${cliente.nome}`)
        await repo.excluir(cliente)
        obterTodos()
      }
    
      function novoCliente(cliente: Cliente){
        //console.log(cliente)
        setCliente(Cliente.vazio())
        //setVisivel('form')
        exibirFormulario()
      }
      async function salvarCliente(cliente: Cliente){
        //console.log(cliente)
        await repo.salvar(cliente)
        //setVisivel('tabela')
        obterTodos()
      }

      return{
          cliente,
          clientes,
          novoCliente,
          salvarCliente,
          excluirCliente,
          selecionarCliente,
          obterTodos,
          tabelaVisivel,
          exibirTabela
      }
    
}