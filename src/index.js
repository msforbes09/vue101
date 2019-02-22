import './bootstrap';
import router from './routes';
import App from './App.vue';


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
