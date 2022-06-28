<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1>Home</h1>
        <p>{{ welcomeMessage }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomeView',
  computed: {
    welcomeMessage: {
      get() {
        return this.$store.state.welcomeMessage
      },
    },
  },
})
</script>
