import './bootstrap'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { createApp, VueElement } from 'vue/dist/vue.esm-bundler'
import AppComponent from './App.vue'

import router from './router/index'


const app = createApp({
    components: {
        AppComponent,
    }
})

app.use(router)

app.mount('#app')
