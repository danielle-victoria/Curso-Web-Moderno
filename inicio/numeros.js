const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //Verifica se peso1 é um inteiro  //1.0 é inteiro //1.1 não
console.log(Number.isInteger(peso2)) //Verifica se peso2 é um inteiro  

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2)
const media = total/(peso1 + peso2)

console.log(media.toFixed(2))  //toFixed() --> controla a quantidade de casas decimais
console.log(media.toString()) //converte número em string
console.log(media.toString(2)) //converte número em string --> número binário
console.log(typeof media)
console.log(typeof Number)