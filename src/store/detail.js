import { reqGoodDetails, reqShopCart } from '@/api'

const state = {
  goodDetails: {}
}
const mutations = {
  GETGOODDETAILS(state, goodDetails) {
    state.goodDetails = goodDetails
  }
}
const actions = {
  async getGoodDetails({ commit }, skuid) {
    const { data: res } = await reqGoodDetails(skuid)
    if (res.code === 200) {
      commit('GETGOODDETAILS', res.data)
    }
  },
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    const { data: res } = await reqShopCart(skuId, skuNum)
    if (res.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  }
}
const getters = {
  categoryView(state) {
    return state.goodDetails.categoryView || {}
  },
  skuInfo() {
    return state.goodDetails.skuInfo || {}
  },
  spuSaleAttrList() {
    return state.goodDetails.spuSaleAttrList || []
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
