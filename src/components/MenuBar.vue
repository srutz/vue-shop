<template>
    <div class="flex items-center bg-gray-800 p-4">
        <h1 class="text-2xl text-gray-400 font-semibold select-none">My App</h1>
        <div class="flex gap-2 ml-8">
            <router-link to="/" class="text-white font-semibold">Home</router-link>
            <router-link to="/about" class="text-white font-semibold">About</router-link>
        </div>
        <div class="flex-grow"></div>
        <div class="flex gap-2">
            <router-link to="/cart" class="text-white font-semibold">Cart</router-link>
            <span class="text-white font-semibold">{{ getCartQuantity() }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">

import { inject } from 'vue';
import { CartItem } from '../types';

const cartItems = inject<CartItem[]>('items') || [];

const getCartQuantity = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0)
}

</script>