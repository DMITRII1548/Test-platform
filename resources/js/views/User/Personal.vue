<template>
    <h2>Ваш аккаунт</h2>
    <a @click.prevent="$store.dispatch('logout')" href="#">Выйти</a>
    <div class="mt-3">
        Добро пожаловать {{ name }}!
    </div>
</template>

<script>
export default {
    name: 'Personal',

    mounted() {
        this.$store.dispatch('getMe')
    },

    computed: {
        name() {
            return this.$store.getters.name
        }
    }
}
</script>

<style scoped>

</style>
