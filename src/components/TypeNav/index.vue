<template>
  <div>
    <!-- 商品分类导航 -->
    <div class="type-nav">
      <div class="container">
       <div @mouseleave="leaveIndex" @mouseenter="enterShow">
         <h2 class="all">全部商品分类</h2>
          <!--三级联动 过渡动画-->
          <transition name="sort">
            <div class="sort" v-show = 'show'>
              <div class="all-sort-list2" @click="goSearch">
                <div class="item" :class="{cur:currentIndex==index}"  v-for="(item,index) in categoryList" :key='item.categoryId'>
                  <h3 @mouseenter="changeIndex(index)">
                    <a :data-categoryName = 'item.categoryName' :data-category1Id = 'item.categoryId' href="#">{{item.categoryName}}</a>
                  </h3>
                  <!--二级三级列表-->
                  <div class="item-list" :style="{display:currentIndex==index?'block':'none'}">
                    <div class="subitem" v-for="items in item.categoryChild" :key="items.categoryId">
                      <dl class="fore">
                        <dt>
                          <a href="#" :data-categoryName = 'items.categoryName' :data-category2Id = 'items.categoryId'>{{ items.categoryName }}</a>
                        </dt>
                        <dd v-for="itemson in items.categoryChild" :key="itemson.categoryId">
                          <em>
                            <a href="#" :data-categoryName = 'itemson.categoryName' :data-category3Id = 'itemson.categoryId'>{{itemson.categoryName}}</a>
                          </em>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
       </div>
        <nav class="nav">
          <a href="###">服装城</a>
          <a href="###">美妆馆</a>
          <a href="###">尚品汇超市</a>
          <a href="###">全球购</a>
          <a href="###">闪购</a>
          <a href="###">团购</a>
          <a href="###">有趣</a>
          <a href="###">秒杀</a>
        </nav>
      </div>

    </div>
  </div>
</template>
<script>
import {mapState} from "vuex";
import throttle from 'lodash/throttle';
export default {
  name:'TypeNav',
  components: {},
  data() {
    return {
      currentIndex:-1, //初始三级背景索引值
      show:true //三级联动显示隐藏
    };
  },
  computed:{
    ...mapState({
      categoryList:state=>state.home.categoryList
    })
  },
  mounted() {
    if(this.$route.path!='/home'){
      this.show = false
    }
  },
  methods: {
    //鼠标进入(节流)
    changeIndex:throttle(function (index){
      this.currentIndex = index
      // console.log(index)
    },50),
    // 鼠标离开
    leaveIndex(){
      this.currentIndex= -1
      if(this.$route.path!='/home'){
        this.show = false
      }
    },
    // 鼠标进入
    enterShow(){
      this.show = true
    },
    // 跳转到搜索页面，事件委托，编程式导航
    goSearch(event){
      // 获取节点
      // console.log(event.target)
      // 节点里有个属性叫dataset，可以获取节点的自定义属性和属性值
      let {categoryname,category1id,category2id,category3id} = event.target.dataset
      if(categoryname){
        // 整理路由跳转的参数
        let location = {name:'search'}
        let query = {categoryName:categoryname}
        if(category1id){
          query.category1id = category1id
        }else if(category2id){
          query.category2id = category2id
        }else{
          query.category3id = category3id
        }
        //合并参数 如果有params参数 也需要带过去
        if(this.$route.params){
          location.query = query
          location.params = this.$route.params
        }
        // 路由跳转
        this.$router.push(location)
      }
    }
  }
};
</script>
<style scoped lang="less">
.type-nav{
  border-bottom: 2px solid #e1251b;
  .container{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;
    .all{
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      color: #fff;
      line-height: 45px;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
    }
    .nav{
      a{
        color: #333;
        font-size: 14px;
        margin: 0 22px;
        height: 45px;
        line-height: 45px;
      }
    }
    .sort{
      position: absolute;
      display: flex;
      top: 45px;
      left: 0;
      width: 210px;
      height: 461px;
      background: #fafafa;
      .all-sort-list2{
        width: 210px;
        .item{
          display: flex;
          h3{
            padding: 0 20px;
            overflow: hidden;
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            margin: 0;
            a{
              color: #666;
            }
          }
          .item-list{
            width: 734px;
            min-height: 461px;
            position: absolute;
            left: 210px;
            top: 0;
            background: #fafafa;
            border: 1px solid #ddd;
            .subitem{
              padding: 0 4px 0 8px;
              float: left;
              width: 650px;
              dl{
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;
                &.fore {
                  border-top: 0;
                }
                dt{
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 600;
                }
                dd{
                  float: left;
                  //width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;
                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
          //&:hover{
          //  .item-list {
          //    display: block;
          //  }
          //}
        }
        .cur{
          background: skyblue;
        }
      }
    }
    //根据类名设置过渡动画
    .sort-enter{
      height: 0;
    }
    .sort-enter-to{
      height: 461px;
    }
    .sort-enter-active{
      transition: all .5s linear;
    }
  }
}
</style>