import { defineStore } from 'pinia'
import { CartItem, Product } from './types'
import { computed, ref } from 'vue'




export const useCartItems = defineStore('cartitems',() => {
    const items = ref<CartItem[]>([]);
    const changeQuantity = (delta: number, product: Product) => {
        const item = items.value.find(item => item.product.id = product.id)
        if (item) {
            item.quantity = Math.max(0, item.quantity + delta)
        } else {
            items.value.push({ product, quantity: 1 })
        }
    }
    const doubleLength = computed(() => {
        return items.value.length * 2
    })
    return { items, changeQuantity, doubleLength }
})
