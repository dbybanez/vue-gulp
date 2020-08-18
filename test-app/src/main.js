import Vue from 'vue'
import App from './App.vue'
import router from './router'

require('./assets/css/custom-bootstrap.min.css')
require('./assets/css/custom-style.min.css')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
