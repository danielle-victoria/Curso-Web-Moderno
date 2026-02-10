// Aula 2 - Projeto Calculadora (Vue): Criando Projeto

import Vue from "vue"
import App from "./App"

/*new Vue({
    el: '#app',
    render(createElement){
        return createElement(App)
    }
})*/


new Vue({
    render: h => h(App)
}).$mount("#app")