<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>A Lovely Flame</title>
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Julius+Sans+One " />
</svelte:head>

<div
	class="hero max-h-screen w-screen lg:w-2/5 m-2 p-6 md:p-16 bg-neutral rounded-xl md:m-8 self-center"
>
	<div class="hero-content text-center w-full">
		<div class="max-w-xl">
			
			<div>
				<div class="carousel h-80">
					
					<div id="slide1" class="carousel-item relative w-full">
					  <img src="https://res.cloudinary.com/dzaonwhkq/image/upload/v1664537131/medium_wick_trimmer_b164b957e9.jpg" class="w-full  object-contain" />
					  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide4" class="btn btn-circle">❮</a> 
						<a href="#slide2" class="btn btn-circle">❯</a>
					  </div>
					</div> 
					<div id="slide2" class="carousel-item relative w-full object-cover">
					  <img src="https://res.cloudinary.com/dzaonwhkq/image/upload/v1664536575/soap_bag_da82050264.jpg" class="w-full" />
					  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide1" class="btn btn-circle">❮</a> 
						<a href="#slide3" class="btn btn-circle">❯</a>
					  </div>
					</div> 
					<div id="slide3" class="carousel-item relative w-full object-cover">
					  <img src="https://placeimg.com/800/200/arch" class="w-full object-contain" />
					  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide2" class="btn btn-circle">❮</a> 
						<a href="#slide4" class="btn btn-circle">❯</a>
					  </div>
					</div> 
					<div id="slide4" class="carousel-item relative w-full object-cover">
					  <img src="https://placeimg.com/800/200/arch" class="w-full" />
					  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide3" class="btn btn-circle">❮</a> 
						<a href="#slide1" class="btn btn-circle">❯</a>
					  </div>
					</div>
				  </div>
			</div>

			<p class="mt-8">
				Every Pre-Order Includes: Two Soaps in Not My Problem and a Sisal Soap Bag! A $24 Value!
				Launch Day is October 12th! Don’t Miss Out! All Pre-Orders will be Shipped October 12th!
				Sign-Up for our Email List for 10% Off!
			</p>
		</div>
	</div>
</div>


<!-- <div
	class="hero max-h-screen w-screen lg:w-2/5 m-2 p-6 md:p-16 bg-neutral rounded-xl md:m-8 self-center"
>
	<div class="hero-content text-center w-full">
		<div class="max-w-xl">
			<h1 class="text-2xl md:text-5xl font-bold">Hello and Welcome to A Lovely Flame!</h1>
			<p class="py-6">We're so glad to have you, here's a couple links to get you started!</p>
			<a class="btn btn-primary text-neutral" href="/products/bundles">Start Shopping!</a>
			<a class="btn btn-primary ml-4 text-neutral" href="/our-story">Our Story!</a>
			<p class="mt-8">
				Every Pre-Order Includes: Two Soaps in Not My Problem and a Sisal Soap Bag! A $24 Value!
				Launch Day is October 12th! Don’t Miss Out! All Pre-Orders will be Shipped October 12th!
				Sign-Up for our Email List for 10% Off!
			</p>
		</div>
	</div>
</div> -->
