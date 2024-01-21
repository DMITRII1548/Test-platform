import axios from "axios"
import router from './../../router/index'

const state = {
    tests: []
}

const getters = {
    tests: state => state.tests,
}

const mutations = {
    setTests(state, tests) {
        state.tests = tests
    },
}

const actions = {
    getTests({commit}) {
        axios.get('/api/tests/')
            .then(res => {
                commit('setTests', res.data)
            })
    },
}

export default {
    state,
    actions,
    getters,
    mutations,
}
