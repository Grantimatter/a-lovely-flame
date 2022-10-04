<script lang="ts">
  import { onMount } from "svelte";
    import {cartStore}from '$stores/cartStore';

    export let data: any;

    onMount(() => {
        cartStore.clear();
    });
</script>

<svelte:head>
    <title>Thanks for shopping! - A Lovely Flame</title>
</svelte:head>



{#if data}
<div class="text-3xl p-6 bg-neutral rounded-xl place-self-center">
    Thanks so much for shopping with us, {data.name}, Please come again soon!
</div>
{:else}
<div class="text-3xl p-6 bg-neutral rounded-xl place-self-center">
    Thanks so much for shopping with us, Please come again soon!
</div>
{/if}