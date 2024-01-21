<template>
    <h1>Войдите в ваш аккаунт</h1>
    <div class="mt-4 w-75">
        <div>
            <input type="email" placeholder="Ваш email" class="form-control" v-model="email">
        </div>
        <div class="mt-3">
            <input type="password" placeholder="Ваш пароль" class="form-control" v-model="password">
        </div>
        <div class="mt-3 d-flex gap-3">
            <div>
                <button @click="login" class="btn btn-success">Войти</button>
            </div>
            <div>
                <router-link :to="{ name: 'register' }" class="btn btn-primary">Зарегистрироваться</router-link>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    name: 'Login',

    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login', {
                    email: this.email,
                    password: this.password
                })
                    .then(res => {
                        this.$router.push({ name: 'personal' })
                    })
            });
        }  
    }
}
</script>

<style scoped>
</style>