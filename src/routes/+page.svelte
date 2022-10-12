<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import NewsletterPopup from '$components/email/newsletterPopup.svelte';
	import NewsLetterForm from '$src/lib/components/email/newsLetterForm.svelte';
	export let data;
</script>

<svelte:head>
	<title>A Lovely Flame</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Julius+Sans+One " />
</svelte:head>

<NewsletterPopup />

<div class="place-self-center text-4xl mt-8 flex flex-col justify-center">
	<a href="/our-story" class="btn btn-primary text-neutral">Check Out Our Story!</a>
</div>

<div class="hero max-h-screen w-screen lg:w-2/5 m-2 bg-neutral rounded-xl md:m-8 self-center">
	<div class="hero-content text-center w-full" style="font-family: Julius Sans One;">
		<div class="max-w-xl py-6">
			<p class="prose lg:prose-lg xl:prose-xl mb-4">
				{`Sign-Up for our Email List for 10% Off!`}
			</p>
			<NewsLetterForm data={{opened: false}}/>
		</div>
	</div>
</div>

<div
	class="grid grid-cols-2 grid-rows-2 bg-neutral place-self-center rounded-xl my-8 md:m-8 p-6 gap-4 w-fit"
	style="grid-auto-rows: 1fr; grid-auto-cols: 1fr;"
>
	<span class=""
		><a href="/products/candles"
			><img
				src="https://res.cloudinary.com/dzaonwhkq/image/upload/v1664668535/IMG_0459_x5zgoa.jpg"
				alt="three candles"
				class="object-cover w-44 h-44 md:w-96 md:h-96 rounded-xl hover:ring-4 ring-primary hover:scale-110 duration-150"
			/></a
		></span
	>

	<span class=""
		><a href="/products/soaks"
			><img
				src="https://res.cloudinary.com/dzaonwhkq/image/upload/v1664537454/small_bathsoak_16158d40c7.jpg"
				alt="soaks"
				class="object-cover w-44 h-44 md:w-96 md:h-96 rounded-xl hover:ring-4 ring-primary hover:scale-110 duration-150"
			/></a
		></span
	>
	<span>
		<a href="/products/soapbars">
			<img
				src="https://res.cloudinary.com/dzaonwhkq/image/upload/v1664668540/soap_r6lztl.jpg"
				alt="soaps"
				class="object-cover w-44 h-44 md:w-96 md:h-96 rounded-xl hover:ring-4 ring-primary hover:scale-110 duration-150"
			/>
		</a></span
	>
	<span class=""
		><a href="/products/candles"
			><img
				src="https://res.cloudinary.com/dzaonwhkq/image/upload/v1664668546/IMG_0174_fzsrx6.jpg"
				alt="Candle Close Up"
				class="object-cover w-44 h-44 md:w-96 md:h-96 rounded-xl hover:ring-4 ring-primary hover:scale-110 duration-150"
			/></a
		></span
	>
</div>
