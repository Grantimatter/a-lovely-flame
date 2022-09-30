<script lang="ts">
    import { cartStore, cartProducts } from "$src/lib/stores/cartStore";
    
</script>

<div>
    {#each $cartProducts as product}
        <div class="text-xl">
            {product.attributes.Title} - ${product.attributes.Price}
        </div>
    {/each}
</div>