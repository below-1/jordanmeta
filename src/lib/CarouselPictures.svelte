<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { fade, fly } from 'svelte/transition'
  import { browser } from "$app/env";

  export let pictures: Array<string> = [];
  export let interval: number = 5000;

  let activeIndex = 0;

  let intervalId: any; 

  onMount(() => {
    if (!browser) {
      return;
    }
    intervalId = setInterval(() => {
      activeIndex = (activeIndex + 1) % pictures.length;
    }, interval);
  })

  onDestroy(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  })

</script>

<div class="h-full w-full relative">
  {#each pictures as picture, i}
    {#if activeIndex == i}
      <div 
        class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center rounded shadow-lg"
        in:fly={{ duration: 400, x: 200, y: 0 }}
        out:fade={{ duration: 500 }}
        style={`background: url(${picture}); background-position: center; background-size: cover; background-repeat: no-repeat;`}
      >
      </div>
    {/if}
  {/each}
</div>
