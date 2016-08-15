<template>
    <div
        v-bind:class="alertClasses"
        v-show="show"
        transition="alert-fade"
    >
        <slot></slot>
        <span
            class="alert-close"
            v-on:click="show = false"
            v-show="important"
        >
            x
        </span>
    </div>
</template>

<script>
export default  {

    props: {
        type: {default: 'info'},
        timeout: {default: 3000},
        important: {
            type: Boolean,
            default: false
        }
    },

    ready() {
        if (! this.important) {
            setTimeout(() => this.show = false, this.timeout);
        }
    },

    data() {
        return { show: true };
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

.alert-fade-transition {
    transition: 1s ease;
}

.alert-fade-leave {
    opacity: 0;
}

</style>
