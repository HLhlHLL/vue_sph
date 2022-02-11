import { reqCartList, reqRemoveCartById, reqChangeChecked } from '@/api'
import { getUUID } from '@/utils/uuid_token'

const state = {
  cartList: [],
  uuid_token: getUUID()
}
const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList
  }
}
const actions = {
  async getCartList({ commit }) {
    const { data: res } = await reqCartList()
    if (res.code === 200) {
      commit('GETCARTLIST', res.data)
    }
  },
  async removeCartById({ commit }, skuId) {
    const { data: res } = await reqRemoveCartById(skuId)
    if (res.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  async changeChecked({ commit }, { skuId, isChecked }) {
    const { data: res } = await reqChangeChecked(skuId, isChecked)
    if (res.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  }
}
const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
