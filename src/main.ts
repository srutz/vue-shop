import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import ProductsPage from './pages/ProductsPage.vue'
import AboutPage from './pages/AboutPage.vue'
import ProductDetails from './pages/ProductDetailsPage.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: ProductsPage },
        { path: '/product/:id', component: ProductDetails },
        { path: '/about', component: AboutPage },
    ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
