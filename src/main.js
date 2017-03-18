import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import App from './App';
import { Home, Commands, Filters, Manual, About, AuthCallback, Donate } from './routes';

Vue.use(VueRouter);
Vue.use(VueMaterial);

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'cyan',
});

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/commands', component: Commands },
    { path: '/filters', component: Filters },
    { path: '/manual', component: Manual },
    { path: '/about', component: About },
    { path: '/callback', component: AuthCallback },
    { path: '/donate', component: Donate },
  ],
});

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App),
});
