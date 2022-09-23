//import { strapiUri } from "$env/static/public"
import type { Product } from "$lib/Product";

export async function getAllProducts() {
    // // With SLUG localhost:1337/api/products?filters[sku][$eq]=can-six
    // const res = await fetch("http://localhost:1337/api/products");
    // return res.json();

    return fetch("http://localhost:1337/api/products?populate=Thumbnail")
    .then(res => res.json())
    .then(json => json.data)
}