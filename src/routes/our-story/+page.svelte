<script lang="ts">
	export let data: any;

	let ourStory = data;
	$: (ourStory = data);
</script>

<svelte:head>
	<title>Our Story - A Lovely Flame</title>
</svelte:head>

<div class="card mt-12 self-center bg-primary text-base-100 sm:m-12 md:2/3 lg:w-fit lg:p-8">
	<div class="card-body self-center text-center">
		<h2 class="card-title place-self-center">{ourStory.title}</h2>
		<artical class="mt-4 prose lg:prose-xl text-neutral w-full">
			{ourStory.body}
		</artical>
	</div>
</div>
