var Vue = require('vue');
var VueResource = require('vue-resource');

import alert from './components/alert.vue';
import tasks from './components/tasks.vue';
import HomeView from './components/HomeView.vue';
import AboutView from './components/AboutView.vue';

Vue.use(VueResource);
new Vue({
    el: 'body',

    components: {
        alert,
        tasks,
        HomeView,
        AboutView
    },

    ready() {
        console.log('Ready to go');
    }
});
