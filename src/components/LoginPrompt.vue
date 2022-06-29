<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text v-bind="attrs" v-on="on" v-blur v-if="!drawer">
        <v-icon left color="darken-2">mdi-login</v-icon>
        Login
      </v-btn>

      <v-list-item ripple v-bind="attrs" v-on="on" v-blur v-if="drawer">
        <v-list-item-icon>
          <v-icon>mdi-login</v-icon>
        </v-list-item-icon>
        <v-list-item-content>Login</v-list-item-content>
      </v-list-item>
    </template>

    <v-card>
      <v-card-title>
        <span class="text-h5">Login</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Username" :value="username"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Password"
                type="password"
                :value="password"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false"> Submit </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginPrompt',
  data() {
    return {
      dialog: false,
      username: '',
      password: '',
    }
  },
  props: {
    drawer: {
      type: Boolean,
    },
  },
  watch: {
    dialog: function () {
      if (!this.dialog) {
        this.username = ''
        this.password = ''
      }
    },
  },
})
</script>
