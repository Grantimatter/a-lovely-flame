<script lang="ts">
	import type { Fragrances, Product } from '$src/lib/model/Product';
	import { cartStore } from '$src/lib/stores/cartStore';
  import { variables } from '$src/lib/variables';
  	import { onMount } from 'svelte';

	export let data: any;
	let bundle: any = data;

	let fragrance: Fragrances = bundle.fragrances.data[0];
	let quantity: number = 1;
	$: bundle = data;
	$: fragrance = bundle.fragrances.data[0];
	$: console.info("bundle:", bundle );

	function addToCart() {
		let fullProduct = bundle;
		fullProduct.fullSku = bundle.sku + "-" + fragrance.attributes.SKU;
		fullProduct.fragrance = fragrance;

		cartStore.add(new Array(quantity).fill(bundle));
	}

</script>

<div class="bg-neutral p-8 rounded-2xl flex m-12 h-full w-1/2">
	{#if bundle}
		<!-- <div class="text-5xl font-semibold text-center m-8">
        {fragrance.attributes.Name} - {product.attributes.Title}
    </div> -->
		<div class="flex flex-col justify-between md:flex-row gap-8 w-full">
			<div class="flex flex-col text-2xl items-center gap-2 w-2/3">
				<img
					class="rounded-2xl"
					src={bundle.Thumbnail.data.attributes.url}
					alt="Product thumbnail"
				/>
				<div>
					{fragrance.attributes.Name}
				</div>
				<div>
					{bundle.Title}
				</div>
			</div>
			<div class="flex flex-col w-1/3 bg-base-100 rounded-xl p-8 justify-between">
				<div class="flex flex-col">
					<div class="flex flex-row gap-2 text-2xl justify-center">
						<h1>${bundle.Price}</h1>
						<h1>x</h1>
						<label for="quantity" class="form-label inline-block mb-2">Qty.</label>
						<input
							type="number"
							class="
                                  form-control
                                  block
                                  w-16
                                  px-3
                                  py-1.5
                                  text-base
                                  font-normal
                                  border border-solid border-gray-base-400
                                  bg-base-100
                                  rounded
                                  transition
                                  ease-in-out
                                  focus:text-neutral-content focus:bg-base-200 focus:border-primary focus:outline-none
                                "
							id="quantity"
							placeholder="1"
							min="1"
							max="20"
							bind:value={quantity}
						/>
					</div>
					<div class="text-center mt-2">
						Total: ${bundle.Price * quantity}
					</div>
				</div>
				{#if bundle.Addons}
					<div class="flex flex-row gap-2">Addons -</div>
				{/if}
				<div>
					<h1 class="text-lg font-semibold">Why You'll Love It!</h1>
					<p class="my-4">{bundle.WhyLove}</p>
				</div>
				<button class="btn btn-primary" on:click={addToCart}>
					Add To Cart <span class="badge badge-accent ml-1 py-3"
						>${bundle.Price * quantity}</span
					>
				</button>
			</div>
		</div>
		<!-- <div class="m-12">
			<ProductCard data={{ fragrance, product }} />
		</div> -->
	{:else}
		<div>Product not found!</div>
	{/if}
</div>
