<template>
	<div>
		<b-jumbotron header="Homepage">
			<p>Control which tag is rendered for the header by setting the header-tag to the appropriate HTML element.
				The default is h1. Both the prop header and slot header will be rendered inside this tag. If both the
				prop and the slot are specified, the slot will be shown.
				
				Control the overall size of the header text by setting the header-level prop to a value between 1 and 4
				- with 1 being the largest and 4 being smallest. The default value is 3.</p>
			<b-button variant="primary" href="#">More Info</b-button>
		</b-jumbotron>
	</div>
</template>

<script>
	export default {
		name: "home-page"
	}
</script>

<style scoped>

</style>