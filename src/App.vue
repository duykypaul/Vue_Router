<template>
	<div id="app">
		<comp-menu/>
		<comp-slider/>
		<p>
			<router-link to="/about-us">Go to About Us</router-link>
		</p>
		<!-- route outlet -->
		<!-- component matched by the route will render here -->
		<router-view></router-view>
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

</style>
