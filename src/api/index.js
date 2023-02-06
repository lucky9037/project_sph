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
//获取搜索页面数据
export const getSearchList = (params)=>{
    return requests({
        url:'list',
        method:'POST',
        data:params
    })
}
//获取注册验证码
export const getReqCode = (phone)=>{
    return requests({
        url:`/user/passport/sendCode/${phone}`,
        method:'GET'
    })
}
// 注册
export const reqRegister = (data)=>{
    return requests({
        url:'user/passport/register',
        method:'POST',
        data:data
    })
}
//登陆
export const resLogin=(data)=>{
    return requests({
        url:'user/passport/login',
        method:'POST',
        data,
    })
}
// 获取用户信息
export const reqUserInfo = (params)=>{
    return requests({
        url:'user/passport/auth/getUserInfo',
        method:'GET',
        params:params
    })
}
// 退出登陆

export const reqLoginout= (params)=>{
    return requests({
        url:'user/passport/logout',
        method:'GET',
        params:params
    })
}
//获取商品详情
export const reqDeatil= (skuId)=>{
    return requests({
        url:`item/${skuId}`,
        method:'GET'
    })
}