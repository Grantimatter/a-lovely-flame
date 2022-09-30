<script lang="ts">
    import { cartStore } from "$src/lib/stores/cartStore";
</script>

<div class="font-bold text-primary p-60 text-center text-5xl">You are at the cart!</div>

<div>
    {#each $cartStore.productList}
    [/each]
</div>