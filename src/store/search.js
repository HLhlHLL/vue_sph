import { reqSearchList } from '@/api'

const state = {
  searchList: {}
}
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList
  }
}
const actions = {
  async getSearchList({ commit }, params = {}) {
    const { data: res } = await reqSearchList(params)
    if (res.code === 200) {
      commit('GETSEARCHLIST', res.data)
    }
  }
}
const getters = {
  goodsList(state) {
    return state.searchList.goodsList || []
  },
  attrsList(state) {
    return state.searchList.attrsList || []
  },
  trademarkList(state) {
    return state.searchList.goodsList || []
  },
  total(state) {
    return state.searchList.total
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
