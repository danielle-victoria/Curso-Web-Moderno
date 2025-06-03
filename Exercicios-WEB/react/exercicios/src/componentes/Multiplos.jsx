// Aula 40 - React: Múltiplos Componentes

import React from "react"

export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>

export const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>

//export default BoaTarde

//export default {BoaTarde, BoaNoite} 

// ou

//export {BoaTarde, BoaNoite}
