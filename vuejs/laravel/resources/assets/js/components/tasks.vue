
<template>
    <h1>My Tasks</h1>
    <ul class="list-group">
        <li
            class="list-group-item"
            v-for="task in list"
        >
            {{ task.body }}
        </li>
    </ul>
</template>

<script>
export default {
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
};
</script>

<style lang="sass">
.list-group-item {
    padding: 1em;
}

</style>
