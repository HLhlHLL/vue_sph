import Vue from 'vue'
import Vuex from 'vuex'
import home from './home.js'
import search from './search.js'
import detail from './detail.js'
import shopcart from './shopcart'
import user from './user'
import trade from './trade'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
    search,
    detail,
    shopcart,
    user,
    trade
  }
})

export default store
