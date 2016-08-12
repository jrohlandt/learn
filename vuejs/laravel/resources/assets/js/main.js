var Vue = require('vue');
var VueResource = require('vue-resource');

import alert from './components/alert.vue';
import tasks from './components/tasks.vue';

Vue.use(VueResource);
new Vue({
    el: 'body',

    components: {
        alert, tasks
    },

    ready() {
        console.log('Ready to go');
    }
});
