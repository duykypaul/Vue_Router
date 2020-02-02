<template>
	<div id="app">
		<comp-menu/>
		<transition name="nav-fade" mode="out-in">
			<router-view></router-view>
		</transition>
		
	</div>
</template>

<script>
	import CompMenu from "./components/CompMenu";
	import CompSlider from "./components/CompSlider";
	
	export default {
		name: 'app',
		components: {CompSlider, CompMenu},
		data() {
			return {}
		}
	}
</script>

<style>
	.nav-fade-enter-active {
		transition: all .3s ease;
	}
	.nav-fade-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.nav-fade-enter, .nav-fade-leave-to
		/* .slide-fade-leave-active below version 2.1.8 */ {
		transform: translateX(10px);
		opacity: 0;
	}
</style>
