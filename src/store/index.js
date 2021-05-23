import Vue from 'vue'
import Vuex from 'vuex'

import firebase from 'firebase/app'
import { db, auth } from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    error: null,
    bolillas: [],
    load: false,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
    setError(state, payload) {
      switch(payload) {
        case 'auth/invalid-email':
          state.error = 'E-mail inválido'
          break
        case 'auth/wrong-password':
          state.error = 'Contraseña incorrecta'
          break
        case 'auth/user-not-found':
          state.error = 'Usuario no encontrado'
          break
        default:
          state.error = payload
      } 
    },
    setBolillas(state, payload) {
      state.bolillas = payload
    },
    setLoad(state, payload) {
      state.load = payload
    },
  },
  actions: {
    getBolillas({ commit }) {
      commit('setLoad', true)
      const bolillas = []
      db.collection('bolillas').get()
        .then(response => {
          response.forEach(doc => {
            let bolilla = doc.data()
            bolilla.id = doc.id
            bolillas.push(bolilla)
          })
          commit('setBolillas', bolillas)
          commit('setLoad', false)
        })
    },
    setFrequency({ state }, payload){
      db.collection('bolillas').doc(payload.id).update({
        frequency: firebase.firestore.FieldValue.increment(1)
      })
      const bolilla = {
        id: payload.id,
        number: payload.number,
        frequency: payload.frequency + 1
      }
      state.bolillas = state.bolillas.map(item => item.id === payload.id ? bolilla : item)
    },
    login({ commit }, payload) {
      auth.signInWithEmailAndPassword(payload.email, payload.password)
       .then(response => {
         const user = {
           uid: response.user.uid,
           email: response.user.email
         }
         commit('setUser', user)
         commit('setError', null)
         router.push('/')
       })
       .catch(error => {
         commit('setError', error.code)
       })
    },
    logout() {
      auth.signOut()
        .then(() => {
          router.push('/login')
       })
    },
    detectUser({ commit }, payload) {
      commit('setUser', payload)
    }
  },
  getters: {
    existUser(state) {
      return state.user !== null
    },
    existError(state) {
      return state.error !== null
    }
  },
  modules: {
  }
})
