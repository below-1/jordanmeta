<script lang="ts">
  import type { Portfolio } from '$src/types';
  export let item: Portfolio;
</script>

<a
  href={`/portfolio/${item.id}`}
  class="flex items-center gap-x-4"
>
  <img
    src={item.avatar}
    class="w-10 h-10"
  />
  <div>
    <p class="text-2xl">{item.title}</p>
    <p class="text-sm">{item.description}</p>
  </div>
</a>
