// par nome/valor

const saudacao = 'Opa' //contexto léxico 1
// contexto léxico 
//  -> Local onde a variável foi definida fisicamnete no código (contexto)
//  -> palavra (léxico)

function exec(){
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Maria',
    idade: 20,
    peso: 50,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }

}

console.log(saudacao)
console.log(exec())
console.log(cliente)