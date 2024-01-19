import './bootstrap'
import { createApp, VueElement } from 'vue/dist/vue.esm-bundler'
import AppComponent from './App.vue'


const app = createApp({
    components: {
        AppComponent,
    }
})

app.mount('#app')
