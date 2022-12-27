import Vue from 'vue'
import App from './App.vue'
import router from '@/router';
var s = 200
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
