<script lang="ts">
  import Project from "./Project.svelte";

  export let projects = [];
</script>

{#each projects as project}
  <Project {project} />
{/each}
