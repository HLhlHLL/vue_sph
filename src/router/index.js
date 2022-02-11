import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import store from '@/store'

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

const router = new VueRouter({
  routes,
  // 配置路由跳转后的滚动行为
  scrollBehavior(to, from, savePosition) {
    return { y: 0 }
  }
})

router.beforeEach(async (to, from, next) => {
  const token = window.localStorage.getItem('token')
  if (token) {
    if (to.path === '/login') {
      next('/home')
    } else {
      try {
        !window.sessionStorage.getItem('userInfo') && (await store.dispatch('getUserInfo'))
      } catch (error) {
        // token 失效，清空用户信息
        await store.dispatch('logOut')
        next('/login')
        alert('身份已过期，请重新登陆！')
      }
      next()
    }
  } else {
    const toPath = to.path
    if (toPath.indexOf('/trade') !== -1 || toPath.indexOf('/center') !== -1 || toPath.indexOf('/pay') !== -1) {
      next('/login?redirect=' + toPath)
    } else {
      next()
    }
  }
})

export default router
