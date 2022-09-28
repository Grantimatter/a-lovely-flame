<script lang="ts">
	export let data: any;

	let ourStory = data;
	$: (ourStory = data);
</script>

<svelte:head>
	<title>Our Story - A Lovely Flame</title>
</svelte:head>

<div class="card mt-12 self-center bg-primary text-base-100 sm:m-12 md:2/3 lg:w-1/2">
	<div class="card-body">
		<h2 class="card-title place-self-center">{ourStory.title}</h2>
		<p class="mt-4">
			{ourStory.body}
		</p>
	</div>
</div>
