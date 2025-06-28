{/* Aula 9 - Projeto Cadastro - Integração com Banco de Dados(Firestore): Usando Componente */}
{/* Aula 10 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Propriedades de Componentes */}

export default function Cabecalho(props){
    //console.log(props.titulo)
    //Usar parâmetro se for usa o componente em diferentes página que precisem de personalização
    //props é somente leitura -> Para modificá-la tem que manipular o estado(state)
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}