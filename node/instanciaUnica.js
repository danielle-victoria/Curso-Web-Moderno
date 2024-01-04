// Aula 8 - Node: Instâncias Únicas Vs Nova Instância

// node faz cache

module.exports = {
    valor: 1,
    inc(){
        this.valor++
    }
}