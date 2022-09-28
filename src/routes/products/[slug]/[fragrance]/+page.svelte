<script lang="ts">
	import ProductCard from '$src/lib/components/productCard.svelte';
	import type { Fragrances, Product } from '$src/lib/Product';
  import { variables } from '$src/lib/variables';

	export let data: Product;

	let product: Product = data;
	let fragrance: Fragrances = product.attributes.Fragrances.data[0];
    let quantity: number = 1;
	$: product = data;
	$: fragrance = product.attributes.Fragrances.data[0];


	console.log('Product:', product);
</script>

<div class=" flex m-12 h-full w-2/3">
	{#if product}
    <!-- <div class="text-5xl font-semibold text-center m-8">
        {fragrance.attributes.Name} - {product.attributes.Title}
    </div> -->
        <div class="flex flex-col md:flex-row gap-24 w-4/5">
            <div class="flex flex-col text-2xl items-center">
                <img class="rounded-2xl" src="{variables.STRAPI_URL}{product.attributes.Thumbnail.data.attributes.url}" alt="Product thumbnail"/>
                <div>
                    {fragrance.attributes.Name}
                </div>
                <div>
                    {product.attributes.Title}
                </div>
            </div>
            <div class="flex flex-col p-8 w-1/5">
                Total: ${product.attributes.Price}
            </div>
        </div>
		<!-- <div class="m-12">
			<ProductCard data={{ fragrance, product }} />
		</div> -->
	{:else}
		<div>Product not found!</div>
	{/if}
</div>
