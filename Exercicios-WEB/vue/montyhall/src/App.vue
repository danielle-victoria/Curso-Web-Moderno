<!-- Aula 2 - Projeto Monty Hall (Vue)  -->

<!-- CTRL + Space - Cria a estrutra básica  -->

<!-- Site de gradientes: https://uigradients.com/#Hersheys -->


<template>
    <div id="app">
            <h1>Problema de Monty Hall</h1>
            <Gift/>
    </div>

</template>

<script>
import Gift from './components/Gift-gift'

export default {
    name: 'App',
    components: { Gift }    
}
</script>

<style>

  * {
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
  }

  body {
      color: #FFF;
      background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));
      
  }

  #app {
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  #app h1 {
    border: 1px solid #000;
    background-color: #004;
    padding: 20px;
    margin-bottom: 60px;
  }

</style>
