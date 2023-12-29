// Aula 6 - Funções: This e Bind - 2

function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa