import requests from "@/utils/requset";

export const getCategoryList = (params)=>{
    return requests({
        url:'/product/getBaseCategoryList',
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