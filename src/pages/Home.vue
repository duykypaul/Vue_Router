<template>
	<div>
		<router-view/>
		<comp-slider/>
	</div>
</template>

<script>
	import CompSlider from "../components/CompSlider";
	export default {
		name: "home",
		components: {CompSlider},
		data() {
			return {}
		}
	}
</script>

<style scoped>

</style>