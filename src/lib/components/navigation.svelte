<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import ProductType from '../model/ProductType';
	import { variables } from '../variables';
	import CartComponent from './cartComponent.svelte';
	import Footer from './footer.svelte';
	import Header from './header.svelte';
	import SiteLogo from './siteLogo.svelte';

	let productTypes: ProductType[] = [];
	let checked = false;

	onMount(async () => {
		fetch(`${variables.STRAPI_API_URL}/product-types/`)
			.then((res) => res.json())
			.then((json) => {
				productTypes = ProductType.createAllFromApi(json).sort((a, b) => a.SortOrder - b.SortOrder);
			})
			.catch((err) => console.error('Error retreiving products', err));
	});
</script>

<div class="drawer w-screen !p-0">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle flex justify-around" bind:checked />
	<div class="drawer-content">
		<!-- Navbar -->
		<div class="min-h-screen flex flex-col justify-between">
			<div>
				<Header />

				<div class="w-full navbar bg-base-300">
					<div class="flex-none lg:hidden">
						<label for="my-drawer-3" class="btn btn-square btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block w-6 h-6 stroke-current"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/></svg
							>
						</label>
					</div>
					<div class="flex lg:hidden justify-around w-full">
						<SiteLogo />
						<CartComponent />
					</div>
					<div class="flex-none hidden lg:flex justify-around w-full ml-0">
						<div />
						<ul class="menu !p-o menu-horizontal">
							<!-- Navbar menu content here -->
							<li class="rounded-xl mr-2"><a href="/">Home</a></li>
							<li tabindex="0" class="mr-4 rounded-xl">
								<div class="cursor-default">
									Products
									<svg
										class="fill-current"
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
									>
								</div>
								<ul
									class="p-2 bg-base-200 z-[50] border-primary rounded-xl border-2 border-opacity-75"
									transition:fade
								>
									{#each productTypes as type}
										<li class="">
											<a href={`/products/${type.Slug.toLowerCase()}`}>{type.Plural}</a>
										</li>
									{/each}
								</ul>
							</li>
							<div class="mr-4">
								<SiteLogo />
							</div>
							<li><a href="/our-story">Our Story</a></li>
							<li class="rounded-xl"><a href="/faq">FAQ</a></li>
						</ul>
						<div class="hidden lg:flex"><CartComponent /></div>
					</div>
				</div>
			</div>
			<div class="flex flex-col gap-4">
				<slot />
			</div>
			<Footer />
		</div>
	</div>

	<div class="drawer-side p-1/2">
		<label for="my-drawer-3" class="drawer-overlay" />
		<ul class="menu !p-o p-4 w-fit overflow-y-auto  bg-base-100">
			<!-- Sidebar content here -->

			<li on:click={() => (checked = false)}><a href="/">Home</a></li>
			<li><span>Products</span></li>

			<ul class="dropdown-content menu w-52 p-2 bg-base-200 rounded-xl">
				{#each productTypes as type}
					<li on:click={() => (checked = false)}>
						<a href={`/products/${type.Slug.toLowerCase()}`}>{type.Plural}</a>
					</li>
				{/each}
			</ul>

			<li on:click={() => (checked = false)}><a href="/our-story">Our Story</a></li>
			<li on:click={() => (checked = false)}><a href="/faq">FAQ</a></li>
		</ul>
	</div>
</div>
