import type { Product } from "$lib/model/Product";
import { variables } from "$lib/variables";

export async function getAllProducts(): Promise<Product[]> {
    // // With SLUG localhost:1337/api/products?filters[sku][$eq]=can-six
    // const res = await fetch("http://localhost:1337/api/products");
    // return res.json();

    return fetch(`${variables.STRAPI_API_URL}/products?populate=Thumbnail`)
    .then(res => res.json())
    .then(json => json.data)
    .catch(() => console.error("There was an error fetching the product"));
}

export async function getProductLineItems(products: Product[]): Promise<LineItem[]> {
    return fetch(`${variables.STRAPI_API_URL}/products?fields[0]=Slug&fields[1]=line_item`)
    .then(res => res.json())
    .then(json => json.data)
    .then((data) => {
        const fetchedProducts: Product[] = data.map((pr: any) => {
            return {
                Slug: pr.attributes.Slug,
                line_item: pr.attributes.line_item
            }
        });
        
        const line_items: LineItem[] =[];
        products.forEach((product: Product) => {
            fetchedProducts.forEach((fp: Product) => {
                if (product.Slug == fp.Slug) {
                    const item = line_items.find((i) => {
                        if (i.Price == fp.line_item) {
                            i.quantity += 1;
                        return i;
                        }
                        return null;
                    });

                    if(!item) {
                        const newItem: LineItem = {price: fp.line_item, quantity: 1};

                        line_items.push(newItem);
                    }
                    // else {
                    //     item.quantity += 1;
                    //     line_items = line_items.map(line_item => line_item.price == item.price ? item : line_item);
                    // }
                }
            });
        });

        return line_items;
    });
}

export interface LineItem {
    price: string,
    quantity: number
}

function addLineItem(fetchedProducts: Product[], line_items: LineItem[], newLineItem: LineItem): LineItem {
    fetchedProducts.forEach(product => {
        if (product.line_item.price === newLineItem.price) {
            newLineItem = product.quantity + 1;
        }
        return product;
    });

    return line_items;
}