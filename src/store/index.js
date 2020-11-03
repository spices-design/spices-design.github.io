import Vue from 'vue'
import Vuex from 'vuex'
import spices from './modules/spices'
import pepper from './modules/pepper'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    pepper,
    spices
  }
})
