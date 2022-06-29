import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { map } from './map'
import { RootState } from './types'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    welcomeMessage: 'This is homepage of Connecxionz task',
  },
  modules: { map },
}

export default new Vuex.Store<RootState>(store)
