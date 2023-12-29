// Aula 8 - Funções: Arrow - 2

function Pessoa (){
    this.idade = 0 

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa


//this não varia de acordo com quem está chamando