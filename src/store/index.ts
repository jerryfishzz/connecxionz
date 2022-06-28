import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    welcomeMessage: 'This is homepage of Connecxionz task',
  },
  modules: {},
}

export default new Vuex.Store<RootState>(store)
