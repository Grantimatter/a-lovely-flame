<script lang="ts">
  import ProductList from "$lib/components/productList.svelte";
  import { products } from '$lib/stores/productStore';
</script>

<svelte:head>
  <title>Products - A Lovely Flame</title>
</svelte:head>

<ProductList productList={$products}></ProductList>
