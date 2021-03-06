import Vue from "vue";
import Router from "vue-router";
import ExampleComponent from "./components/ExampleComponent.vue";
import Home from "./components/Home.vue";
import Hello from "./components/Hello.vue";
import UsersIndex from './components/UsersIndex';
import NotFound from './components/NotFound';
import EptyRouterView from './components/EptyRouterView';
import DialogOne from  './components/DialogOne';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
      {
            path: '/',
            name: 'home',
            component: Home
      },
      {
            path: '/hello',
            name: 'hello',
            component: Hello,
            children: [{
                path: 'dialog',
                name: 'dialog',
                component: DialogOne
            }]
      },
	  {
		  path: "/howto",
		  name:  "howto",
		  component: ExampleComponent,
      },
      {
          path: '/users',
          name: 'users.index',
          component: UsersIndex,
      },
      { path: '/404', name: '404', component: NotFound },
      { path: '*', redirect: '/404' },
	],
});
