<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      hide-on-scroll
    >
      <div class="d-flex align-center">
        <v-icon>toll</v-icon>

        <h2 class="font-weight-regular ml-3">Bingo-max!</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        v-if="existUser"
        @click="logout"
        text
      >
        <span class="mr-2">Cerrar sesión</span>
        <v-icon>logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions(['logout'])
  },
  computed: {
    ...mapGetters(['existUser'])
  }
};
</script>
