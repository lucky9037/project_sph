import Home from "@/pages/Home/index.vue";
import Login from "@/pages/Login/index.vue";
import Register from "@/pages/Register/index.vue";
import Search from "@/pages/Search/index.vue";
import Detail from "@/pages/Detail/index.vue";

export default [
{
    path:'/',
    redirect:'/home',
    meta:{show:true}
},
{
    path:'/home',
    component:Home,
    meta:{show:true}
},
{
    path:'/login',
    component:Login,
    meta:{show:false}
},
{
    path:'/register',
    component:Register,
    meta:{show:false}
},
{
    path:'/search/:keyWords?',
    component:Search,
    meta:{show:true},
    name:'search'
},
{
    path:'/detail/:skuid?',
    component:Detail,
    meta:{show:false}
}]