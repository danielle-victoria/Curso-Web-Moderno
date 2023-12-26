// Break/Continue -> Influencia nos blocos de repetição

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//break - para a execução do laço e sai dele
//switch, while e for

for(x in nums){
    if(x == 5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

//Continue -> interrompe a execução atual e salta para a próxima
//while e for
for(y in nums){
    if(y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
    
}


//Não é uma estrutura muito interessante a ser seguida
externo: for (a in nums){ // criação de rótulo
    for (b in nums){
        if (a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}

console.log('Fim!')