//Função sem retorno
function imprimiSoma(a, b){
    console.log(a + b)

}

imprimiSoma(2,3)
imprimiSoma(2) // Not a number NaN
imprimiSoma(2,10,4,5,6,7,8) //Pega apenas os dois primeiros valores e o resto será ignorado
imprimiSoma() //Not a number NaN

//Função com retorno
function soma(a,b = 1){
    return a + b
}

console.log(soma(2,3)) //para imprimir nesse caso é necessário colocar no console.log(por causa do retorno)
console.log(soma(2))