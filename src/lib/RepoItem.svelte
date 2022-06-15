<script lang="ts">
  interface Repo {
    name: string;
    html_url: string;
    language: string;
    description: string;
    size: number;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    topics: string[];
  }

  export let repo: Repo;
</script>

<a
  href={repo.html_url}
  target="_blank"
  class="px-4 py-3 rounded border flex items-center"
>
  <div>
    <div class="text-2xl font-bold">{repo.name}</div>
    <div class="whitespace-wrap">{repo.description}</div>
    <div class="flex items-center flex-wrap gap-x-2 gap-y-1">
      {#if repo.topics}
        {#each repo.topics as topic}
          <span class="bg-blue-100 px-2 py-0.5 rounded text-sm">{topic}</span>
        {/each}
      {/if}
    </div>
  </div>

</a>
