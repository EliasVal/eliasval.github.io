<script lang="ts">
  import { ProjectIndx } from "../../../tools";

  import Project from "../Project.svelte";

  export let projects = [];
</script>

{#each projects as project, i}
  {#if i == $ProjectIndx}
    <Project {project} />
  {/if}
{/each}
