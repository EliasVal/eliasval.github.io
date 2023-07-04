<script lang="ts">
  import { onMount } from 'svelte';
  import {
    currentProjectIndex,
    galleryFlyDir,
    galleryIsFocused,
    galleryTransitionEnded
  } from '$lib/tools';
  import ProjectCard from './ProjectCard.svelte';
  import { fly } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';

  export let projects: Project[];

  let cardWidth: number, cardHeight: number;
  let gallery: HTMLElement, galleryContainer: HTMLElement;

  onMount(() => {
    getCardSize();
    $currentProjectIndex = 0;
    $galleryFlyDir = 0;
  });

  let t: NodeJS.Timeout;
  $: {
    // Set left property of gallery element to show current project
    // (document.body.clientWidth - cardWidth) / 2 - To center one card
    // rest offsets that by current card index (with addition of 4.5rem gap)
    if (gallery != null)
      gallery.style.transform = `translateX(calc(${
        (document.body.clientWidth - cardWidth) / 2
      }px - (${cardWidth}px + 4.5rem) * ${$currentProjectIndex}))`;

    // Set gallery container minimum height so project cards will not be cut off
    if (galleryContainer != null) {
      galleryContainer.style.minHeight = `calc(${cardHeight}px + 1rem)`;
    }

    // Delete any running timeouts so all transitions play smoothly
    clearTimeout(t);
    t = setTimeout(() => {
      $galleryTransitionEnded = true;
    }, 725);
  }

  const getCardSize = () => {
    // Grab a non-scaled-up project card
    let goodCard = $currentProjectIndex + 1 >= projects.length ? 0 : $currentProjectIndex + 1;

    // Get its bounding rect (dimensions)
    let rect = document.querySelectorAll('.project-card')[goodCard]?.getBoundingClientRect();
    cardWidth = rect?.width || 0;
    cardHeight = rect?.height || 0;
  };
</script>

<svelte:window on:resize={getCardSize} />

<div
  class="gallery-container"
  in:fly={{ x: -2050, duration: 2050, easing: cubicOut, delay: 550, opacity: 0.00001 }}
  bind:this={galleryContainer}
>
  <div class="gallery" bind:this={gallery}>
    {#each projects as project, i}
      <ProjectCard {project} projectIndex={i} projectsLength={projects.length} />
    {/each}
  </div>
</div>

<style lang="scss">
  .gallery-container {
    position: relative;
    flex-grow: 1;

    .gallery {
      position: absolute;
      width: 100%;
      min-height: 90%;

      display: flex;
      gap: 4.5rem;

      transition: transform 0.75s cubic-bezier(0.6, 1, 0.6, 1);
    }
  }
</style>
