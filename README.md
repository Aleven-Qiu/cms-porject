# cms-porject  一个基于后台系统的框架

##技术栈： VUE2.0+Webpack2.0+vue-router+es6+vue-loader+vuex+babel

###使用知识点：
-vue.js 轻量级mvvm框架
-webpack 前端自动话打包工具
-vue-router vue路由
-vue-loader vue组件化开发插件
-vuex 前端状态管理 类式于flux 和 radux
-babel es6转译工具，用最前言的javascript做前端开发

***

>- vue-loader/
  + package.json //npm配置文件
  + index.html //入口html
  - node_modules //npm加载的模块
  - build //webpack 配置文件
    + webpack.base.config.js //基本配置
    + webpack.dev.config.js //开发环境
    + webpack.product.config.js //生产环境
  - src //开发资源目录
    - assets //一些资源
      + css  
      + js
      + img
    - components //vue组件
      + home.vue 
      + index.vue
      + user.vue
      + userDetails.vue
  -vuex  //状态等管理
    -actions  
      +indexActions.js
      ...
    -modles
      +indexModles.js
      ...
    +getters.js
    +mutation-types.js
    +store.js
    + app.vue //布局文件
    + main.js  //入口文件
    + filter.js //vue的过滤器
    + router.js //vue路由插件
