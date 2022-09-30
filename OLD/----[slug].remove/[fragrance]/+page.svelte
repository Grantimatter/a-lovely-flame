<script lang="ts">
	import type { Fragrances, Product } from '$src/lib/model/Product';
	import { cartStore } from '$src/lib/stores/cartStore';

	export let data: Product;

	let product: Product = data;
	let fragrance: Fragrances = product.attributes.Fragrances.data[0];
	let quantity: number = 1;
	$: product = data;
	$: fragrance = product.attributes.Fragrances.data[0];

	function addToCart() {
		let fullProduct = product;
		fullProduct.fullSku = product.attributes.sku + '-' + fragrance.attributes.SKU;
		fullProduct.fragrance = fragrance;

		cartStore.add(new Array(quantity).fill(product));
	}
</script>

<div class="w-full xl:w-2/3 self-center">
	<div
		class="bg-neutral p-8 rounded-2xl flex flex-col lg:flex-row justify-around my-8 mx-1 h-1/2"
	>
		{#if product}
			<!-- <div class="text-5xl font-semibold text-center m-8">
        {fragrance.attributes.Name} - {product.attributes.Title}
    </div> -->
			<div class="flex flex-col justify-between md:flex-row gap-8 w-full">
				<div class="flex flex-col text-2xl items-center gap-2">
					<img
						class="rounded-2xl"
						src={product.attributes.Thumbnail.data.attributes.url}
						alt="Product thumbnail"
					/>
					<div class="flex flex-col bg-base-100 p-3 items-center rounded-lg">
						<div>
							{fragrance.attributes.Name}
						</div>
						<div>
							{product.attributes.Title}
						</div>
					</div>
				</div>
				<div class="flex flex-col w-full lg:w-1/2 bg-base-100 rounded-xl p-8 justify-between gap-8">
					<div class="flex flex-col">
						<div class="flex flex-row gap-2 text-2xl justify-center">
							<h1>${product.attributes.Price}</h1>
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
							Total: ${product.attributes.Price * quantity}
						</div>
					</div>
					{#if product.attributes.Addons}
						<div class="flex flex-row gap-2">Addons -</div>
					{/if}

					<div class="collapse collapse-arrow bg-neutral rounded-lg">
						<input type="checkbox" />
						<div class="collapse-title text-xl font-medium">
							<h1 class="text-lg font-semibold">Why You'll Love It!</h1>
						</div>
						<div class="collapse-content">
							<p class="my-4">{product.attributes.WhyLove}</p>
						</div>
					</div>

					<div class="collapse collapse-arrow bg-neutral rounded-lg">
						<input type="checkbox" />
						<div class="collapse-title text-xl font-medium">
							<h1 class="text-lg font-semibold">Usage</h1>
						</div>
						<div class="collapse-content">
							<p class="my-4">{product.attributes.Usage}</p>
						</div>
					</div>
					<button class="btn btn-primary" on:click={addToCart}>
						Add To Cart <span class="badge badge-accent ml-1 py-3"
							>${product.attributes.Price * quantity}</span
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
</div>
