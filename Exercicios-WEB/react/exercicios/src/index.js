// Aula 37 - React: Criando Projeto

import React from 'react'
import ReactDOM from 'react-dom/client'
//import Primeiro from './componentes/Primeiro'
//import BomDia from './componentes/BomDia'
//import { BoaTarde } from './componentes/Multiplos'
//import { BoaNoite } from './componentes/Multiplos'

//ReactDOM.render(<h1>React</h1>, document.getElementById('root'))
/*const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<h1>Projeto React</h1>)*/

// Aula 38 - React: Primeiro Componente
//OBS.: Não pode ter componente com a letra minúscula (import e nome do arquivo -> Maiusculos -> Manter o padrão)
//const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(<Primeiro/>)

//Aula 39 - React: Componente Com Parâmetro
//const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(<BomDia nome="Guilherme" idade={10} />)

//Aula 40 - React: Múltiplos Componentes

//import  BoaTarde, { BoaNoite } from './componentes/Multiplos' //default boa tarde
import { BoaTarde, BoaNoite } from './componentes/Multiplos'
/*const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<div>
    <BoaTarde  nome="Ana"/>
    <BoaNoite nome="Bia"/>
</div>)*/


/*import Multi from './componentes/Multiplos'
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<div>
    <Multi.BoaTarde  nome="Ana"/>
    <Multi.BoaNoite nome="Bia"/>
</div>)*/


/*import Multi, {BoaNoite} from './componentes/Multiplos'
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<div>
    <Multi.BoaTarde  nome="Ana"/>
    <BoaNoite nome="Bia"/>
</div>)*/

//Aula 41 - React: Componente de Classe #01
/*import Saudacao from './componentes/Saudacao'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<div>
    <Saudacao tipo="Bom dia" nome="João" />
</div>)*/

//Aula 43 - React: Componentes: Pai & Filho #01
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<div>
    <Pai nome="Paulo" sobrenome="Silva">
        <Filho nome="Pedro" />
        <Filho nome="Paulo" sobrenome="Silva"/>
        <Filho nome="Carla" sobrenome="Silva"/>
    </Pai>
</div>)



