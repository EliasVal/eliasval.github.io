<script lang="ts">
  import ProjectGalleryControls from './ProjectGalleryControls.svelte';
  import { currentProjectIndex, galleryTransitionEnded, galleryFlyDir } from '$lib/tools';
  import GradientText from '../GradientText.svelte';

  export let project: Project;

  export let projectIndex: number;

  export let projectsLength: number;
</script>

<div
  class="project-card"
  class:selected={projectIndex == $currentProjectIndex && $galleryTransitionEnded}
  class:flyRightAnim={!$galleryTransitionEnded && $galleryFlyDir == 1}
  class:flyLeftAnim={!$galleryTransitionEnded && $galleryFlyDir == -1}
  class:stopRightAnim={$galleryTransitionEnded && $galleryFlyDir == 1}
  class:stopLeftAnim={$galleryTransitionEnded && $galleryFlyDir == -1}
>
  <div class="project-image">
    <img src="/images/{project.img}.jpg" alt={project.title} />
  </div>
  <div class="project-details">
    <h1>
      <GradientText rgbValues={['#fff 25%', '#7f7f7f']} direction={'to bottom left'}>
        {project.title}
      </GradientText>
    </h1>
    <ul class="project-details-list">
      <li>
        <span class="project-details-header">Description</span>:
        {@html project.description}
      </li>
      <li class="project-status">
        <span class="project-details-header">Project Status</span>:
        <span style="font-weight: 550">
          <GradientText
            rgbValues={[project.status.color + ' 80%', '#FFF']}
            direction={'to top right'}
          >
            {project.status.title}
          </GradientText>
        </span>
      </li>
      <li class="made-with">
        <span class="project-details-header">Made with</span>:
        {#each project.madeWith as mw}
          <img src="/svgs/{mw.img}.svg" alt={mw.alt} title={mw.alt} />
        {/each}
      </li>
      <li class="card-footer">
        <ProjectGalleryControls {projectsLength}>
          {#if Object.entries(project.availableAt || {}).length > 0}
            <span>
              <span class="project-details-header">Available at</span>:
              {#each project.availableAt as location}
                <a title={location.alt} href={location.url} style="text-decoration: none;">
                  <img src="/svgs/{location.logo}.svg" alt={location.alt} />
                </a>
              {/each}
            </span>
          {/if}
        </ProjectGalleryControls>
      </li>
    </ul>
  </div>
</div>

<style lang="scss">
  .project-card {
    flex-shrink: 0;
    width: 75vw;
    background: linear-gradient(to bottom left, #555555, #3b3b3b);
    box-shadow: 0 0 0px 0px rgba(255, 255, 255, 0);

    border-radius: 5px;
    padding: 1rem;

    transition: scale 0.15s, box-shadow 0.25s;
    display: flex;
    flex-direction: row;
    gap: 1rem;

    &.selected {
      scale: 105%;
      // transition: scale 0.2s 0.25s ease-in;
      box-shadow: 0 0 10px 0px rgba(255, 255, 255, 0.15);
    }

    .project-image {
      img {
        border-radius: 5px;
      }
    }

    .project-details {
      background: linear-gradient(to bottom right, #131313, #000);
      border-radius: 5px;
      flex-grow: 1;
      padding: 1rem;

      display: flex;
      flex-direction: column;

      > h1 {
        text-decoration: underline;
        text-decoration-style: dashed;
      }

      &-list {
        > li,
        > li span {
          margin-top: 0.75rem;
          font-family: 'CascadiaCode';
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          margin-top: auto;
        }

        list-style: none;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
      }

      &-header {
        text-decoration: underline;
        text-decoration-style: dotted;
        font-weight: 450;
        color: rgb(102, 155, 199);
      }

      img {
        filter: invert(1);
        margin-right: 0.55rem;
        scale: 125%;
        transform: translateY(20%);
      }
    }
  }

  .flyRightAnim {
    animation: fly-right 0.5s ease-in-out forwards;
  }

  .flyLeftAnim {
    animation: fly-left 0.5s ease-in-out forwards;
  }

  .stopRightAnim {
    animation: stop-right 0.25s ease-in-out forwards;
  }

  .stopLeftAnim {
    animation: stop-left 0.25s ease-in-out forwards;
  }

  @keyframes fly-right {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(2deg);
    }
  }

  @keyframes fly-left {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(-2deg);
    }
  }

  @keyframes stop-right {
    from {
      transform: rotateZ(2deg);
    }
    50% {
      transform: rotateZ(-0.5deg);
    }
    to {
      transform: rotateZ(0);
    }
  }

  @keyframes stop-left {
    from {
      transform: rotateZ(-2deg);
    }
    50% {
      transform: rotateZ(0.5deg);
    }
    to {
      transform: rotateZ(0);
    }
  }

  @media screen and (max-width: 960px) {
    .project-card {
      flex-direction: column;
    }
  }
</style>
