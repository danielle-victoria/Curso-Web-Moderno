/* Aula 3 - React - Projeto Calculadora: Componente Button #01 */


import React from "react"
import './Button.css'


export default props => {
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    
    return (
        <button 
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>
    )
}


/*export default props => {
    let classes = 'button'
    classes +=  props.operation ? 'operation' : ''
    classes +=  props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
    
    return (
        <button
            onClick={e => props.click && props.click(props.label)}
            className={classes}>
            {props.label}
        </button>

    )
}*/




/*export default props => (
  <button
    className={`
        button
        ${props.operation} ? 'operation' : ''}
        ${props.double} ? 'double' : ''}
        ${props.triple} ? 'triple' : ''}
    `}
    onClick={e => props.click && props.click(props.label)} // props.lable
  >
    {props.label}
  </button>
)
   */