<!-- Aula 3 - Projeto Calculadora (Vue): Criando Componentes -->

<template>
    <div class="calculator">
        <DisplayComponent/>
        <ButtonComponent/>

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