<template>
  <div id="map">
    <div class="about">
      <h1>This is an about page</h1>
    </div>

    <div>Selected: {{ selectedFeatures.map(f => f.id) }}</div>
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      @created="mapCreated"
    >
      <vl-view :center.sync="center" :zoom.sync="zoom" />

      <vl-layer-tile id="osm">
        <vl-source-osm />
      </vl-layer-tile>

      <vl-layer-vector>
        <vl-source-vector ref="vectorSource">
          <vl-feature
            v-for="feature in features"
            :key="feature.id"
            :id="feature.id"
          >
            <vl-geom-point :coordinates="feature.geometry.coordinates" />
          </vl-feature>
        </vl-source-vector>
      </vl-layer-vector>

      <vl-interaction-select
        ref="selectInteraction"
        :features.sync="selectedFeatures"
      />
    </vl-map>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { DragBox } from 'ol/interaction'
import { platformModifierKeyOnly } from 'ol/events/condition'
import * as olExt from 'vuelayers/dist/ol-ext'

export default Vue.extend({
  name: 'AboutView',

  data() {
    return {
      center: [0, 0],
      zoom: 4,
      features: [
        {
          type: 'Feature',
          id: 'one',
          geometry: {
            type: 'Point',
            coordinates: [0, 0],
          },
        },
        {
          type: 'Feature',
          id: 'two',
          geometry: {
            type: 'Point',
            coordinates: [20e5, 20e5],
          },
        },
        {
          type: 'Feature',
          id: 'three',
          geometry: {
            type: 'Point',
            coordinates: [-20e5, -20e5],
          },
        },
      ],
      selectedFeatures: [],
    }
  },
  methods: {
    mapCreated(map: any) {
      // a DragBox interaction used to select features by drawing boxes
      const dragBox = new DragBox({
        condition: platformModifierKeyOnly,
        onBoxEnd: () => {
          // features that intersect the box are selected
          const extent = dragBox.getGeometry().getExtent()
          const source = this.$refs.vectorSource.$source

          source.forEachFeatureIntersectingExtent(extent, feature => {
            feature = olExt.writeGeoJsonFeature(feature)
            this.selectedFeatures.push(feature)
          })
        },
      })

      map.$map.addInteraction(dragBox)

      // clear selection when drawing a new box and when clicking on the map
      dragBox.on('boxstart', () => {
        this.selectedFeatures = []
      })
    },
  },
})
</script>

<style>
#map {
  text-align: center;
  width: 100%;
  height: 100%;
}
</style>
