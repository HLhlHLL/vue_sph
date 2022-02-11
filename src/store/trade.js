import { reqTradeInfo, reqUserAddress } from '@/api'

const state = {
  userAddress: [],
  tradeInfo: {}
}
const mutations = {
  GETUSERADDRESS(state, userAddress) {
    state.userAddress = userAddress
  },
  GETTRADEINFO(state, tradeInfo) {
    state.tradeInfo = tradeInfo
  }
}
const actions = {
  async getUserAddress({ commit }) {
    const { data: res } = await reqUserAddress()
    if (res.code === 200) {
      commit('GETUSERADDRESS', res.data)
    }
  },
  async getTradeInfo({ commit }) {
    const { data: res } = await reqTradeInfo()
    if (res.code === 200) {
      commit('GETTRADEINFO', res.data)
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
