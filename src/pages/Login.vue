<template>
	<b-container>
		<b-form class="pt-5 pb-5">
			<b-form-group
					id="input-group-1"
					label="Email address:"
					label-for="input-1"
					description="We'll never share your email with anyone else."
			>
				<b-form-input
						id="input-1"
						type="email"
						placeholder="Enter email"
				></b-form-input>
			</b-form-group>
			
			<b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
				<b-form-input
						id="input-2"
						placeholder="Enter name"
				></b-form-input>
			</b-form-group>
		</b-form>
	</b-container>
</template>

<script>
	export default {
		name: "login",
		data(){
			return {}
		}
	}
</script>

<style scoped>

</style>