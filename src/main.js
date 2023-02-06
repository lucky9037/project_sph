import Vue from 'vue'
import App from './App.vue'
import router from '@/router';
import store from '@/store'
//三级联动组件
import TypeNav from "@/components/TypeNav";
//轮播图数据
import Carousel from  "@/components/Carousel"
//分页数据
import Pagination from "@/components/Pagination"
//mock模拟数据
import "@/mock/mockServe";
//引入swiper样式
import "swiper/css/swiper.css"
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
Vue.component(Pagination.name,Pagination)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  beforeCreate() {
    //配置全局事件总线
    Vue.prototype.$bus = this;
    //通过Vue.prototype原型对象,将全部请求函数挂载到原型对象身上[VC:就可以使用请求函数]
    // Vue.prototype.$http = http;
  },
  router,
  store
}).$mount('#app')
