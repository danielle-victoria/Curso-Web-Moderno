// Aula 43 - React: Componentes: Pai & Filho #01

import React from "react"
//import Filho from "./Filho"
import { childrenWithProps } from "../utils/utils"



{/**export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            <Filho nome="Pedro" sobrenome={props.sobrenome}/>
            <Filho {...props}/>  {/* Herda as propriedades do pai */}
           {/* <Filho {...props} nome="Carla"/>  {/*Sobrescreve as propriedades do pai */}
        {/*</ul>
    </div>*/}

    //Aula 44 - React: Componentes: Pai & Filho #02
export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/*{props.children}*/}

            {/** Transforma vários elementos -> map -> arquivo utils.js*/}
            {                
                childrenWithProps(props)
            }
        </ul>
    </div>

