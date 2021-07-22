import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

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
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    })
  ]
})
