<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>A Lovely Flame</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Julius+Sans+One " />
</svelte:head>

<div class="hero max-h-screen w-screen lg:w-2/5 m-2 p-6 md:p-16 bg-neutral rounded-xl md:m-8 self-center">
	<div class="hero-content text-center w-full">
		<div class="max-w-xl">
			<h1 class="text-2xl md:text-5xl font-bold">Hello and Welcome to A Lovely Flame!</h1>
			<p class="py-6">We're so glad to have you, here's a couple links to get you started!</p>
			<a class="btn btn-primary text-neutral" href="/products/bundles">Start Shopping!</a>
			<a class="btn btn-primary ml-4 text-neutral" href="/our-story">Our Story!</a>
		</div>
	</div>
</div>
