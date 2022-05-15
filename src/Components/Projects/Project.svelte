<script lang="ts">
  import { ReturnSvg } from "../../svgImports";

  import Typist from "../Typist.svelte";

  // import * as svgs from "src/svgImports.ts"
  export let project: ProjectJson;
</script>

<div class="project-container">
  <div>
    <img
      src="https://www.dcode.fr/tools/image-randomness/images/random-dcode.png"
      alt=""
      class="project-img"
    />
  </div>
  <div>
    <p class="project-details">
      Title: {project.title}
      <br />
      Description: {project.title}
      <br />
      Made with:
      <span class="made-with">
        {#each project.madeWith as mw}
          {@html ReturnSvg(mw)}
        {/each}
      </span>
      {#if Object.entries(project.availableAt).length > 0}
        <br />
        Available At:
        {#each project.availableAt as availableLocation}
          <a href={availableLocation.url} target="_blank">
            {@html ReturnSvg(availableLocation.logo)}
          </a>
        {/each}
      {/if}
      <br />
      <br />
      Status: {project.status.title}
    </p>
  </div>
</div>

<style lang="scss">
  .project-container {
    display: flex;
    .made-with {
      :global(svg) {
        fill: white;
      }
    }
  }
</style>
