//Hoisting em JavaScript é um comportamento padrão de mover a declaração da variável para o top
//hoisting --> "içamento de uma variável" 
/*console.log('a = ', a)
var a = 2
console.log('a = ', a)*/

//hoisting --> "içamento de uma variável"
var a
console.log('a =', a)
a = 2 
console.log(a)

/*function teste(){
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

teste()
console.log('a =', a) //Erro -> Fora do escopo*/

//O efeito de hoisting não ocorre com o tipo let
//Erro
/*console.log('b =', b)
let b = 2
console.log('b =', b)*/