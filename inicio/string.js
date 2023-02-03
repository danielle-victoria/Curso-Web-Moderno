const escola = "Cod3r"

console.log(escola.charAt(4)) //retorna caracter que está na posição 4.
console.log(escola.charAt(5)) //retorna vazio.
console.log(escola.charCodeAt(3)) //retorna o valor do caracter na tabela ASCII.
console.log(escola.indexOf('3')) //retorna a posição que o caracter está.

console.log(escola.substring(1)) //retorna a string a partir da posição 1 até o final.
console.log(escola.substring(0,3))//retorna a string da posição 0 até a 3.

console.log('Escola '.concat(escola).concat("!")) //concatena Escola, Cod3r e !.
console.log('Escola ' + escola + "!") //concatena Escola, Cod3r e !.

console.log(escola.replace(3, 'e')) //(/\d\, 'e') //substitui todos os dígitos(números) por "e".
console.log(escola.replace(/\w/g, 'e')) //substitui todas as letras e dígitos por 'e'.

//Converter string em um array

console.log('Ana,Maria,Pedro'.split(',')) //criar um array com três elementos
//ou//
console.log('Ana,Maria,Pedro'.split(/,/))
