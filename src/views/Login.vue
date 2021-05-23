<template>
  <v-row class="justify-center text-center mt-3">
    <v-col xs="12" sm="6" lg="4">
      <h2 class="font-weight-light">Login</h2>

      <v-form @submit.prevent="login({ email: email, password: password })">
        <v-text-field
          v-model.trim="email"
          label="E-mail"
          :rules="emailRules"
          validate-on-blur
        ></v-text-field>

        <v-text-field
          v-model.trim="password"
          label="Contraseña"
          :rules="passwordRules"
          validate-on-blur
          type="password"
        ></v-text-field>

        <v-btn
          class="mt-3"
          dark
          color="cyan"
          type="submit"
        >Iniciar sesión</v-btn>
      </v-form>

      <v-alert
        class="mt-8 mx-8"
        v-if="existError"
        border="bottom"
        colored-border
        type="warning"
        elevation="2"
      >
      {{ error }}
      </v-alert>
    </v-col>
    
    <v-footer padless app>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <a class="text-decoration-none" target="_blank" href="https://github.com/martins36"><strong>Marin Macoritto</strong></a>
      </v-col>
    </v-footer>
  </v-row>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
 
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+/.test(v) || 'Ingrese un E-mail válido',
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Contraseña es requerido',
        v => v.length >= 6 || 'Contraseña debe tener al menos 6 caracteres',
      ]
    }
  },
  methods: {
    ...mapActions(['login'])
  },
  computed: {
    ...mapState(['error']),
    ...mapGetters(['existError'])
  }
}
</script>