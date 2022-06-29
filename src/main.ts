import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueLayers from 'vuelayers'
import 'vuelayers/dist/vuelayers.css'

Vue.config.productionTip = false

Vue.use(VueLayers)

// Register a global custom directive called `v-blur` that prevents focus.
// For example, to use this directive on buttons opening dialog
// since they should not keep focusing after the dialog disappears.
// https://github.com/vuetifyjs/vuetify/issues/8572
Vue.directive('blur', {
  inserted: function (el: HTMLElement) {
    el.onfocus = (ev: FocusEvent) => (ev.target as HTMLElement).blur()
  },
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
