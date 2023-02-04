//Precedência é do escopo menor
//var numero = 1
let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero) //não ocorre sobrescrita



//                  let         x           var
//           escopo de bloco              escopo global
//           escopo de função             escopo de função
//           escopo global
