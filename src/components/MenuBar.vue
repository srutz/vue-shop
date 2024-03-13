<template>
    <div class="flex items-center bg-gray-800 p-4">
        <h1 class="text-2xl text-gray-400 font-semibold select-none pb-0">My App</h1>
        <div class="flex gap-2 ml-8">
        <router-link v-for="link in links" 
                :to="link.link" :class="active(link.link)" 
                class="text-white font-semibold">{{link.display}}</router-link>
        </div>
        <div class="flex-grow"></div>
        <div class="flex gap-2">
            <div @click="opencart" class="cursor-pointer select-none text-white font-semibold">Cart</div>
            <span class="text-white font-semibold">{{ getCartQuantity() }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">

import { Ref, inject } from 'vue';
import { CartItem } from '../types';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()

const cartItems = inject<Ref<CartItem[]>>('items');
const opencart = () => {
    router.push("/cart")
}

const getCartQuantity = () => {
    return cartItems?.value.reduce((acc, item) => acc + item.quantity, 0)
}

const route = useRoute()
const active = (path: string) => path == route.path && "border-b-2"

const links = [
    { link: "/", display: "Home"},
    { link: "/about", display: "About"},
    { link: "/impressum", display: "Impressum"},
]


</script>