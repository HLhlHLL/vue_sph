export default [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('@/views/Home'), meta: { show: true } },
  { path: '/login', component: () => import('@/views/Login'), meta: { show: true } },
  { path: '/search/:keyword?', component: () => import('@/views/Search'), meta: { show: true }, name: 'search' },
  { path: '/register', component: () => import('@/views/Register'), meta: { show: true } },
  { path: '/detail/:skuid', component: () => import('@/views/Detail'), meta: { show: true } },
  { path: '/addcartsuccess', component: () => import('@/views/AddCartSuccess'), meta: { show: true }, name: 'addcartsuccess' },
  { path: '/shopcart', component: () => import('@/views/ShopCart'), meta: { show: true }, name: 'shopcart' },
  {
    path: '/trade',
    component: () => import('@/views/Trade'),
    meta: { show: true },
    name: 'trade',
    beforeEnter: (to, from, next) => {
      from.path.indexOf('/shopcart') !== -1 ? next() : next(false)
    }
  },
  {
    path: '/pay',
    component: () => import('@/views/Pay'),
    meta: { show: true },
    name: 'pay',
    beforeEnter: (to, from, next) => (from.path.indexOf('/trade') !== -1 ? next() : next(false))
  },
  { path: '/paysuccess', component: () => import('@/views/PaySuccess'), meta: { show: true }, name: 'paysuccess' },
  {
    path: '/center',
    redirect: '/center/myorder',
    component: () => import('@/views/Center'),
    meta: { show: true },
    name: 'center',
    children: [
      { path: 'myorder', component: () => import('@/views/Center/MyOrder'), meta: { show: true } },
      { path: 'grouporder', component: () => import('@/views/Center/GroupOrder'), meta: { show: true } }
    ]
  }
]
