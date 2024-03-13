import { defineStore } from 'pinia'
import { CartItem, Product } from './types'

type CartItemsState = { items: CartItem[] }
type Getters = { }
type Actions = {
    changeQuantity(delta: number, product: Product): void
}

export const useCartItems = 
defineStore<'cartitems', CartItemsState, Getters, Actions>('cartitems', {
    state: () => ({
        items: [],
    }),
    getters: {
    },
    actions: {
        changeQuantity(delta: number, product: Product) {
            console.table(this.$state.items)
            const item = this.$state.items.find((item) => item.product.id == product.id)
            if (item) {
                item.quantity = Math.max(0, item.quantity + delta)
            } else {
                this.$state.items.push({ product, quantity: 1 })
            }
        },
    },
})