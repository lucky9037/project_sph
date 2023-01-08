// 引入mockjs模块
import Mock from 'mockjs'
//引入json数据
import banner from './banner.json'
import floor from './floor.json'

Mock.mock('/mock/banner',{code:200,data:banner}); //轮播图数据
Mock.mock('/mock/floor',{code:200,data:floor}); //楼梯数据

