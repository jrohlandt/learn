Vue.component('tasks', {
    template: '#tasks-template',

    props: {
        list: {
            type: Array,
            default: function() {
                return [];
            }
        }
    },

    created: function() {
        $.getJSON('api/tasks', function(tasks) {
            this.list = tasks;
        }.bind(this));
    }
});

new Vue({
    el: 'body'
});
