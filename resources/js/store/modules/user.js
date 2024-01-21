import axios from "axios"
import router from './../../router/index'

const state = {
    name: ''
}

const getters = {
    name: state => state.name,
}

const mutations = {
    setName(state, name) {
        state.name = name
    },
}

const actions = {
    getMe({commit}) {
        axios.get('/api/user')
            .then(res => {
                commit('setName', res.data.name)
            })
    },

    login({}, data) {
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/login', {
                email: data.email,
                password: data.password
            })
                .then(res => {
                    router.push({ name: 'personal' })
                })
        });
    },

    register({}, data) {
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/register', {
                name: data.name,
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation
            })
                .then(res => {
                    router.push({ name: 'personal' })
                })
        });
    },

    logout() {
        axios.post('/logout')
            .then(res => {
                router.push({ name: 'login' })
            })
    }
}

export default {
    state,
    actions,
    getters,
    mutations,
}
