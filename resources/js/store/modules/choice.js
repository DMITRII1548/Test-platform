import axios from "axios"
import router from './../../router/index'

const state = {
}

const getters = {
}

const mutations = {
}

const actions = {
    updateChoiceTitle({}, choice) {
        axios.patch(`/api/choices/${choice.id}`, {
            title: choice.title
        })
    },

    updateChoiceIsTrue({}, choice) {
        axios.patch(`/api/choices/${choice.id}`, {
            is_true: !choice.is_true
        })
    },

    storeChoice({getters, commit}, questionId) {
        axios.post(`/api/choices/${questionId}`)
            .then(res => {
                let test = getters.test
                test.questions.forEach((value, key) => {
                    if (value.id === questionId) test.questions[key].choices.push(res.data)
                })

                commit('setTest', test)
            })
    },

    destroyChoice({getters, commit}, data) {
        axios.delete(`/api/choices/${data.choiceId}`)
            .then(res => {
                let test = getters.test
                test.questions.forEach((value, key) => {
                    if (value.id === data.questionId) {
                        test.questions[key].choices = test.questions[key].choices.filter(choice => choice.id !== data.choiceId)
                    }
                }) 

                commit('setTest', test)
            })
    },
}

export default {
    state,
    actions,
    getters,
    mutations,
}
