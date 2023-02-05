let num1 = 1
let num2 = 2

num1++ //pós-fixada
console.log(num1)
--num1 //pré-fixada
console.log(num1)

//Na hora da comparação, num1 = 2 e num2 = 2
//Após a comparação, num1 = 2 e num2 = 1
console.log(++num1 === num2--) //true
console.log(num1 === num2) //false