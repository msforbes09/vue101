import VueRouter from 'vue-router';

import home from './views/Home.vue';
import basic from './views/Basic.vue';

const routes = [
  { path: '/', component: require('./views/Home.vue').default },
  { path: '/basic', component: require('./views/Basic.vue').default },
]

export default new VueRouter({
  routes,
  linkActiveClass: 'is-active',
})