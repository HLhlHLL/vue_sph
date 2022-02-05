import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const requests = axios.create({
  baseURL: '/api',
  timeout: 5000
})

// 请求拦截器
requests.interceptors.request.use((config) => {
  nprogress.start()
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
