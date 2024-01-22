import axios from "axios"
import router from './../../router/index'

const state = {
    tests: [],
    test: {}
}

const getters = {
    tests: state => state.tests,
    test: state => state.test
}

const mutations = {
    setTests(state, tests) {
        state.tests = tests
    },

    setTest(state, test) {
        state.test = test
    }
}

const actions = {
    getTests({commit}) {
        axios.get('/api/tests/')
            .then(res => {
                commit('setTests', res.data)
            })
    },

    getTest({commit}, id) {
        axios.get(`/api/tests/${id}`)
            .then(res => {
                let i = 1

                res.data.questions.forEach(q => {
                    q.number = i++
                })

                commit('setTest', res.data)
            })
    },
}

export default {
    state,
    actions,
    getters,
    mutations,
}
