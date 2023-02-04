const funcs = [] //poderia ser 

for (let i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

//let tem "memória"
funcs[2]()  //2
funcs[6]()  //6
funcs[8]()  //8