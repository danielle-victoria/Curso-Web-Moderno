{/* Aula 4 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Primeiro Componente & Rotas */}
{/* Aula 5 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Entendendo o JSX */}
{/* Aula 11 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Navegação entre Componentes */}
{/* Aula 13 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Componente Navegador */}
{/* Aula 14 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Navegação Simples */}
{/* Aula 15 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Navegação Dinâmica */}
{/* Aula 16 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Componente com Estado */}
import Navegador from '../components/Navegador'

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
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador texto ="Estiloso" destino="/estiloso"/>
            <Navegador texto ="Exemplo" destino="/exemplo" cor='#9400d3'/>
            <Navegador texto ="JSX" destino="/jsx" cor='crimson'/>
            <Navegador texto ="Navegação #01" destino="/navegacao/" cor='green'/>
            <Navegador texto ="Navegação #02" destino="/cliente/sp-2/123" cor='blue'/>
            <Navegador texto ="Componente com Estado" destino="/estado" cor='pink'/>
        </div>
    )
}