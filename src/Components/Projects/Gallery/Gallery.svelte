<script lang="ts">
  import { ReturnSvg } from "../../../svgImports";

  import Project from "../Project.svelte";

  export let projects: ProjectJson[] = [];

  let projectIndex = 0;
  let dir = 0;

  const increaseIndex = () => {
    document.documentElement.style.setProperty("--destIn", "50%");
    document.documentElement.style.setProperty("--destOut", "-50%");

    dir = -1;

    projectIndex = wrapProjectIndex(projectIndex - 1);
  };

  const decreaseIndex = () => {
    document.documentElement.style.setProperty("--destIn", "-50%");
    document.documentElement.style.setProperty("--destOut", "50%");

    dir = 1;

    projectIndex = wrapProjectIndex(projectIndex + 1);
  };

  const wrapProjectIndex = (idx) => {
    idx = idx < 0 ? projects.length - 1 : idx;

    idx = idx > projects.length - 1 ? 0 : idx;

    return idx;
  };
</script>

<div class="projects">
  <button class="arr" on:click={decreaseIndex}
    >{@html ReturnSvg("arrLeft")}</button
  >
  <div class="project-container">
    {#each projects as project, i}
      <div
        class:hidden={i !== projectIndex &&
          (i !== wrapProjectIndex(projectIndex - (dir == 1 ? 1 : -1)) ||
            dir == 0)}
        class:animOut={i ===
          wrapProjectIndex(projectIndex - (dir == 1 ? 1 : -1)) && dir != 0}
        class:animIn={i === projectIndex && dir != 0}
      >
        <Project {project} tempVisible={i === projectIndex} />
      </div>
    {/each}
  </div>
  <button class="arr" on:click={increaseIndex}
    >{@html ReturnSvg("arrRight")}</button
  >
</div>

<style lang="scss">
  :root {
    --destIn: -50%;
    --destOut: 50%;
  }
  .projects {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 0 150px;
    flex-grow: 1;
    overflow-x: hidden;
    .project-container {
      position: relative;
      flex-grow: 2;
      max-width: 960px;
      width: 90%;
      max-height: 750px;
      height: 50vh;
      .hidden {
        display: none;
      }

      .animIn {
        animation: flyIn 0.5s ease forwards;
      }

      .animOut {
        animation: flyOut 0.5s ease forwards;
        pointer-events: none;
      }

      > div {
        display: flex;
        position: absolute;
        inset: 0;
      }
    }
    .arr {
      :global(svg) {
        aspect-ratio: 1 / 1;
      }

      aspect-ratio: 1 / 1;
      align-self: center;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      color: black;

      cursor: pointer;
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
