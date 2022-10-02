<script lang="ts">
	import type { Fragrances, Product } from '$src/lib/model/Product';
	import { cartStore } from '$src/lib/stores/cartStore';
	import type { PageData } from './$types';

	export let data: PageData;

	let quantity: number = 1;
    let bundle = data[0].attributes;
    let products = bundle.products;
    let fragrances = bundle.fragrances.data;
	$: bundle = data[0].attributes;
    $: products = bundle.products;
    $: fragrances = bundle.fragrances.data;
    console.info("Bundle ", bundle);
	

	function addToCart() {
		//let addProdcucts = new Array(quantity).fill(product);

		cartStore.add(bundle);
	}
</script>

<div class="self-center bg-neutral p-8 rounded-2xl my-12 h-full w-full lg:w-8/12 xl:w-7/12">
	{#if bundle}
		<div class="flex flex-col justify-between md:flex-row gap-12 w-full">
			<div class="flex flex-col text-2xl items-center gap-2 w-full md:w-2/3">
				<img
					class="rounded-2xl"
					src={bundle.Thumbnail.data.attributes.url}
					alt="Product thumbnail"
				/>
			</div>
			<div class="flex flex-col bg-base-100 rounded-xl p-8 justify-between w-full xl:w-1/2 gap-12">
				<div class="flex flex-col">
					<div class="place-self-center mb-6 text-xl font-semibold">
						{bundle.Name}
					</div>
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
                                  px-2
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
						= ${bundle.Price * quantity}
					</div>
                    <div class="place-self-center mt-2 text-xl bg-primary text-neutral p-1 rounded-full px-3">${(bundle.Price + bundle.Savings) * quantity} Value!</div>
				</div>
                <h1 class="text-lg font-semibold -mb-4">{fragrances[0].attributes.Name}</h1>
				<div class="bg-neutral p-4 -m-4 rounded-xl prose xl:prose-xl">
					{@html fragrances[0].attributes.Story}
				</div>
				<div class="mt-8 bg-neutral rounded-xl">
					<div class="collapse collapse-arrow">
						<input type="checkbox" checked />
						<div class="collapse-title text-xl font-medium">Description</div>
						<div class="collapse-content bg-base-300 rounded-b-xl">
							<p class="pt-3 prose xl:prose-xl">{@html bundle.Description}</p>
						</div>
					</div>
				</div>

				<button class="btn btn-primary text-neutral" on:click={addToCart}>
					Add {quantity > 1 ? quantity : ''} To Cart
					<span class="badge badge-accent ml-1 py-3">${bundle.Price * quantity}</span>
				</button>
			</div>
		</div>
	{:else}
		<div>Product not found!</div>
	{/if}
</div>
