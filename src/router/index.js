import { createRouter, createWebHistory } from 'vue-router'

import AuthView from '@/views/AuthView.vue'
import ProfileView from '@/views/ProfileView.vue'
import FriendsView from '@/views/FriendsView.vue'

const routes = [
    {
        path: '/',
        redirect: '/auth'
    },

    {
        path: '/auth',
        name: 'auth',
        component: AuthView
    },

    {
        path: '/profile',
        name: 'profile',
        component: ProfileView
    },

    {
        path: '/friends',
        name: 'friends',
        component: FriendsView
    },

    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router