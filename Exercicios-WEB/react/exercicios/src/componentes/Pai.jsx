// Aula 43 - React: Componentes: Pai & Filho #01

import React from "react"
import Filho from "./Filho"

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            <Filho nome="Pedro" sobrenome={props.sobrenome}/>
            <Filho {...props}/>  {/* Herda as propriedades do pai */}
            <Filho {...props} nome="Carla"/>  {/*Sobrescreve as propriedades do pai */}
        </ul>
    </div>

