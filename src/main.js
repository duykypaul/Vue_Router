import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import './plugins'
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: Home,
		children: [
			{path: '', component: HomePage},
			{path: 'about-us', component: AboutUs}
		]
	},
	{
		path: '/login',
		component: Login
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
});

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
