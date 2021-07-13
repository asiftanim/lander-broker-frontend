import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuthenticated: false
  },
  mutations: {
    isAuthenticated (state, value) {
      state.isAuthenticated = value
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    isAuthenticated: state => {
      return state.isAuthenticated
    }
  }
})
