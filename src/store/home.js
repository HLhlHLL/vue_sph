import { reqCategoryList, reqBannerList, reqFloorList } from '@/api'

const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}
const mutations = {
  GETCATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList
  }
}
const actions = {
  // 获取三级联动分类列表
  async getCategoryList({ commit }) {
    const { data: res } = await reqCategoryList()
    if (res.code === 200) {
      commit('GETCATEGORYLIST', res.data.splice(0, 16))
    }
  },
  // 获取轮播图
  async getBannerList({ commit }) {
    const { data: res } = await reqBannerList()
    if (res.code === 200) {
      commit('GETBANNERLIST', res.data)
    }
  },
  async getFloorList({ commit }) {
    const { data: res } = await reqFloorList()
    if (res.code === 200) {
      commit('GETFLOORLIST', res.data)
    }
  }
}
const getters = {}
export default { state, mutations, actions, getters }
