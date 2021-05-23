<template>
  <v-row v-if="existUser" class="justify-center">
    
    <Bolillas v-if="value === 0"/>

    <Stats v-else/>

    <div class="overflow-hidden">
      <v-bottom-navigation
        app
        v-model="value"
        :background-color="color"
        dark
        shift
      >
        <v-spacer></v-spacer>
        <v-btn>
          <span>Anotar</span>
          <v-icon>edit</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn :disabled="load">
          <span>Estadísticas</span>
          <v-icon>bar_chart</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
      </v-bottom-navigation>
    </div>
  </v-row>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Bolillas from '../components/Bolillas'
import Stats from '../components/Stats'

export default {
  name: 'Home',
  data() {
    return {
      value: 0,
    }
  },
  components: {
    Bolillas,
    Stats
  },
  computed: {
    ...mapState(['user', 'load']),
    ...mapGetters(['existUser']),
    color () {
      switch (this.value) {
        case 0: return 'cyan'
        case 1: return 'success'
      }
    },
  }
}
</script>
