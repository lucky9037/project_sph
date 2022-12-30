const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    proxy: { // 配置跨域
      '/api':{
        target:'http://gmall-h5-api.atguigu.cn', //请求后台接口
        changeOrigin:true, // 允许跨域
      }
    },
    host: 'localhost',
  }
})
