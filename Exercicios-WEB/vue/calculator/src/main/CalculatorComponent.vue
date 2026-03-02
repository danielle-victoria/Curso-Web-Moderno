<!-- Aula 3 - Projeto Calculadora (Vue): Criando Componentes -->
<!-- Aula 4 - Projeto Calculadora (Vue): Componente Button #01 -->
<!-- Aula 5 - Projeto Calculadora (Vue): Componente Display -->
<!-- Aula 6 - Projeto Calculadora (Vue): Componente Button #02 -->

<template>
    <div class="calculator">
        <DisplayComponent value="1000"/>
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
    components: { ButtonComponent, DisplayComponent},
    methods: {
        clearMemory() {
            //console.log('Limpar Memória!')
        },
        setOperation(operation) {
            //console.log('Operação' + operation)
        },
        addDigit(n) {
            //console.log('Dígito ' + n)
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