<template>
    <h2>Ваш аккаунт</h2>
    <a @click.prevent="$store.dispatch('logout')" href="#">Выйти</a>
    <div class="mt-3">
        Добро пожаловать {{ name }}!
    </div>
    <div class="mt-5">
        <h2>Ваши тесты:</h2>
        <table class="table mt-2">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Название</th>
                <th scope="col">Изменить</th>
                <th scope="col">Запустить</th>
                <th scope="col">Удалить</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="test in tests">
                <th scope="row">{{ test.id }}</th>
                <td>{{ test.title }}</td>
                <td><router-link to="#" class="btn btn-primary">Изменить</router-link></td>
                <td><router-link to="#" class="btn btn-primary">Запустить</router-link></td>
                <td><button class="btn btn-danger">Удалить</button></td>
            </tr>
        </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Personal',

    mounted() {
        this.$store.dispatch('getMe')
        this.$store.dispatch('getTests')
    },

    computed: {
        name() {
            return this.$store.getters.name
        },

        tests() {
            return this.$store.getters.tests
        }
    }
}
</script>

<style scoped>

</style>
