<script context="module" lang="ts">
  import { ScentNotes, type Product } from "../lib/product.svelte";

  import ProductCard from "../lib/components/ProductCard.svelte";

  export let productList: Product[] = [];
  const productCount = 25;

  for (let i = 0; i < productCount; i++) {
    const min = 1;
    const max = 3;
    const noteCount = Math.floor(Math.random() * (max - min + 1) + min);
    let notes: ScentNotes[] = [];
    for (let j = 0; j < noteCount; j++) {
      const noteCount = Object.keys(ScentNotes).length / 2;
      let note = ScentNotes[ScentNotes[Math.floor(Math.random() * (noteCount - 0) + 0)]];
      if(notes.includes(note)) continue;
      notes.push(note);
    }

    productList.push({
      name: "Sample Product",
      description: "This is a really cool product card!",
      notes: notes,
      price: Math.floor(Math.random() * (850 - 30) + 100) / 100,
      url: "https://google.com",
      thumbnail: `https://picsum.photos/400/300?random=${i + 1}`,
      sku: "CAMP-CAN",
      category: "Wax"
    });
  }
</script>

<div>
  <div class="flex justify-center gap-16 m-12 flex-wrap">
    {#each productList as product, i}
      <ProductCard {product} />
    {/each}
  </div>
</div>
