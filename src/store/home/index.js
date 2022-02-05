import { reqCategoryList } from '@/api'

const state = {
  categoryList: []
}
const mutations = {
  CATEGORY(state, categoryList) {
    state.categoryList = categoryList
  }
}
const actions = {
  async getCategoryList({ commit }) {
    const { data: res } = await reqCategoryList()
    if (res.code === 200) {
      commit('CATEGORY', res.data.splice(0, 16))
    }
  }
}
const getters = {}
export default { state, mutations, actions, getters }
