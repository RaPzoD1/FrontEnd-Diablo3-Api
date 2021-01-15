// Paquetes de npm
import Vue from 'vue'

// Archivos locales de nuestra App
import App from './App.vue'
import router from './router'
import store from './store'

// Vue Font-Awesome
import './plugins/fontAwesome'

// Custom directives
import './directives'

// BootstrapVue
import './plugins/bootstrapVue'

// CSS global
import './assets/css/main.styl'

// Configuración extra
Vue.config.productionTip = false
new Vue({
  router,
  store,
  methods: {
    init () {
      store.dispatch('oauth/getToken', null, { root: true })
    }
  },
  created () {
    this.init()
  },
  render: h => h(App)
}).$mount('#app')
