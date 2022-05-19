<script lang="ts">
  import { ReturnSvg } from "../../svgImports";
  export let project: ProjectJson;
</script>

<div class="project">
  <div>
    <img src="/images/{project.img}.jpg" alt="" class="project-img" />
  </div>
  <div class="details">
    <div class="top-details">
      <span class="project-details">
        <p>
          <span class="field-title">Name:</span>
          <span class="field-content">{project.title}</span>
        </p>

        <p>
          <span class="field-title">Description:</span>
          <span class="field-content">{@html project.description}</span>
        </p>
      </span>
    </div>

    <div class="bottom-details">
      <p>
        <span class="field-title">Made with:</span>
        <span class="made-with">
          {#each project.madeWith as mw}
            {@html ReturnSvg(mw)}
          {/each}
        </span>
      </p>
      {#if Object.entries(project.availableAt).length > 0}
        <p>
          <span class="field-title">Available at:</span>
          <span class="available-at">
            {#each project.availableAt as availableLocation}
              <a href={availableLocation.url} target="_blank">
                {@html ReturnSvg(availableLocation.logo)}
              </a>
            {/each}
          </span>
        </p>
      {/if}
      <p>
        <span class="field-title">Name:</span>
        <span style="color: {project.status.color}">
          {project.status.title}
        </span>
      </p>
    </div>
  </div>
</div>

<style lang="scss">
  .project {
    .field-title {
      color: #a5d6da;
    }
    .field-content {
      color: #c9d1d9;
    }

    * {
      font-family: "Cascadia Code", sans-serif;
    }
    display: flex;
    background: linear-gradient(to bottom left, #555555, #3b3b3b);
    box-shadow: 0 0 15px 0px #000;
    padding: 0.5rem;
    border-radius: 5px;

    margin: auto 0;
    width: 100%;
    gap: 1rem;
    line-height: 1.3;
    text-align: left;
    .details {
      background: linear-gradient(to bottom right, #131313, #000);
      padding: 0.5rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1rem;
      border-radius: 5px;

      box-sizing: padding-box;

      * {
        font-weight: 300 !important;
      }
    }
    img {
      border-radius: 5px;
      width: 64px;
    }
    .made-with,
    .available-at {
      display: inline-flex;
      gap: 0.5ch;
      :global(svg) {
        fill: white;
      }
    }
  }
</style>
