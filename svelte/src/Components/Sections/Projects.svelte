<script lang="ts">
  import Gallery from "../Projects/Gallery/Gallery.svelte";
  import Arrows from "../Projects/Gallery/Arrows.svelte";
  import ProjectBtn from "../Projects/Gallery/ProjectBtn.svelte";

  export let projects;

  const wrapProjectIndex = (idx) => {
    idx = idx < 0 ? projects.length - 1 : idx;

    idx = idx > projects.length - 1 ? 0 : idx;

    return idx;
  };
</script>

<div class="projects">
  <div class="project-container">
    <Gallery {projects} />
  </div>
  <div class="project-arrows">
    <Arrows {wrapProjectIndex}>
      {#each projects as project, i}
        <ProjectBtn title={project.title} constIndex={i} />
      {/each}
    </Arrows>
  </div>
</div>

<style lang="scss">
  @import "src/scss/_mixins.scss";

  .projects {
    @include flex-center;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;

    .project-container {
      min-height: 405px;
      position: relative;
      max-width: 960px;
      width: 100%;
      padding: 0 1rem;

      display: flex;
      align-items: center;
    }
  }
</style>
