import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import './plugins'
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Home},
  {path: '/about-us', component: AboutUs},
]

const router = new VueRouter({
	routes // short for `routes: routes`
});

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
