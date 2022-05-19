<script lang="ts">
  import { GalleryDirection, ProjectIndex } from "../../../tools";

  import Project from "../Project.svelte";
  import Arrows from "./Arrows.svelte";
  import ProjectBtn from "./ProjectBtn.svelte";

  export let projects: ProjectJson[] = [];

  const wrapProjectIndex = (idx) => {
    idx = idx < 0 ? projects.length - 1 : idx;

    idx = idx > projects.length - 1 ? 0 : idx;

    return idx;
  };

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

<div class="projects">
  <div class="project-container">
    {#each projects as project, i}
      <div
        class:hidden={i !== previousIndex && i !== index}
        class:animOut={i === previousIndex}
        class:animIn={i === index && $GalleryDirection !== 0}
      >
        <Project {project} />
      </div>
    {/each}
  </div>
  <Arrows {wrapProjectIndex}>
    {#each projects as project, i}
      <ProjectBtn title={project.title} constIndex={i} />
    {/each}
  </Arrows>
</div>

<style lang="scss">
  @import "src/scss/_mixins.scss";

  :root {
    --destIn: -50%;
    --destOut: 50%;
  }
  .projects {
    @include flex-center;
    flex-direction: column;
    gap: 1rem;
    flex-grow: 1;
    overflow: hidden;
    .project-container {
      position: relative;
      max-width: 960px;
      width: 100%;
      .hidden {
        display: none;
      }

      .animIn {
        animation: flyIn 0.5s ease forwards;
      }

      .animOut {
        animation: flyOut 0.5s ease forwards;
        pointer-events: none;
        position: absolute;
        top: 0;
      }
    }

    @keyframes flyOut {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(var(--destOut));
      }
    }

    @keyframes flyIn {
      from {
        opacity: 0;
        transform: translateX(var(--destIn));
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
</style>
