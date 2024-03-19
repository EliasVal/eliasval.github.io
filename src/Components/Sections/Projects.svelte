<script lang="ts">
  import ProjectGallery from '../Projects/ProjectGallery.svelte';

  import { projects as _projects } from '$lib/data.json';
  import { galleryIsFocused } from '$lib/tools';

  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import SectionTitle from '../SectionTitle.svelte';

  // @ts-ignore
  let projects: Project[] = _projects;

  onMount(() => ($galleryIsFocused = true));
</script>

<div id="projects">
  <span in:fly={{ x: -150, duration: 850, easing: cubicOut, delay: 100, opacity: 0.00001 }}>
    <SectionTitle
      rgbValues={['#0FF0FF', '#0FFFFF', '#FFFFFF']}
      direction={'to top right'}
      stickLeft
    >
      My Projects
    </SectionTitle>
  </span>
  <ProjectGallery {projects} />
</div>

<style lang="scss">
  #projects {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
