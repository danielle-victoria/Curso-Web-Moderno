/*mport Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    >
      
    </div>
  )
}   original*/

import { useState } from "react"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
   

/* Aula 25 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Configuração: NextJS, TailwindCSS e Firebase */

/*export default function Home(){
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600
    `}>
      <span className="text-4xl">Texto</span>
    </div>
  )
}*/

{/* Aula 26 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Componentes Layout e Título */}
{/* Aula 30 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Componente Tabela #03 */}
{/* Aula 31 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Componente Botão */}
{/* Aula 32 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Componente Formulário */}
{/* Aula 33 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Alternando entre Tabela e Formulário */}
{/* Aula 34 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Integrando Tabela e Formulário */}

export default function Home(){

  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4')
  ]

  function clienteSelecionado(cliente: Cliente){
    //console.log(cliente.nome)
    setCliente(cliente)
    setVisivel('form')
  }
  
  function clienteExcluido(cliente: Cliente){
    console.log(`Excluir... ${cliente.nome}`)
  }

  function novoCliente(cliente: Cliente){
    //console.log(cliente)
    setCliente(Cliente.vazio())
    setVisivel('form')
  }
  function salvarCliente(cliente: Cliente){
    console.log(cliente)
    setVisivel('tabela')
  }

 
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
          <div className="flex justify-end">
            {/*<Botao className="mb-4" cor="bg-green-500">Novo Cliente</Botao>*/}
            <Botao className="mb-4" cor="bg-gradient-to-r from-green-400 to-green-700"
              //onClick={() => setVisivel('form')}
              onClick={novoCliente}
              >Novo Cliente
            </Botao>
          </div>
          <Tabela clientes={clientes}
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}
              />
            </>
    
        ) : (
          <Formulario
            //cliente={clientes[2]}
            cliente = {cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}

          />

        )}
                  
      </Layout>
    </div>
  )
}
