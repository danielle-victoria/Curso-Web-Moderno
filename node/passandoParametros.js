// Aula 12 - Node: Passando Parâmetros entre Módulos

module.exports = function(...nomes){
    return nomes.map(nome => `Boa Semana ${nome}`)
}