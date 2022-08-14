<script lang="ts">
	import { fade } from 'svelte/transition';
	import { spaceCamel } from '$lib/utility/stringHelper';

</script>

<div class="navbar-start">
	<button class="material-icons btn-ghost btn-circle md:invisible">menu</button>
</div>

<div class="navbar-center">
    <span class="md:invisible material-icons">local_fire_department</span>
	<div class="md:hidden font-semibold">A Lovely Flame</div>
	<div class="hidden md:flex">
		<ul tabindex="0" class="menu menu-horizontal p-0">
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
					<!-- {#each categories as category}
						<li>
							<a href={`/products/category/${category.toLowerCase()}`}>{spaceCamel(category)}</a>
						</li>
					{/each} -->
				</ul>
			</li>
			<li>
				<a href="/blog"> Blog </a>
			</li>
			<li>
				<a href="/story"> Our Story </a>
			</li>
			<li>
				<a href="/faq"> FAQ </a>
			</li>
		</ul>
	</div>
</div>
