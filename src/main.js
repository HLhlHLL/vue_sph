import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入三级联动组件
import TypeNav from '@/components/TypeNav'
import store from '@/store'

Vue.config.productionTip = false

Vue.component(TypeNav.name, TypeNav)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
