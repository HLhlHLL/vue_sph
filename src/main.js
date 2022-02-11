import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入三级联动组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import { Button, MessageBox } from 'element-ui'
import store from '@/store'
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.min.css'
import * as request from '@/api'

import '@/plugins/validate'

Vue.config.productionTip = false

Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.use(Button)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert

new Vue({
  router,
  store,
  // 注册全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$http = request
  },
  render: (h) => h(App)
}).$mount('#app')
