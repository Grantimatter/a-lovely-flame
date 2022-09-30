<script lang="ts">
	export let data: [];
</script>

<div class="flex w-full justify-center">
<div class="flex flex-col justify-center align-middle p-16 w-fit">
	{#each data as faq, i}
    <div>
		<div
			tabindex="0"
			class="collapse collapse-arrow border border-base-300 bg-neutral rounded-box"
		>
			<div class="collapse-title text-xl font-medium">{faq.attributes.Question}</div>
			<div class="collapse-content">
				<p>{faq.attributes.Answer}</p>
			</div>
		</div>
		{#if i < data.length - 1}
        	<div class="divider m-0"></div>
		{/if}
    </div>
	{/each}
</div>
</div>