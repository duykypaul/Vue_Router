import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import UserList from "./pages/UserList";
import NotFound from "./pages/NotFound";

Vue.use(VueRouter);
let isLogin = true;
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
	},
	{
		path: '/users/:id?',
		component: UserList,
		beforeEnter: (to, from, next) => {
			if(isLogin){
				next();
			} else {
				next({path: '/login', query: {redirect: 'user'}})
			}
		}
	},
	{
		path: '*',
		component: NotFound
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
});

export default router;