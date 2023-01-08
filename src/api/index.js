import requests from "@/utils/requset";
import mockServe from "@/utils/mockAjax";
//获取三级联动数据
export const getCategoryList = (params)=>{
    return requests({
        url:'/product/getBaseCategoryList',
        method:'GET',
        params:params
    })
}
// 模拟数据
//获取轮播图数据
export const getBannnerList = (params)=>{
    return mockServe({
        url:'/banner',
        method:'GET',
        params:params
    })
}
//获取楼梯数据
export const getFloorList = (params)=>{
    return mockServe({
        url:'/floor',
        method:'GET',
        params:params
    })
}
// module.export = {
//     getList(params){
//         return requests({
//             url:'/product/getBaseCategoryList',
//             method:'GET',
//             params:params
//         })
//     }
// }