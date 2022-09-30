import { writable, derived } from 'svelte/store';
import User from '$lib/model/User';
import { browser } from '$app/env';
import Cart from '../model/Cart';
import type { Product } from '../model/Product';

const defaultValue = new Cart(new User("", ""), []);
const initialValue = browser ? await Cart.getCurrentCart() : defaultValue;


function createCartStore() {
    const { subscribe, set, update } = writable<Cart>(initialValue);

    return {
        subscribe,
        
        add: (productList: Product[]) => {
            if(browser) {
                const cart = Cart.addToCart(productList).then((newCart) => set(newCart));
                //set(cart);
                //return cart;
            }
        },

        clear: (cart: Cart) => {
            if(browser) {
                Cart.clearCart(cart);
                set(defaultValue);
                return defaultValue;
            }
        },

        // update: async (cart: Cart) => {

        //     const newCart = await Cart.getCurrentCart();
        //     update(() => {
        //         return newCart;
        //     });
        //     return newCart;
        // }
    }
}

export const  cartStore = createCartStore();

export const total = derived(
    cartStore,
    $cartStore => {
        let total = 0;
        $cartStore.products.forEach(product => total += product.attributes.Price);
        return total;
    }
);