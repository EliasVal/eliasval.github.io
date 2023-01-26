<script lang="ts">
  import { GalleryDirection, ProjectIndex } from "../../../tools";

  import Project from "../Project.svelte";

  export let projects: ProjectJson[] = [];

  let previousIndex = -1;
  let tempPreviousIndex = 0;
  let index = 0;

  ProjectIndex.subscribe((e) => {
    if (e !== tempPreviousIndex) {
      previousIndex = tempPreviousIndex;
      tempPreviousIndex = e;

      index = e;
    }
  });
</script>

{#each projects as project, i}
  <div
    class:hidden={i !== previousIndex && i !== index}
    class:animOut={i === previousIndex}
    class:animIn={i === index && $GalleryDirection !== 0}
    style="flex-grow: 1;"
  >
    <Project {project} />
  </div>
{/each}

<style lang="scss">
  :root {
    --destIn: -50%;
    --destOut: 50%;
  }

  $multiplier: 2;
  $duration: 0.5s;

  .hidden {
    display: none;
  }

  .animIn {
    animation: flyIn $duration 0.25s ease forwards;
    opacity: 0;
  }

  .animOut {
    animation: flyOut $duration ease forwards;
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
  }

  @keyframes flyOut {
    from {
      opacity: 1;
      transform: translate(0, -50%);
    }
    to {
      opacity: 0;
      transform: translate(calc(var(--destOut) * $multiplier), -50%);
    }
  }

  @keyframes flyIn {
    from {
      transform: translateX(calc(var(--destIn) * $multiplier));
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
