// Aula 6 - ESNext: Tagged Template - 2

//Aplica uma máscara nos valores

function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.90
const precoParcela = 11
console.log(`1x de ${preco} ou 3x de ${precoParcela}`)
console.log(real `1x de ${preco} ou 3x de ${precoParcela}`)