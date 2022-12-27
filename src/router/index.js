import Vue from 'vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter)

import Home from '@/pages/Home';
import Login from '@/pages/Login';
export default new vueRouter({
  //配置路由
  routes: [
    {
      path:'/home',
      component:Home    
    },
    {
      path:'/login',
      component:Login    
    }
  ]
})