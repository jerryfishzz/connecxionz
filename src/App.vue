<template>
  <v-app>
    <v-navigation-drawer v-model="sidebar" absolute>
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{ item.title }}</v-list-item-content>
        </v-list-item>

        <LoginPrompt :isDrawer="true" />
      </v-list>
    </v-navigation-drawer>

    <!--  class shrink is to control the bar height steady -->
    <v-toolbar class="shrink">
      <span class="hidden-sm-and-up">
        <v-app-bar-nav-icon @click="sidebar = !sidebar"> </v-app-bar-nav-icon>
      </span>

      <v-toolbar-title>
        {{ appTitle }}
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="item in menuItems" :key="item.title" :to="item.path">
          <v-icon left color="darken-2">{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>

        <LoginPrompt />
      </v-toolbar-items>
    </v-toolbar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import LoginPrompt from './components/LoginPrompt.vue'

export default Vue.extend({
  name: 'App',

  data: () => ({
    appTitle: 'Connecxionz Task',
    sidebar: false,
    menuItems: [
      { title: 'Home', path: '/', icon: 'mdi-home' },
      { title: 'Map', path: '/about', icon: 'mdi-map' },
    ],
  }),
  components: { LoginPrompt },
})
</script>
