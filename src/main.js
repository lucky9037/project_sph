import Vue from 'vue'
import App from './App.vue'
import router from '@/router';
import store from '@/store'
//三级联动组件
import TypeNav from "@/components/TypeNav";
//轮播图数据
import Carousel from  "@/components/Carousel"
//mock模拟数据
import "@/mock/mockServe";
//引入swiper样式
import "swiper/css/swiper.css"
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
