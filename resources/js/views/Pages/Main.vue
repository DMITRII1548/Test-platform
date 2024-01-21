<template>
    <div class="d-flex justify-content-center mt-5">
        <div class="d-inline-grid items-center mt-5">
            <router-link :to="{ name: 'login' }" class="btn btn-primary">Мои тесты</router-link>
            <router-link :to="{ name: 'home' }" class="mt-3 btn btn-success">Пройти тест</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Main',

    mounted() {
        this.$store.dispatch('testVuex')
    }
}
</script>

<style scoped>
</style>
