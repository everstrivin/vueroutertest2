<template>
	<div class="card">
        <p>Hello World!</p>
		<router-link :to="{ name: 'nested.dialog' }" class="btn">Open Dialog</router-link>
	</div>
</template>

<style>

</style>

<script>
	import EventBus from '../eventBus';
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
        mounted() {
			//This EventBus comes from TourModal.vue
			EventBus.$on('closemodal', () => {
				//this.modopen = 0;
				$('#touristmodal').modal('hide');
			});
        }
    }
</script>