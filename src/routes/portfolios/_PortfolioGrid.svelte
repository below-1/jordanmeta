<script lang="ts">
  import type { Portfolio } from '$src/types';
  export let items: Portfolio[];
</script>

<div class="PortfolioGrid flex flex-col md:flex-row items-center md:items-start justify-center gap-y-6">
  {#each items as portfolio}
    <div class="w-48 flex flex-col items-center md:justify-start flex-grow-1">
      <div 
        class="h-32 w-32 rounded-full flex justify-center items-center hover:shadow-xl text-white"
        style={`background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${portfolio.avatar});`}
      >
      </div>
      <div class="text-center whitespace-wrap">{portfolio.title}</div>
    </div>
  {/each}
</div>
<button 
  class="bg-yellow-400 rounded shadow shadow-yellow-300 font-bold text-2xl text-black my-6 px-6 py-2" 
  style="align-self: center;">
  show me more!
</button>