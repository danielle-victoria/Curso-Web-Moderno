//Aula 41 - React: Componente de Classe #01

import React, {Component} from "react"

export default class Saudacao extends Component {

    state = {
        //  Fixo
       /* tipo: "Fala",
        nome: "Pedro"*/

        tipo: this.props.tipo,
        nome: this.props.nome

    }

    //Aula 42 - React: Componente de Classe #02
    constructor(props){
        super(props)

        this.setTipo = this.setTipo.bind(this)
        this.Nome = this.SetNome.bind(this)
    }
    setTipo(e){
        /*let i = setInterval(() => {
            this.setState({tipo: ++i})
        }, 1000)*/
        this.setState({tipo: e.target.value})

    }

    SetNome(e){
        this.setState({nome: e.target.value})

    }
    /*render(){
        const {tipo, nome} = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr/>
                <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)} />
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.SetNome(e)} />
            </div>
        )
    }*/

    //Aula 42 - React: Componente de Classe #02
    render(){
        const {tipo, nome} = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr/>
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..." value={nome} onChange={this.SetNome} />
            </div>
        )
    }
}