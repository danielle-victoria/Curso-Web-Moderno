<!-- Aula 3 - Projeto Calculadora (Vue): Criando Componentes -->
<!-- Aula 4 - Projeto Calculadora (Vue): Componente Button #01 -->
<!-- Aula 5 - Projeto Calculadora (Vue): Componente Display -->
<!-- Aula 6 - Projeto Calculadora (Vue): Componente Button #02 -->
<!-- Aula 7 - Projeto Calculadora (Vue): Implementação da Lógica -->

<template>
    <div class="calculator">
        <DisplayComponent :value="displayValue"/>
        <ButtonComponent label="AC" triple @onClick="clearMemory"/>
        <ButtonComponent label="/" operation @onClick="setOperation"/>
        <ButtonComponent label="7"  @onClick="addDigit"/>
        <ButtonComponent label="8" @onClick="addDigit"/>
        <ButtonComponent label="9" @onClick="addDigit"/>
        <ButtonComponent label="*" operation @onClick="setOperation"/>
        <ButtonComponent label="4" @onClick="addDigit"/>
        <ButtonComponent label="5" @onClick="addDigit"/>
        <ButtonComponent label="6" @onClick="addDigit"/>
        <ButtonComponent label="-" operation @onClick="setOperation"/>
        <ButtonComponent label="1" @onClick="addDigit"/>
        <ButtonComponent label="2" @onClick="addDigit"/>
        <ButtonComponent label="3" @onClick="addDigit"/>
        <ButtonComponent label="+" operation @onClick="setOperation"/>
        <ButtonComponent label="0" double @onClick="addDigit"/>
        <ButtonComponent label="." @onClick="addDigit"/>
        <ButtonComponent label="=" operation @onClick="setOperation"/>

    </div>
</template>

<script>
import DisplayComponent from '../components/DisplayComponent '
import ButtonComponent from '../components/ButtonComponent'


export default {
    data: function() {
        return {
            displayValue: "0",
            clearDisplay: false,
             operation: null,
             values: [0, 0],
             current: 0
        }
    },
    components: { ButtonComponent, DisplayComponent},
    methods: {
        clearMemory() {
            //console.log('Limpar Memória!')

            Object.assign(this.$data, this.$options.data())
        },
        setOperation(operation) {
            //console.log('Operação' + operation)

            if(this.current === 0) {
                this.operation = operation
                this.current = 1
                this.clearDisplay = true
            } else {
                const equals = operation === "="
                const currentOperation = this.operation

                //const values = [...this.values]
                try {
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}`)

                    if (isNaN(this.values[0]) || !isFinite(this.values[0])) {
                        this.clearMemory()
                        return
                    }
                    
                } catch(e) {
                    //values[0] = this.values[0]
                    this.$emit('onError', e)
                }

               this.values[1] = 0

                //this.displayValue = values[0].toString()
                this.displayValue = this.values[0]
                this.operation = equals ? null : operation
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals
                //this.values = values
            }
        },
        addDigit(n) {
            //console.log('Dígito ' + n)

            if(n === "." && this.displayValue.includes('.')) {
                return
            }

            const clearDisplay = this.displayValue === "0"
                || this.clearDisplay
            const currentValue = clearDisplay ? "" : this.displayValue
            const displayValue = currentValue + n
            
            this.displayValue = displayValue
            this.clearDisplay = false

            //Alternativa 1

            this.values[this.current] = displayValue

            // Alternativa 2
            /*if(n !== ".") {
                const i = this.current
                const newValue = parseFloat(displayValue)
                this.values[i] = newValue
                //console.log(this.values)
            }*/
        }
    }
}
</script>

<style>

.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;
    
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}

</style>