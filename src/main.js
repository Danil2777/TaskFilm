/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './components/Router/index.js'
import store from '@/store'
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css';
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
