<template>
  <div>
      <div class="swiper-container" ref="mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(list,index) in list" >
            <img :src="list.imgUrl">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
  </div>
</template>
<script>
import Swiper from "swiper";
export default {
  name:'Carousel',
  props:['list'],
  components: {},
  data() {
    return {};
  },
  watch:{
    list:{
      immediate:true,
      handler(){
        this.$nextTick(()=>{
          //轮播图
          var mySwiper = new Swiper (this.$refs.mySwiper, {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              // 点击小球的时候也切换图片
              clickable:true
            },
            // 前进和后退按钮
            navigation:{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          })
        })
      }
    }
  },
  mounted() {
  },
  methods: {}
};
</script>
<style scoped>
</style>