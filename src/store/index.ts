import Vue from 'vue'
import Vuex from 'vuex'
import { RootState } from './types'

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  state: {
    welcomeMessage: 'This is homepage of Connecxionz task.',
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
})
