<template>
  <div id="app">
    <Header></Header>
    <!-- 路由出口 -->
    <router-view></router-view>
    <Footer v-show="this.$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
export default {
  name: 'App',
  mounted() {
    //派发一个action，获取三级联动的数据 只执行一次
    this.$store.dispatch('categoryList')
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>
</style>
