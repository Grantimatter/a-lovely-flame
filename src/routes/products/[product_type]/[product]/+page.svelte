<script lang="ts">
	import type { Fragrances, Product } from '$src/lib/model/Product';
	import { cartStore } from '$src/lib/stores/cartStore';
	import { productStore } from '$src/lib/stores/productStore';
	import type { PageData } from './$types';

	export let data: PageData;

	let quantity: number = 1;
	$: product = data[0].attributes;

	let fragrance;
	$: if (product.Fragrances && product.Fragrances.data && product.Fragrances.data[0]) {
		fragrance = product.Fragrances.data[0].attributes;
		fragrance = product.Fragrances.data[0].attributes;
	}

	$: addons = product.Addons.data;

	let addonsSelected: Product[] = [];

	$: addonPrice = () => {
		let price = 0;
		addonsSelected.forEach((a) => (price += a.attributes.Price));
		return price;
	};

	function addToCart() {
		let addProdcucts = new Array(quantity).fill(product);
		const selAdd = addonsSelected.map((addon) => addon.attributes);

		let finalProds = [];
		if (addonsSelected.length > 0) {
			finalProds = finalProds.concat(addProdcucts, selAdd);
		} else {
			finalProds = addProdcucts;
		}

		cartStore.add(finalProds);
	}
</script>

<div class="self-center bg-neutral p-8 rounded-2xl my-12 h-full w-full lg:w-8/12 xl:w-7/12">
	{#if product}
		<div class="flex flex-col justify-between md:flex-row gap-12 w-full">
			<div class="flex flex-col text-2xl items-center gap-2 w-full md:w-2/3">
				<img
					class="rounded-2xl"
					src={product.Thumbnail.data.attributes.url}
					alt="Product thumbnail"
				/>
			</div>
			<div class="flex flex-col bg-base-100 rounded-xl p-8 justify-between w-full xl:w-1/2 gap-12">
				<div class="flex flex-col">
					<div class="place-self-center mb-6 text-xl font-semibold">
						{product.Title}
					</div>
					<div class="flex flex-row gap-2 text-2xl justify-center">
						<h1>${product.Price}</h1>
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
						= ${product.Price * quantity}
					</div>
					{#if addons.length > 0}
						<h1 class="mt-6 mb-3 text-xl font-semibold">Addons</h1>
						<div
							id="addons"
							class="flex flex-row flex-wrap justify-center bg-neutral rounded-xl p-2 text-xl font-semibold items-center align-middle gap-2"
						>
							{#each addons as addon}
								<div class="flex flex-row gap-2 p-1">
									{addon.attributes.Title} - ${addon.attributes.Price}
									<input type="checkbox" bind:group={addonsSelected} value={addon} />
								</div>
							{/each}
						</div>
					{/if}
				</div>
				{#if fragrance}
					<div class="bg-neutral p-4 -m-4 rounded-xl prose xl:prose-xl">
						{@html fragrance.Story}
					</div>
				{/if}

				<div class="mt-8 bg-neutral rounded-xl">
					<div class="collapse collapse-arrow">
						<input type="checkbox" />
						<div class="collapse-title text-xl font-medium">Why You'll Love It!</div>
						<div class="collapse-content bg-base-300">
							<p class="pt-3 prose xl:prose-xl">{@html product.WhyLove}</p>
						</div>
					</div>

					<div class="collapse collapse-arrow">
						<input type="checkbox" />
						<div class="collapse-title text-xl font-medium">Usage</div>
						<div class="collapse-content bg-base-300 rounded-b-xl">
							<p class="pt-3 prose xl:prose-xl">{@html product.Usage}</p>
						</div>
					</div>

					{#if product.product_type && product.product_type.data.attributes && product.product_type.data.attributes.Ingredients}
					<div class="collapse collapse-arrow">
						<input type="checkbox" />
						<div class="collapse-title text-xl font-medium">Ingredients</div>
						<div class="collapse-content bg-base-300 rounded-b-xl">
							<p class="pt-3">{product.product_type.data.attributes.Ingredients}</p>
						</div>
					</div>
					{/if}
				</div>

				<button class="btn btn-primary" on:click={addToCart}>
					Add {quantity > 1 ? quantity : ''} To Cart
					<span class="badge badge-accent ml-1 py-3"
						>${product.Price * quantity + addonPrice()}</span
					>
				</button>
			</div>
		</div>
	{:else}
		<div>Product not found!</div>
	{/if}
</div>
