import { writable } from "svelte/store";
import { ScentNotes, Categories, type Product } from "../Product";

function createProducts() {
    const {subscribe, set, update} = writable<Product[]>(dummyProducts);

    return {
        update: (proudctList: Product[]) => set(proudctList),
        subscribe,
        reset:() => set(dummyProducts)
    }
}

const dummyProducts: Product[] = [{
    categories: [Categories.BathSoaks],
    description: "A bathsoak for the exhausted boxer",
    name: "Masculine Boxing",
    notes: [ScentNotes.Masculine, ScentNotes.Earthy, ScentNotes.Foody],
    price: 29.09,
    sku: "BATH-BOXE",
    thumbnail: "https://picsum.photos/400/300?random=0"
},
{
    categories: [Categories.BathSoaks, Categories.Candles],
    description: "This is a neat candle bath soak hybrid",
    name: "Citrus Love",
    notes: [ScentNotes.Citrus, ScentNotes.Fresh],
    price: 29.09,
    sku: "CAN-CITR",
    thumbnail: "https://picsum.photos/400/300?random=1"
},
{
    categories: [Categories.Candles],
    name: "Lovely Flame",
    description: "Our titular candle (hehe)",
    notes: [ScentNotes.Spicy, ScentNotes.Floral, ScentNotes.Fruity],
    price: 29.09,
    sku: "CAN-FLAM",
    thumbnail: "https://picsum.photos/400/300?random=2"
},
{
    categories: [Categories.Soap],
    description: "It's a bar of soap, neat!",
    name: "Soap On the Rocks",
    notes: [ScentNotes.Sweet, ScentNotes.Fresh],
    price: 29.09,
    sku: "BAR-ROCK",
    thumbnail: "https://picsum.photos/400/300?random=3"
},
{
    categories: [Categories.Soap],
    description: "It's a bar of soap, neat!",
    name: "Soap On the Rocks",
    notes: [ScentNotes.Sweet, ScentNotes.Fresh],
    price: 29.09,
    sku: "BAR-ROCK",
    thumbnail: "https://picsum.photos/400/300?random=4"
},
{
    categories: [Categories.Soap],
    description: "It's a bar of soap, neat!",
    name: "Soap On the Rocks",
    notes: [ScentNotes.Sweet, ScentNotes.Fresh],
    price: 29.09,
    sku: "BAR-ROCK",
    thumbnail: "https://picsum.photos/400/300?random=5"
},
{
    categories: [Categories.Soap],
    description: "It's a bar of soap, neat!",
    name: "Soap On the Rocks",
    notes: [ScentNotes.Sweet, ScentNotes.Fresh],
    price: 29.09,
    sku: "BAR-ROCK",
    thumbnail: "https://picsum.photos/400/300?random=6"
},
{
    categories: [Categories.Soap],
    description: "It's a bar of soap, neat!",
    name: "Soap On the Rocks",
    notes: [ScentNotes.Sweet, ScentNotes.Fresh],
    price: 29.09,
    sku: "BAR-ROCK",
    thumbnail: "https://picsum.photos/400/300?random=7"
},
{
    categories: [Categories.Soap],
    description: "It's a bar of soap, neat!",
    name: "Soap On the Rocks",
    notes: [ScentNotes.Sweet, ScentNotes.Fresh],
    price: 29.09,
    sku: "BAR-ROCK",
    thumbnail: "https://picsum.photos/400/300?random=8"
},
{
    categories: [Categories.Soap],
    description: "It's a bar of soap, neat!",
    name: "Soap On the Rocks",
    notes: [ScentNotes.Sweet, ScentNotes.Fresh],
    price: 29.09,
    sku: "BAR-ROCK",
    thumbnail: "https://picsum.photos/400/300?random=9"
},
{
    categories: [Categories.Soap],
    description: "It's a bar of soap, neat!",
    name: "Soap On the Rocks",
    notes: [ScentNotes.Sweet, ScentNotes.Fresh],
    price: 29.09,
    sku: "BAR-ROCK",
    thumbnail: "https://picsum.photos/400/300?random=10"
},
{
    categories: [Categories.Soap],
    description: "It's a bar of soap, neat!",
    name: "Soap On the Rocks",
    notes: [ScentNotes.Sweet, ScentNotes.Fresh],
    price: 29.09,
    sku: "BAR-ROCK",
    thumbnail: "https://picsum.photos/400/300?random=11"
},
{
    categories: [Categories.Soap],
    description: "It's a bar of soap, neat!",
    name: "Soap On the Rocks",
    notes: [ScentNotes.Sweet, ScentNotes.Fresh],
    price: 29.09,
    sku: "BAR-ROCK",
    thumbnail: "https://picsum.photos/400/300?random=12"
},
{
    categories: [Categories.Soap],
    description: "It's a bar of soap, neat!",
    name: "Soap On the Rocks",
    notes: [ScentNotes.Sweet, ScentNotes.Fresh],
    price: 29.09,
    sku: "BAR-ROCK",
    thumbnail: "https://picsum.photos/400/300?random=13"
},
{
    categories: [Categories.Soap],
    description: "It's a bar of soap, neat!",
    name: "Soap On the Rocks",
    notes: [ScentNotes.Sweet, ScentNotes.Fresh],
    price: 29.09,
    sku: "BAR-ROCK",
    thumbnail: "https://picsum.photos/400/300?random=14"
},
{
    categories: [Categories.Soap],
    description: "It's a bar of soap, neat!",
    name: "Soap On the Rocks",
    notes: [ScentNotes.Sweet, ScentNotes.Fresh],
    price: 29.09,
    sku: "BAR-ROCK",
    thumbnail: "https://picsum.photos/400/300?random=15"
},
{
    categories: [Categories.Soap],
    description: "It's a bar of soap, neat!",
    name: "Soap On the Rocks",
    notes: [ScentNotes.Sweet, ScentNotes.Fresh],
    price: 29.09,
    sku: "BAR-ROCK",
    thumbnail: "https://picsum.photos/400/300?random=16"
}]

export const products = createProducts();
export const getProducts: Product[] = dummyProducts;