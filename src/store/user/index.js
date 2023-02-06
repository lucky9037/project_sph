import {getReqCode, reqRegister, resLogin, reqUserInfo, reqLoginout} from '@/api';
const state = {
    code:"",
    token: localStorage.getItem("TOKEN"),
    //用户名
    nickName: ''
};
const mutations = {
    GETCODE(state,code){
        state.code =code
    },
    LOGIN(state,token) {
        state.token = token
    },
    SET_USERINFO(state, nickName){
        state.nickName = nickName;
    },
    CLEAR(state,nickName,token){
        state.token = ''
        state.nickName = ''
        localStorage.removeItem('TOKEN')
    }

};
const actions = {
    //验证码
   async getCode({commit},phone){
    let res =await getReqCode(phone);
    if(res.code==200){
        commit('GETCODE',res.data)
        return 'ok'
    }else{
        return Promise.reject();
    }
    },
    //注册成功
    async register({commit},obj){
       let res = await reqRegister(obj);
       if(res.code==200){
            return 'ok'
       }else{
           // 注册失败
           return Promise.reject(new Error(res.message))
       }
    },
    // 登陆
    async login({commit},data){
       let res  = await resLogin(data)
        if(res.code==200){
            commit('LOGIN',res.data.token)
            localStorage.setItem('TOKEN',res.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error(res.message))
        }
    },
    // 获取用户信息
    async getUserInfo({commit,data}){
       let res =await reqUserInfo()
        if (res.code == 200) {
            commit('SET_USERINFO', res.data.nickName);
            return 'ok';
        }
    },
    // 退出登陆
     async loginout({commit}){
       let res = await reqLoginout()
         if(res.code==200){
             commit('CLEAR')
             return 'ok'
         }else{
             return Promise.reject(new Error(res.message))
         }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}