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
                
            }
        },
        watch: {
            
        }
    }
</script>