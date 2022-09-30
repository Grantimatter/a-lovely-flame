<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import type { Product } from '../model/Product';
	import { variables } from '../variables';
	import logo from '$src/logo.svg';
	import CartComponent from './cartComponent.svelte';

	let products: Product[] = [];

	onMount(async () => {
		fetch(`${variables.STRAPI_API_URL}/products/`)
			.then((res) => res.json())
			.then((json) => {
				for (const product of json.data) {
					products.push(product);
					products = products;
				}
			})
			.catch((err) => console.error('Error retreiving products', err));
	});
</script>

<div class="navbar bg-base-200 flex w-screen md:justify-between">
	<div class="navbar-start w-1" />

	<div class="navbar-center h-10 hidden md:flex justify-center">
		<div class="">
			<ul tabindex="0" class="menu menu-horizontal p-0 h-10 flex flex-row justify-center">
				<li><a href="/">Home</a></li>
				<li tabindex="0">
					<a href="/products">
						Products
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
						>
					</a>
					<ul
						class="p-2 bg-base-200 z-[50] border-primary border-2 border-opacity-75"
						transition:fade
					>
						<li>
							<a href="/products/bundles">Bundles</a>
						</li>
						{#each products as product}
							<li>
								<a href={`/products/${product.attributes.Slug.toLowerCase()}`}
									>{product.attributes.Plural}</a
								>
							</li>
						{/each}
						<li>
							<a href="/products/addons">Addons</a>
						</li>
					</ul>
				</li>

				<a href="/" class="flex flex-row mr-8 cursor-pointer">
					<button class="material-icons btn-ghost btn-circle md:invisible">menu</button>
					<img src={logo} class="material-icons w-10" alt="Site Logo" />
					<h2 class="font-semibold ml-4 text-3xl mt-2 w-full" style="font-family: Great Vibes;">
						A Lovely Flame
					</h2>
				</a>
				<li>
					<a href="/our-story"> Our Story </a>
				</li>
				<li>
					<a href="/faq"> FAQ </a>
				</li>
			</ul>
		</div>
	</div>

	<div class="">
		<CartComponent />
	</div>
</div>
