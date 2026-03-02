<!-- Aula 3 - Projeto Calculadora (Vue): Criando Componentes -->
<!-- Aula 4 - Projeto Calculadora (Vue): Componente Button #01 -->

<template>
    <div class="calculator">
        <DisplayComponent/>
        <ButtonComponent label="AC" triple/>
        <ButtonComponent label="/" operation/>
        <ButtonComponent label="7" />
        <ButtonComponent label="8" />
        <ButtonComponent label="9"/>
        <ButtonComponent label="*" operation/>
        <ButtonComponent label="4" />
        <ButtonComponent label="5" />
        <ButtonComponent label="6" />
        <ButtonComponent label="-" operation/>
        <ButtonComponent label="1" />
        <ButtonComponent label="2" />
        <ButtonComponent label="3" />
        <ButtonComponent label="+" operation/>
        <ButtonComponent label="0" double/>
        <ButtonComponent label="." />
        <ButtonComponent label="=" operation/>

    </div>
</template>

<script>
import DisplayComponent from '../components/DisplayComponent '
import ButtonComponent from '../components/ButtonComponent'


export default {
    components: { ButtonComponent, DisplayComponent}
}
</script>

<style>

.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;
    
    display: grid;
    grid-template-columns: repeat, (4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}

</style>