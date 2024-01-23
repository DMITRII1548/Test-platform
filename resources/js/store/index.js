import { createStore } from 'vuex'
import user from './modules/user'
import test from './modules/test'
import choice from './modules/choice'
import question from './modules/question'

export default createStore({
    modules: {
        user,
        test,
        choice,
        question
    }
})

