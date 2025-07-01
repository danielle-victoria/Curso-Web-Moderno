{/* Aula 4 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Primeiro Componente & Rotas */}
{/* Aula 5 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Entendendo o JSX */}
{/* Aula 11 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Navegação entre Componentes */}

import Link from 'next/link'

/*export default function Inicio(){
    //"<h1>Título</h1>" - Assim não é interpretado como html
    return(
        <div>
            <h1>Fundamentos de Next.Js & React</h1>
            <h2>Vamos estudar esse framework</h2>
        </div>
        
    ) 
}*/


export default function Inicio() {
    return (
        <div>
            <Link href="/estiloso">
                Estiloso
            </Link>
        </div>
    )
}