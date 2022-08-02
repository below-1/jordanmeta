<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { fade, fly, scale } from 'svelte/transition'
  import { browser } from "$app/env";

  export let items: Array<string> = [];
  export let interval: number = 5000;

  let activeIndex = 0;

  let intervalId: any; 

  onMount(() => {
    if (!browser) {
      return;
    }
    intervalId = setInterval(() => {
      activeIndex = (activeIndex + 1) % items.length;
    }, interval);
  })

  onDestroy(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  })

</script>

<div class="h-full relative">
  {#each items as item, i}
    {#if activeIndex == i}
      <div 
        class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-gray-600 text-xl md:text-2xl font-bold text-center px-12 rounded shadow-lg bg-jocrem"
        in:scale={{ duration: 500 }}
        out:scale={{ duration: 500 }}
      >
        {item}
      </div>
    {/if}
  {/each}
</div>
