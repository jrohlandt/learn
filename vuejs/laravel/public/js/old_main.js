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
        this.$http.get('api/tasks').then(function(tasks) {
            this.list = tasks.json();
        }, function(tasks) {
            console.log('an error occurred');
        });
    }
});

new Vue({
    el: 'body'
});
