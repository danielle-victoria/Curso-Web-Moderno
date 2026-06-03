/* Aula 2 - Projeto Monty Hall (Vue) */

//import {createApp} from 'vue'
import Vue from 'vue'
import App from './App'


/*new Vue({  
    render(createElement) {
       return createElement(App)
  }
}).$mount('#app')*/


new Vue({
  render: h => h(App)
}).$mount('#app')


//createApp(App).mount('#app')




/*import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')*/


