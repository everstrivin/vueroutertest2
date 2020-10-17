<template>
    <div>
        <h1>Vue Router Demo App</h1>

        <p>
            <router-link :to="{ name: 'home' }">Home</router-link> |
            <router-link :to="{ name: 'hello' }">Hello World</router-link> |
            <router-link :to="{ name: 'howto' }">Exaple Coponent</router-link> |
            <router-link :to="{ name: 'users.index' }">Users Coponent</router-link>
        </p>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {}
    //I did not coplete this tutorial
    //It was taking too long and I' pretty sure if I want to edit and delete like CRUD
    //  It wouldn't be too hard. The link to the tutorial is
    //  https://laravel-news.com/building-vue-spa-laravel-part-4
    //I carried on with
    //https://dev.to/berniwittmann/handling-dialogs-with-vue-router-29ji
    //Which got me ost of the way
</script>