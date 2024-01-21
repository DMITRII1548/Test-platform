<template>
    <h2>Ваш аккаунт</h2>
    <div class="mt-3">
        Добро пожаловать {{ name }}!
    </div>
</template>

<script>
export default {
    name: 'Personal',

    data() {
        return {
            name: ''
        }
    },

    mounted() {
        this.getMe()
    },

    methods: {
        getMe() {
            axios.get('/api/user')
                .then(res => {
                    this.name = res.data.name
                })
        }
    }
}
</script>

<style scoped>

</style>