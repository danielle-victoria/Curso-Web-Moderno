import Layout from "../components/Layout"

{/* Aula 6 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Integração JavaScript/JSX */}
{/* Aula 13 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Componente Navegador */}

export default function Jsx(){
    //Aqui fora é o JS puro
    /*const a = 4
    const b = 3
    console.log(a * b)

    const obj = {nome: 'João', idade: 30}*/

    const titulo = <h1>JSX é um conceito Central</h1>

    function subtitulo() {
        return <h2>{"muito legal".toLocaleUpperCase()}</h2>
    }

    return (
        <Layout titulo="Entendendo o JSX">
            <div>
                {titulo}
                {subtitulo()}
                {/*<h1>JSX é um conceito Central</h1>*/}
                {/*console.log( a * b)  -> Errado - Aqui dentro o JS puro não funciona assim*/}
                {/*{ a * b} - Forma certa de usar JS puro aqui dentro */}
                {/*<h2>{"muito legal".toLocaleUpperCase()}</h2>*/}
                <p>
                    {/* {{}} - Dupla chave - É um objeto */}
                    {JSON.stringify({nome: 'João', idade: 30})}
                </p>
                
            </div>
        </Layout>
    )
}