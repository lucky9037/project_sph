<template>
  <div>
     <!--三级联动-->
    <TypeNav></TypeNav>
     <!--轮播图-->
    <list-container></list-container>
    <!--今日推荐-->
    <Recommend></Recommend>
    <!-- 商品排行 -->
    <Rank></Rank>
    <!-- 猜你喜欢 -->
    <like></like>
    <!-- 楼层 -->
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list = 'floor'></Floor>
    <!-- 商标 -->
    <Brand></Brand>
  </div>
</template>

<script>
import {mapState} from "vuex";
import ListContainer from "@/pages/Home/listContainer";
import Recommend from "@/pages/Home/recommend";
import Rank from "@/pages/Home/rank";
import Like from "@/pages/Home/like"
import Floor from "@/pages/Home/Floor"
import Brand from "@/pages/Home/Brand"
export default {
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  data() {
    return {};
  },
  computed:{
    ...mapState({floorList:state=>state.home.floorList})
  },

  mounted() {
    this.$store.dispatch('floorList')
    // 获取用户信息
    this.$store.dispatch('getUserInfo')
  },
  methods: {

  }
};
</script>
<style scoped>
</style>