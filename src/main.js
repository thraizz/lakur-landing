import Vue from 'vue'
import './plugins/base'
import vuetify from './plugins/vuetify'
import VueI18n from 'vue-i18n'
import App from './App.vue'

import en from './locales/en.json'
import de from './locales/de.json'

Vue.config.productionTip = false

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'de-DE',
  messages: {
    'en-US': en,
    'de-DE': de,
  },
})

new Vue({
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
