// Aula 39 - React: Componente Com Parâmetro

import React from "react"

//export default () => <h1>Bom dia, Fulano!</h1>
/*export default props =>
    <div>
        <h1>Bom dia, {props.nome}! Sua idade é {props.idade} anos.</h1>
        <h2>Até breve!</h2>
    </div> */


    //Opção com array
export default props => [
    <h1 key='h1'>Bom dia, {props.nome}! Sua idade é {props.idade} anos.</h1> ,
    <h2 key='h2'>Até breve!</h2>
  
]
        

//h1 e h2 sem nada envolvendo eles.
//import React, {Fragment} from "react"
/*export default props =>
    <Fragment>
        <h1>Bom dia, {props.nome}! Sua idade é {props.idade} anos.</h1>
        <h2>Até breve!</h2>
    </Fragment> */
    


    //Melhores opções: envolver com <div> ou usar o Fragment(opção sem envolver)