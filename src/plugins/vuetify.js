import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#F4F8F0',
        secondary: '#A99796',
        accent: '#9B8E8E',
        info: '#DEC8A4',
        background: '#EBF2F4',
        white: '#fff',
      },
      dark: {
        primary: '#D3C3BC',
        secondary: '#BFADA5',
        accent: '#D8EBF1',
        info: '#caa8A4',
        background: '#111111',
        white: '#fff',
        contact: '#ed532c',
        projects: '#b4d2dc',
      },
    },
    dark: true,
  },
})
