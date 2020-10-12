require('./bootstrap');
window.Vue = require('vue');

import router from './router.js';

Vue.component('app', require('./components/App.vue').default);
Vue.component('hello', require('./components/Hello.vue').default);
Vue.component('home', require('./components/Home.vue').default);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('users-index', require('./components/UsersIndex.vue').default);
Vue.component('not-found', require('./components/NotFound.vue').default);

const app = new Vue({
    el: '#app',
	router,
	data: {

    }
});