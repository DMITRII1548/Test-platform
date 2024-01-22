import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    // Home
    {
        path: '/',
        component: () => import('./../views/Pages/Main.vue'),
        name: 'home',
    },
    // Auth
    {
        path: '/login',
        component: () => import('./../views/User/Login.vue'),
        name: 'login',
    },
    {
        path: '/register',
        component: () => import('./../views/User/Registration.vue'),
        name: 'register',
    },
    {
        path: '/personal',
        component: () => import('./../views/User/Personal.vue'),
        name: 'personal',
    },
    // Test
    {
        path: '/tests/:id/edit',
        component: () => import('./../views/Test/Edit.vue'),
        name: 'test.edit'
    },
]

const router =  createRouter({
    mode: 'history',
    history: createWebHistory(),
    routes,
})

// router.beforeEach((to, from, next) => {
//     const token = localStorage.getItem('x_xsrf_token')

//     if (!token) {
//         if (to.name === 'user.login') {
//             return next()
//         } else if (to.name === 'user.registration') {
//             return next()
//         } else if (to.name === 'user.forgot-password') {
//             return next()
//         } else if (to.name === 'user.reset-password') {
//             return next()
//         } else {
//             return next({ name: 'user.login' })
//         }
//     } else {
//         if (to.name === 'user.login') {
//             return next({ name: 'user.dashboard' })
//         } else if (to.name === 'user.registration') {
//             return next({ name: 'user.dashboard' })
//         } else if (to.name === 'user.forgot-password') {
//             return next({ name: 'user.dashboard' })
//         } else if (to.name === 'user.reset-password') {
//             return next({ name: 'user.dashboard' })
//         } else {
//             return next()
//         }
//     }

// })

export default router

