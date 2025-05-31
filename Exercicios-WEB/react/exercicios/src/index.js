// Aula 37 - React: Criando Projeto

import React from 'react'
import ReactDOM from 'react-dom/client'
import Primeiro from './componentes/Primeiro'

//ReactDOM.render(<h1>React</h1>, document.getElementById('root'))
/*const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<h1>Projeto React</h1>)*/

// Aula 38 - React: Primeiro Componente
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Primeiro/>)