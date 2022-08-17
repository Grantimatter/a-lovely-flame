<script lang="ts">
	import { dummyQuestions, questionList } from "$lib/stores/questionStore";
</script>

<div class="flex w-full justify-center">
<div class="flex flex-col justify-center align-middle p-16 w-fit">
	{#each dummyQuestions as question}
    <div>
		<div
			tabindex="0"
			class="collapse collapse-arrow border border-base-300 bg-neutral rounded-box"
		>
			<div class="collapse-title text-xl font-medium">{question.question}</div>
			<div class="collapse-content">
				<p>{question.answer}</p>
			</div>
		</div>
        <div class="divider m-0"></div>
    </div>
	{/each}
</div>
</div>