import axios from "axios"
import router from './../../router/index'

const state = {
}

const getters = {
}

const mutations = {
}

const actions = {
    storeQuestion({getters, commit}) {
        let test = getters.test
        axios.post(`/api/questions/${test.id}`, {})
            .then(res => {
                test.questions.push(res.data)

                let i = 1
                test.questions.forEach(question => {
                    question.number = i++
                })

                commit('setTest', test)
            })
    },

    updateQuestion({}, data) {
        axios.patch(`/api/questions/${data.id}`, {
            title: data.title
        })
    },

    destroyQuestion({getters, commit}, id) {
        axios.delete(`/api/questions/${id}`)
            .then(res => {
                let test = getters.test
                test.questions = test.questions.filter(question => question.id !== id)

                let i = 1
                test.questions.forEach(question => {
                    question.number = i++
                })

                commit('setTest', test)
            })
    }
}

export default {
    state,
    actions,
    getters,
    mutations,
}
