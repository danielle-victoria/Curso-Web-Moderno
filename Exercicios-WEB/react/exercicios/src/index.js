// Aula 37 - React: Criando Projeto

import React from 'react'
import ReactDOM from 'react-dom/client'
//import Primeiro from './componentes/Primeiro'
import BomDia from './componentes/BomDia'

//ReactDOM.render(<h1>React</h1>, document.getElementById('root'))
/*const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<h1>Projeto React</h1>)*/

// Aula 38 - React: Primeiro Componente
//OBS.: Não pode ter componente com a letra minúscula (import e nome do arquivo -> Maiusculos -> Manter o padrão)
//const root = ReactDOM.createRoot(document.getElementById("root"))
//root.render(<Primeiro/>)

//Aula 39 - React: Componente Com Parâmetro
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BomDia nome="Guilherme" idade={10} />)