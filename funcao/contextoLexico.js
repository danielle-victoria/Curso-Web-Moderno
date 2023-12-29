// Aula 16 - Funções: Contexto Léxico 

const valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()

//Procura o escopo global onde ela foi definida