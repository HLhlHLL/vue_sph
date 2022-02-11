import { reqCode, reqRegister, reqLogin, reqUserInfo, reqLogOut } from '@/api'

const state = {
  code: '',
  userInfo: {}
}
const mutations = {
  GETCODE(state, code) {
    state.code = code
  },
  LOGIN(state, token) {
    state.token = token
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo
  },
  LOGOUT(state) {
    state.userInfo = {}
  }
}
const actions = {
  async getCode({ commit }, phone) {
    const { data: res } = await reqCode(phone)
    if (res.code === 200) {
      commit('GETCODE', res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  async register({ commit }, user) {
    const { data: res } = await reqRegister(user)
    if (res.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  async login({ commit }, user) {
    const { data: res } = await reqLogin(user)
    if (res.code === 200) {
      commit('LOGIN', res.data.token)
      window.localStorage.setItem('token', res.data.token)
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  async getUserInfo({ commit }) {
    const { data: res } = await reqUserInfo()
    if (res.code === 200) {
      window.sessionStorage.setItem('userInfo', JSON.stringify(res.data))
      commit('GETUSERINFO', res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  async logOut({ commit }) {
    // 退出成功清空浏览器缓存
    window.localStorage.removeItem('token')
    window.sessionStorage.removeItem('userInfo')
    commit('LOGOUT')
    const { data: res } = await reqLogOut()
    if (res.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
