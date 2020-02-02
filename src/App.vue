<template>
	<div id="app">
		<comp-menu/>
		<comp-slider/>
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
