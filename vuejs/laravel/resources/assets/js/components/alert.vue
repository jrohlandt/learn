<template>
    <div
        v-bind:class="alertClasses"
        v-show="show"
    >
        <slot></slot>
        <span class="alert-close" v-on:click="show = false">x</span>
    </div>
</template>

<script>
export default  {

    props: ['type'],

    data() {
        return {
            show: true
        };
    },

    computed: {
        alertClasses() {
            // ['alert', type === 'success' ? 'alert-success' : '']
            var type = this.type;

            return {
                'alert': true,
                'alert-success': type === 'success',
                'alert-error': type === 'error'
            }
        }
    }
};
</script>

<style lang="sass">
.alert {
    position: relative;
    background: #ddd;
    border: 1px solid black;
    padding: 1em;
}

.alert-success {
    background: green;
}

.alert-error {
    background: red;
}

.alert-close {
    position: absolute;
    top: 1em;
    right: 1em;
    font-weight: bold;
    cursor: pointer;
}

</style>
