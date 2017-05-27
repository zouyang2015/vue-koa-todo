// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui' // 引入element-ui
import 'element-ui/lib/theme-default/index.css'   // 使用 CSS
import 'animate.css/animate.min.css'
import VueRouter  from 'vue-router'
import Login from './components/Login/Login'// 引入Login组件
import TodoList from './components/Todo/TodoList'// 引入Login组件

Vue.config.productionTip = false

Vue.use(ElementUI) // Vue全局使用
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history', // 开启HTML5的history模式，可以让地址栏的url长得跟正常页面跳转的url一样。
  routes:[
    {
       path: '/',  // 默认首页打开是登录页
       component: Login
    },
    {
      path: '/todolist',
      component: TodoList
    },
    {
      path: '*',
      redirect: '/' // 输入其他不存在的地址自动跳回首页
    }
  ]
})



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router, // 启用router
  template: '<App/>',
  components: { App }
})
