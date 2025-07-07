{/* Aula 27 - Projeto Cadastro - Integração com Banco de Dados(Firestore):  Classe Cliente */}

export default class Cliente {
    /*private id: string
    private nome: string
    private idade: number*/

    #id: string    // private  #
    #nome: string  //private   #
    #idade: number //private   #


    constructor(nome: string, idade: number, id: string = null){
        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }


    static vazio(){
        return new Cliente('',0)
    }

    get id(){
        return this.#id
    }
    get nome(){
        return this.#nome
    }
    get idade(){
        return this.#idade
    }

    
}