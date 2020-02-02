<template>
	<b-container class="pt-5 pb-5">
		<b-row>
			<b-col md="4">
				<b-list-group>
					<router-link
							v-for="(item, index) in users"
							:key="index + 1"
							exact-active-class="active"
							:to="`/users/${index + 1}`"
							tag="b-list-group-item"
					>
						{{item.name}}
					</router-link>
				</b-list-group>
			</b-col>
			<b-col md="8">
				<div v-if="!currentId">Vui Lòng chọn 1 user bất kì</div>
				<template v-else-if="getCurrentUser">
					<p>{{getCurrentUser.name}}</p>
					When the green people trembles for captain's quarters, all stars grab cold, brave species.
					All hands wobble.
					Grow oppressively like a jolly woodchuck.
					Steam sun-dried gingers in a cooker with bourbon for about an hour to chamfer their thickness.
					Try enameling the fish sauce lettuces with dried ricotta and tabasco, boilled.
					The individual traps.
				</template>
				<div v-else>Id Khong hop le</div>
			</b-col>
		</b-row>
	</b-container>
	
</template>

<script>
	import UserList from "../mocks/UserList";
	
	export default {
		name: "user-list",
		data(){
			return {
				users: UserList,
				currentId: 0
			}
		},
		watch: {
			$route(to, from) {
				this.currentId = to.params.id;
			}
		},
		created() {
			this.currentId = this.$route.params.id;
		},
		computed: {
			getCurrentUser(){
				if(this.currentId < 1 || this.currentId > this.users.length) {
					return null;
				}
				return this.users[this.currentId - 1];
			}
		}
	}
</script>

<style scoped>

</style>