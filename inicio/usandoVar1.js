//O bloco nesse contexto não fará muita diferença
{ 
    { 
        { 
            { 
                var sera = 'Será???'
                console.log(sera) 
            } 
        } 
    } 
}
//Dentro ou for do bloco a variável "sera" é visível desde que não seja uma função
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local) //Não é possível acessar a variável "local"