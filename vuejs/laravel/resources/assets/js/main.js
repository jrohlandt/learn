var Vue = require('vue');

import alert from './components/alert.vue';

new Vue({
    el: 'body',

    components: {
        alert
    },

    ready() {
        console.log('Ready to go');
    }
});
