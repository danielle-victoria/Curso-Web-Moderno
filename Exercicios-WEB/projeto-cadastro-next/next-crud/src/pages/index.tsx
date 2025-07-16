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
{/* Aula 38 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Integrando Cadastro com Firebase */}
{/* Aula 39 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Organizando Código com Hooks */}


import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import useClientes from "../hooks/useClientes"
   
export default function Home(){

  //importar hooks - useClientes.ts

  const { 
    cliente,
    clientes,
    novoCliente,
    salvarCliente,
    selecionarCliente,
    excluirCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()
 
  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
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
            clienteSelecionado={selecionarCliente}
            clienteExcluido={excluirCliente}
              />
            </>
    
        ) : (
          <Formulario
            //cliente={clientes[2]}
            cliente = {cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}

          />

        )}
                  
      </Layout>
    </div>
  )
}
