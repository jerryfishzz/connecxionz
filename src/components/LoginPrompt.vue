<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn text v-bind="attrs" v-on="on" v-blur>
        <v-icon left color="darken-2">mdi-login</v-icon>
        Login
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        <span class="text-h5">Login</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Username"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Password" type="password"></v-text-field>
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
export default {
  name: 'LoginPrompt',
  data() {
    return {
      dialog: false,
    }
  },
}
</script>
