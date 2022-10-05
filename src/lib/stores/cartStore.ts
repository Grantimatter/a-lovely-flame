import { writable, derived } from 'svelte/store';
import User from '$lib/model/User';
import { browser } from '$app/env';
import Cart from '../model/Cart';
import type { Product } from '../model/Product';

function createCartStore() {
    const defaultValue = new Cart(new User("", ""), []);
    
    if (browser) {
        Cart.getCurrentCart().then(cart => set(cart));
    }

    const { subscribe, set, update } = writable<Cart>(defaultValue);

    return {
			subscribe,

			add: (productList: Product[]) => {
				if (browser) {
					Cart.addToCart(productList).then((newCart) => set(newCart));
				}
			},

			remove: (product: Product) => {
				if (browser) {
					Cart.removeFromCart(product).then((newCart) => set(newCart));
				}
			},

			clear: () => {
				if (browser) {
					Cart.clearCart();
					set(defaultValue);
					return defaultValue;
				}
			}
		};
}

export const cartStore = createCartStore();

export const total = derived(
    cartStore,
    $cartStore => {
        let total = 0;
        $cartStore.products.forEach(product => total += product.Price);
        return total;
    }
);

export const cartProducts = derived(
    cartStore,
    $cartStore => {
        return $cartStore.products;
    }
);