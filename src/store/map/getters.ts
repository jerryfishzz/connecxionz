import { GetterTree } from 'vuex'
import { RootState } from '../types'
import { Feature } from './types'

export const getters: GetterTree<Feature[], RootState> = {
  getCenter(state) {
    for (let index = 0; index < state.length; index++) {
      const element = state[index]
      if (element.properties.isCenter) return element
    }

    return null
  },
}
