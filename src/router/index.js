import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Search from '@/views/Search'
import Register from '@/views/Register'

Vue.use(VueRouter)

// 重写push和replace方法解决报错NavigationDuplicated
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject)
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject)
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    )
  }
}

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home, meta: { show: true } },
  { path: '/login', component: Login, meta: { show: false } },
  { path: '/search/:keyWord', component: Search, meta: { show: true }, name: 'search' },
  { path: '/register', component: Register, meta: { show: false } }
]

const router = new VueRouter({
  routes
})

export default router
