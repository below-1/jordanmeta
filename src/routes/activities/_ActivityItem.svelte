<script lang="ts">
  import type { Activity } from '$src/types';
  import Icon from '@iconify/svelte';
  import { format } from '$src/services/date';
  import commitDisplayURL from '$lib/format/activity/commitDisplayURL';

  export let activity: Activity;
</script>

{#if activity.type == "PushEvent"}
<div
  class="flex flex-col px-4 py-4"
>
  <div>
    <div class="flex items-center gap-x-4 text-base">
      <a 
        href={'https://github.com/' + activity.repo.name}
        class="underline font-bold"
      >
        {activity.repo.name}
      </a>
      <div class="py-0.5 px-1 rounded text-sm bg-joyellow">
        push event
      </div>
    </div>
    <div class="text-xs text-gray-500 italic">
      {format(activity.created_at)}
    </div>
    <div class="ml-4 flex flex-col">
      {#each activity.payload.commits as commit}
        <a 
          href={commitDisplayURL(commit.url)}
          target="_blank"
          class="flex items-center font-bold py-2 border-b text-joblack"
        >
          <Icon icon="carbon:commit" class="h-4 w-4 mr-2 text-black" />
          <div class="text-joblack text-sm">
            {commit.message}
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>
{:else if activity.type == "CreateEvent" && activity.payload.ref_type == "branch"}
<div
  class="flex flex-col px-4 py-4"
>
  <div>
    <div class="flex items-center gap-x-4 text-base">
      <a 
        href={'https://github.com/' + activity.repo.name}
        class="underline font-bold"
      >
        {activity.repo.name}#{activity.payload.ref}
      </a>
      <div class="py-0.5 px-1 rounded text-sm bg-joyellow">
        create branch
      </div>
    </div>
    <div class="text-xs text-gray-500 italic">
      {format(activity.created_at)}
    </div>
  </div>
</div>
{:else if activity.type == "CreateEvent" && activity.payload.ref_type == "repository"}
<div
  class="flex flex-col px-4 py-4"
>
  <div>
    <div class="flex items-center gap-x-4 text-base">
      <a 
        href={'https://github.com/' + activity.repo.name}
        class="underline font-bold"
      >
        {activity.repo.name}
      </a>
      <div class="py-0.5 px-1 rounded text-sm bg-joyellow">
        create repo
      </div>
    </div>
    <div class="text-xs text-gray-500 italic">
      {format(activity.created_at)}
    </div>
  </div>
</div>
{/if}
