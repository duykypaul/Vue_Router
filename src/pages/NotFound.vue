<template>
	<div>
		<img src="https://cdn.24h.com.vn//images/404img_092018.png">
		<router-link to="/" class="btn btn-info">Go back home</router-link>
		<div class="btn btn-info" @click="goBackHome">Go back home</div>
	</div>
</template>

<script>
	export default {
		name: "not-found",
		methods: {
			goBackHome(){
				this.$router.push('/');
			}
		}
	}
</script>

<style scoped>

</style>