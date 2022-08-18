<script lang="ts">
  import ProductList from "$lib/components/productList.svelte";
  import { productList } from "$lib/stores/productStore";
</script>

<svelte:head>
  <title>Products - A Lovely Flame</title>
</svelte:head>

<ProductList data={{productList: $productList}}></ProductList>
