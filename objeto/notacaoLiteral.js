// Aula 5 - Objeto: Notação Literal

const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c} // permite mudar o nome do atributo
const obj2 = { a, b, c}
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

// Nova notação
const obj4 = {[nomeAttr] : valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function(){
        // ...
    },
    funcao2(){  // Nova notação para definir uma função dentro de um objeto
        //....
    }
}

console.log(obj5)
