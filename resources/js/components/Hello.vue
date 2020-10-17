<template>
	<div class="card">
        <p>Hello World!</p>
		<router-link :to="{ name: 'dialog' }" class="btn">Open Dialog</router-link>
		<router-view></router-view>
	</div>
</template>

<style>

</style>

<script>
	export default {
		props: [],
		data () {
			return {
				
			}
		},
		methods: {
			
		},
		watch: {
			
		},
		created () {
			
		},
        mounted() {
			//This EventBus comes from TourModal.vue
			$('#touristmodal').modal('hide');
			$(window).on('popstate', function() {
				$(".modal-backdrop").remove();
			});
        }
    }
</script>