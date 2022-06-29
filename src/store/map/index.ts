import { Module } from 'vuex'
import { RootState } from '../types'
import { getters } from './getters'
import { Feature, FeaturTypes, GeometryTypes } from './types'

const state: Feature[] = [
  {
    type: FeaturTypes.feature,
    geometry: {
      type: GeometryTypes.point,
      coordinates: [171.4029548246267, -43.705607663038],
    },
    properties: {
      isCenter: true,
    },
  },
]

export const map: Module<Feature[], RootState> = { state, getters }
