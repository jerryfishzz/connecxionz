<template>
  <div id="map">
    <vl-map
      :load-tiles-while-animating="true"
      :load-tiles-while-interacting="true"
      data-projection="EPSG:4326"
    >
      <vl-view
        :zoom.sync="zoom"
        :center="center"
        :rotation.sync="rotation"
      ></vl-view>

      <vl-layer-tile>
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>

      <vl-layer-vector>
        <vl-source-vector :features="features"></vl-source-vector>

        <vl-style-box>
          <vl-style-icon
            src="../assets/marker.png"
            :anchor="[0.5, 1]"
            :scale="0.3"
          ></vl-style-icon>
        </vl-style-box>
      </vl-layer-vector>
    </vl-map>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'MapView',

  data() {
    return {
      zoom: 16.5,
      rotation: 0,
      features: this.$store.state.map,
    }
  },

  computed: {
    center: {
      get() {
        const center = this.$store.getters.getCenter?.geometry.coordinates
        return center ? center : [0, 0]
      },
      set(value: number[]) {
        console.log(value)
      },
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
