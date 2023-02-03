let a = 7;
let b = 94;

// depois da troca... a = 94 e b = 7

let aux; 

aux = a;  //  aux = 7
a = b;    // a = 94
b = aux;  // b = 7

console.log(a)
console.log(b)


/* Outra possibilidade  --> Se não usar ";" o programa não roda para essa possibilidade

[a, b] = [b, a];

console.log(a);
console.log(b);*/