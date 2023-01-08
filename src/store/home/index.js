// home模块小仓库
// state:仓库存储数据的地方

import {getCategoryList,getBannnerList,getFloorList} from '@/api'
const state ={
    categoryList:[], //三级列表
    bannerList:[],   //轮播图
    floorList:[] //楼梯数据

};
//mutations:修改state的唯一手段
const mutations = {
    GETCATEGORY(state, categoryList) {
        state.categoryList = categoryList;
    },
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList
    },
    FLOORLIST(state,floorList){
        state.floorList = floorList
    }
};
//actions:处理异步，处理业务
const actions = {
    //三级联动列表
   async categoryList({commit}){
        let res = await getCategoryList();
        if(res.code == 200){
            commit('GETCATEGORY',res.data)
        }
    },
    //轮播图数据
    async bannerList({commit}){
       let res = await getBannnerList()
        if(res.code==200){
            commit('BANNERLIST',res.data)
        }
    },
    //获取楼梯数据
    async floorList({commit}){
       let res = await getFloorList()
        if(res.code==200){
            commit('FLOORLIST',res.data)
            console.log(res.data)
        }
    }
};
//getters:类似计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便。
const getters = {};
export default{
    state,
    mutations,
    actions,
    getters
}