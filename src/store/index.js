import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)

import home from './home'
import search from './search'
import user from './user'
import detail from './detail'
//对外暴露store的一个实例子
export default new Vuex.Store({
    modules: {
        home,
        search,
        user,
        detail
    }
})