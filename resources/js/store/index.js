import { createStore } from 'vuex'
import user from './modules/user'
import test from './modules/test'
import choice from './modules/choice'

export default createStore({
    modules: {
        user,
        test,
        choice
    }
})

