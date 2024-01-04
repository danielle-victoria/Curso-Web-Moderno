// Aula 24 - Node: Process - Entrada e Saída Padrão

const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)


// Terminal -> Execução -> entrar na pasta node e rodar node entradaESaida.js

if (anonimo){
    process.stdout.write('Fala Anônimo!\n')
    process.exit() //matar o processo
}else{
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\r\n', '')

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}