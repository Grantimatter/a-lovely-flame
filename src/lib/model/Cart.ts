//import cartStore from "../stores/cartStore";
import type { Product } from "./Product";
import type User from "./User";
import { getUser } from "./User";

export default class Cart {

    user: User;
    products: Product[];
    /** Creates a new cart
     *
     */
    constructor(user: User, products: Product[]) {
        this.user = user;
        this.products = products;
    }

    /**
     * 
     * @returns the current cart for the user
     */
    public static async getCurrentCart(): Promise<Cart> {
        const user = await getUser();
        const products = (await Cart.fetchCart(user)).products;
        return new Cart(user, products);
    }

    public static async addToCart(products: Product[]): Promise<Cart>{
        // TODO Might be done?
        const cart = await this.getCurrentCart();
        console.info("CART GROWING...", cart);
        cart.products = cart.products.concat(products);
        console.info("Check Cart Bigger...", cart);
        // TODO PUSH CART TO API
        //cartStore.set(cart);
        return this.setLocalCart(cart);
    }

    public static async removeFromCart(products: Product): Promise<Cart> {
        const cart = await this.getCurrentCart();

        // TODO REMOVE PRODUCTS FROM CART

        // const new = products.map((product) => {
        //     return product.attributes.sku == products[i].attributes.sku
        // });

        // cart.products = newProducts;
        

        // TODO SEND UPDATED CART TO API AND LOCAL
        return cart;
    }

    public static setLocalCart(cart: Cart): Cart {
        localStorage.setItem("cart", JSON.stringify(cart));
        return cart;
    }

    public static clearCart(cart: Cart) {
        localStorage.removeItem("cart");
        // TODO Remove from API as well
    }

    private static async fetchCart(user: User): Promise<Cart> {
        // TODO
        // FETCH FROM API


        // IF FAILED TO FETCH, LOAD LOCAL
        // MAYBE GIVE A CART A UNIQUE ID SO IT WILL WORK WITH MULTIPLE USERS ON THE SAME BROWSER
        return this.getLocalCart(user);
    }

    private static getLocalCart(user: User): Cart {
        const cartString = localStorage.getItem("cart");
        if (!cartString) return Cart.createLocalCart(user);
        return JSON.parse(cartString) as Cart;
    }

    private static createLocalCart(user: User): Cart {
        const cart = new Cart(user, []);
        
        return this.setLocalCart(cart);
    }

}
