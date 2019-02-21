import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.html';
import vue from 'vue';

window.Vue = vue;

new Vue({
    el: '#app',
    data: {
        message: 'Try to change this value'
    }
});
