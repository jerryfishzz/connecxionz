export enum FeaturTypes {
  feature = 'Feature',
}

export enum GeometryTypes {
  point = 'Point',
}

interface Geometry {
  type: GeometryTypes
  coordinates: number[]
}

interface Properties {
  isCenter?: boolean
}

export interface Feature {
  type: FeaturTypes
  geometry: Geometry
  properties: Properties
}
