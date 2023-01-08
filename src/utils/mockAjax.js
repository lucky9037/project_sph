//对axios进行二次封装
import axios from "axios";
// 引入进度条及样式
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

//利用axios对象的方法create，去创建一个axios实例
const requests  = axios.create({
    baseURL:'/mock',  //基础路径，发送请求的时候路径会带着api
    timeout:5000   //代表请求超时的时间
})
// 请求拦截器
requests.interceptors.request.use((config)=>{
    // config:配置对象，对象里有个很重要的属性headers请求头
    nprogress.start()  //进度条开始
    return config;
})
// 响应拦截器
requests.interceptors.response.use((res)=>{
    // 成功的回掉函数
    nprogress.done()  //进度条结束
    return res.data;
},(err)=>{
    //响应失败的回掉函数
    return Promise.reject(new Error('faile'));
})
// 对外暴露
export default requests