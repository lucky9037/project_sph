const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer: {
    host: 'localhost',
  }
})
// module.exports = {
//   // 关闭eslint
//   lintOnSave:false
// }