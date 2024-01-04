// Aula 8 - Node: Instâncias Únicas Vs Nova Instância

// Uma factory retorna uma bova instância

module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}