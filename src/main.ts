import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import ProductsPage from './pages/ProductsPage.vue'
import ProductDetails from './pages/ProductDetailsPage.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: ProductsPage },
        { path: '/product/:id', component: ProductDetails },
        { path: '/about', component: () => import('./pages/AboutPage.vue') },
        { path: '/cart', component: () => import('./pages/CartPage.vue') },
        { path: '/impressum', component: () => import('./pages/Impressum.vue') },
    ],
})
router.beforeEach(async (to, from) => {
    console.log("going from :" + from?.path + " to " + to.path)    
})

const app = createApp(App)
app.use(router)
app.mount('#app')


const developermode = !!(import.meta.env.VITE_DEVELOPERMODE)
if (developermode) {
    router.push('/about')
}


