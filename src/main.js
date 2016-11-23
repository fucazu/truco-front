import Vue from 'vue'
// import App from './App'
import VueSocketio from 'vue-socket.io'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueSocketio, 'http://localhost:3000')
/* eslint-disable no-unused-vars */

const routes = [
  { path: '/', component: require('./App.vue') },
  { path: '/inicio', component: require('./components/Hello.vue'), name: 'inicio' },
  { path: '/sala/:id', component: require('./components/Sala.vue'), name: 'sala' }
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
