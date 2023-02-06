// search模块小仓库
// state:仓库存储数据的地方
import {getSearchList} from '@/api'
const state ={
    searchInfo:{}, //搜索商品数据
};
//mutations:修改state的唯一手段
const mutations = {
    GETSEARCHINFO(state,searchInfo){
        state.searchInfo = searchInfo
    }
};
//actions:处理异步，处理业务
const actions = {
    async getSearchInfo({commit},searchParams){
        let res = await getSearchList(searchParams)
        console.log(res)
        if(res.code==200){
            commit('GETSEARCHINFO',res.data)
        }
    }
}
//getters:类似计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便。
const getters = {
    goodsList(state){
        return state.searchInfo.goodsList||[]
    },
    attrsList(state){
        return state.searchInfo.attrsList||[]
    },
    trademarkList(state){
        return state.searchInfo.trademarkList||[]
    },
};
export default {
    state,
    mutations,
    actions,
    getters
}