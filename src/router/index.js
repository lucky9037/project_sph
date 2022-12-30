import Vue from 'vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter)

import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';


export default new vueRouter({
  //配置路由
  routes: [
    {
      path:'/home',
      component:Home,
      meta:{show:true}
    },
    {
      path:'/login',
      component:Login,
      meta:{show:false}
    },
    {
      path:'/register',
      component:Register,
      meta:{show:false}
    },
    {
      path:'/search/:keyWords?',
      component:Search,
      meta:{show:true},
      name:'search'
    },
    {
      path:'/',
      redirect:'/home',
      meta:{show:true}
    },
  ],

})
//解决重复点击push问题
//获取原型对象上的push函数
const originalPush = vueRouter.prototype.push
//修改原型对象中的push方法
vueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}