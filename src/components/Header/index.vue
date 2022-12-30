<template>
  <div id="header">
    <header>
      <!-- 头部第一行 -->
      <div class="top">
        <div class="container">
          <div class="loginList">
            <p>尚品汇欢迎你!</p>
            <p>
              <span>请</span>
              <router-link to="/login">登录</router-link>
              <router-link
                to="/register"
                class="register"
              >免费注册</router-link>
            </p>
          </div>
          <div class="typeList">
            <a href="###">我的订单</a>
            <a href="###">我的购物车</a>
            <a href="###">我的尚品汇</a>
            <a href="###">尚品汇会员</a>
            <a href="###">企业采购</a>
            <a href="###">关注尚品汇</a>
            <a href="###">合作招商</a>
            <a href="###">商家后台</a>
          </div>
        </div>

      </div>
      <!-- 头部第一行(搜索) -->
      <div class="bottom">
        <h1 class="logoArea">
          <router-link
            to="/home"
            class="logo"
          >
            <img src="./images/logo.png"></router-link>
        </h1>
        <div class="searchArea">
          <form
            class="searchForm"
          >
            <input
              v-model="keyWords"
              type="text"
              id="autocomplete"
              class="input-error input-xxlarge"
            />
            <button class="sui-btn btn-xlarge btn-danger" @click="goSearch">搜索</button>
          </form>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      keyWords:''
    };
  },
  mounted () { },
  methods: {
    // 去搜索
    goSearch(){
      //字符串
      // this.$router.push('/search/'+this.keyWords)
      //模版字符串
      // this.$router.push(`/search/${this.keyWords}`)
      // 路由穿参
      //query穿参
      // this.$router.push({path:'/search',query:{keyWords:this.keyWords}})
      // params传参
      this.$router.push({name:'search',params:{keyWords:this.keyWords}})
      // 共同穿参
      // this.$router.push({name:"search",params:{keyWords:this.keyWords},query:{keyWords:this.keyWords}})
    }
  }
}
</script>
<style lang=less scoped>
#header {
  .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;
    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      .loginList {
        float: left;
        p {
          float: left;
          margin-right: 10px;
          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }
      .typeList {
        float: right;
        a {
          padding: 0 10px;
          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }
  .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    .logoArea {
      float: left;
      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }
    .searchArea {
      float: right;
      margin-top: 35px;
      .searchForm {
        overflow: hidden;
        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          &:focus {
            outline: none;
          }
        }
        button {
          border: none;
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          color: #fff;
          cursor: pointer;
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>