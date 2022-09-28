import type { Product } from "$lib/Product";
import { variables } from "$lib/variables";

export async function getAllProducts(): Promise<Product[]> {
    // // With SLUG localhost:1337/api/products?filters[sku][$eq]=can-six
    // const res = await fetch("http://localhost:1337/api/products");
    // return res.json();

    return fetch(`${variables.STRAPI_API_URL}/products?populate=Thumbnail`)
    .then(res => res.json())
    .then(json => json.data)
    .catch(() => console.log("There was an error fetching the product"));
}