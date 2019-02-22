import VueRouter from 'vue-router';

const routes = [
  { path: '/', component: require('./views/Home.vue').default },
  { path: '/basic', component: require('./views/Basic.vue').default },
]

export default new VueRouter({
  routes,
  linkActiveClass: 'is-active',
})