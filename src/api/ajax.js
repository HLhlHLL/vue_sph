import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'

const requests = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 请求拦截器
requests.interceptors.request.use((config) => {
  nprogress.start()
  if (store.state.shopcart.uuid_token) config.headers.userTempId = store.state.shopcart.uuid_token
  if (window.localStorage.getItem('token')) config.headers.token = window.localStorage.getItem('token')
  return config
})

// 请响应拦截器
requests.interceptors.response.use(
  (config) => {
    nprogress.done()
    return config
  },
  (error) => error
)

export default requests
