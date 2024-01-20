<template>
    <h1>Создайте новый аккаунт</h1>
    <div class="mt-4 w-75">
        <div>
            <input type="text" placeholder="Ваше имя" class="form-control" v-model="name">
        </div>
        <div class="mt-3">
            <input type="email" placeholder="Ваш email" class="form-control" v-model="email">
        </div>
        <div class="mt-3">
            <input type="password" placeholder="Ваш пароль" class="form-control" v-model="password">
        </div>
        <div class="mt-3">
            <input type="password" placeholder="Подтвердите пароль" class="form-control" v-model="password_confirmation">
        </div>
        <div class="mt-3 d-flex gap-3">
            <div>
                <button @click="register" class="btn btn-success">Зарегистрироваться</button>
            </div>
            <div>
                <router-link :to="{ name: 'login' }" class="btn btn-primary">Войти</router-link>
            </div>
        </div>        
    </div>
</template>

<script>
export default {
    name: 'Login',

    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    },

    methods: {
        register() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })
                    .then(res => {
                        console.log(res)
                    })
            });
        }
    }
}
</script>

<style scoped></style>