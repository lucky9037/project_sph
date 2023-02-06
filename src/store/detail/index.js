import {reqDeatil} from "@/api";

const state = {
    goodInfo:{}
};
const mutations = {
    GOODINFO(state,goodInfo){
        state.goodInfo =goodInfo
    },
};
const actions = {
    //获取详情
    async getDetail({commit},skuId){
        let res =await reqDeatil(skuId);
        if(res.code==200){
            console.log(res)
            commit('GOODINFO',res.data)
            return 'ok'
        }else{
            return Promise.reject();
        }
    },
};
// 简化数据
const getters = {
    categoryView(state){
        return state.goodInfo.categoryView||{}
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}