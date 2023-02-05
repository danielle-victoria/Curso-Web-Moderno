console.log('01)', '1' == 1) //Comparação do valor -> Não leva em consideração o tipo
console.log('02)' , '1' === 1) //Estritamente igual -> Leva em consideração o tipo
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)//Estritamente diferente -> Leva em consideração o tipo

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0) // 1 de Janeiro de 1970
const d2 = new Date(0)
//Mesma saída, comparando endereços de memória
console.log('09)', d1 === d2)  //false
console.log('10)', d1 == d2)   //false
console.log('11)', d1.getTime() == d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)

//OBS.: Melhor usar "==="

