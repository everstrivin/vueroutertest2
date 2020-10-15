<template>
    <div>
        <router-view name="dialog"></router-view>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'EmptyRouterView',
        data () {
            return {
                isModalVisible: false,
            }
        },
        watch: {
            "$route.meta"({ isModalVisible }) {
                this.isModalVisible = true;
                //console.log("Actually here "+this.isModalVisible);
            }
        },
    }
</script>