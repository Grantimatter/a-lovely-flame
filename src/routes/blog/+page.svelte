<script lang="ts">
	import BlogPreview from '$lib/components/blog/blogPreview.svelte';
	import { blogPostList } from '$lib/stores/blogStore';
</script>

<div class="flex flex-col gap-8 justify-center items-center w-fit m-16">
	{#each $blogPostList as blogPost}
		<BlogPreview {blogPost} />
	{/each}
</div>
