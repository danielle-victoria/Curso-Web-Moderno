// Aula 13 - Funções: Callback - 3

// Exemplo de callback no browser

// Registro da função callback
document.getElementsByTagName('body')[0].onclick =  function (e) {
    console.log('O evento ocorreu!')
}