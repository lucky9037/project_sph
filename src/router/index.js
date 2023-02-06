import Vue from 'vue';
import vueRouter from 'vue-router';
import router from '@/router'
import routes from "@/router/routes";
Vue.use(vueRouter)
import store from '@/store'
export default new vueRouter({
  //配置路由
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition && to.meta.keepAlive) {
      return savedPosition;
    }
    return { x: 0, y:0 };
  },
})

//解决重复点击push问题
//获取原型对象上的push函数
const originalPush = vueRouter.prototype.push
//修改原型对象中的push方法
vueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
router.beforeEach(async (to, from, next)=>{
  let token = store.state.user.token
  let nickName= store.state.user.nickName
  // 有token代表已经登陆了
  // console.log(token)
  if(token){
    // 不能登陆了再次跳转登陆页面
    if(to.path=='/login'){
      next('/home')
    }else{
      //不是登陆页面
      if(nickName){
        next()
      }else{
        try {
          //没有用户信息，派发action去获取
          await store.dispatch('getUserInfo')
          next()
        }catch(error){
          //获取用户信息失败，token失效，重新登陆
          await store.dispatch('loginout')
          next('/login')
        }
      }
    }
    //未登陆
  }else{
    console.log('没登陆')
      next()
  }
})