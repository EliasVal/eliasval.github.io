<script lang="ts">
  import Project from "../Project.svelte";

  export let projects: ProjectJson[] = [];

  let projectIndex = 0;
  let dir = 0;

  const increaseIndex = () => {
    document.documentElement.style.setProperty("--destIn", "-50%");
    document.documentElement.style.setProperty("--destOut", "50%");

    dir = 1;

    projectIndex = wrapProjectIndex(projectIndex + 1);
  };

  const decreaseIndex = () => {
    document.documentElement.style.setProperty("--destIn", "50%");
    document.documentElement.style.setProperty("--destOut", "-50%");

    dir = -1;

    projectIndex = wrapProjectIndex(projectIndex - 1);
  };

  const wrapProjectIndex = (idx) => {
    idx = idx < 0 ? projects.length - 1 : idx;

    idx = idx > projects.length - 1 ? 0 : idx;

    return idx;
  };
</script>

<div class="projects-container">
  <button on:click={decreaseIndex}>&lt;</button>
  <div class="project">
    {#each projects as project, i}
      <div
        class:hidden={i !== projectIndex &&
          (i !== wrapProjectIndex(projectIndex - (dir == 1 ? 1 : -1)) ||
            dir == 0)}
        class:animOut={i ===
          wrapProjectIndex(projectIndex - (dir == 1 ? 1 : -1)) && dir != 0}
        class:animIn={i === projectIndex && dir != 0}
      >
        <Project {project} />
      </div>
    {/each}
  </div>
  <button on:click={increaseIndex}>&gt;</button>
</div>

<style lang="scss">
  :root {
    --destIn: -50%;
    --destOut: 50%;
  }
  .projects-container {
    display: flex;
    .project {
      position: relative;
      // aspect-ratio: 16 / 9;
      // max-width: 750px;
      // width: 30vw;
      // height: auto;

      .hidden {
        display: none;
      }

      .animIn {
        animation: flyIn 1s forwards;
      }

      .animOut {
        animation: flyOut 1s forwards;
        position: absolute;
        pointer-events: none;
      }
    }
    button {
      aspect-ratio: 1 / 1;
      align-self: center;
      width: 2rem;
      height: auto;
      border-radius: 50%;
      color: black;
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
        position: absolute;
      }
      to {
        opacity: 1;
        transform: translateX(0);
        position: relative;
      }
    }
  }
</style>
