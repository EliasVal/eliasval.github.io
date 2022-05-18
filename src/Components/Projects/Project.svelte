<script lang="ts">
  import { fade } from "svelte/transition";

  import { ReturnSvg } from "../../svgImports";

  import Typist from "../Typist.svelte";

  // import * as svgs from "src/svgImports.ts"
  export let project: ProjectJson;
  export let tempVisible: boolean;

  let visible;

  let finishedName,
    finishedDesc,
    finishedMw,
    finishedAa = Object.entries(project.availableAt).length == 0;

  let interval = 35;

  $: if (tempVisible) visible = true;
</script>

<div class="project">
  <div>
    <img src="images/{project.img}.jpg" alt="" class="project-img" />
  </div>
  {#if visible}
    <div class="details">
      <div class="top-details">
        <span class="project-details">
          <Typist
            cursor={true}
            keepCursor={false}
            text={[
              { text: "Name: ", color: "#A5D6DA" },
              { text: project.title, color: "#C9D1D9" },
              { text: "\n", color: "" },
            ]}
            delay={500}
            {interval}
            styles={{ fontWeight: 300 }}
            on:finished={() => (finishedName = true)}
          />
          {#if finishedName}
            <Typist
              cursor={true}
              keepCursor={false}
              text={[
                { text: "Description: ", color: "#A5D6DA" },
                { text: project.description, color: "#C9D1D9" },
              ]}
              delay={100}
              {interval}
              styles={{ fontWeight: 300 }}
              on:finished={() => (finishedDesc = true)}
            />
          {/if}
        </span>
      </div>

      <div class="bottom-details">
        {#if finishedDesc}
          <Typist
            cursor={true}
            keepCursor={false}
            text={[{ text: "Made with: ", color: "#A5D6DA" }]}
            delay={100}
            {interval}
            styles={{ fontWeight: 300 }}
            let:finishedTyping
            on:finished={() => (finishedMw = true)}
          >
            {#if finishedTyping}
              <span class="made-with" in:fade={{ delay: 500, duration: 500 }}>
                {#each project.madeWith as mw}
                  {@html ReturnSvg(mw)}
                {/each}
              </span>
            {/if}
          </Typist>
        {/if}
        {#if Object.entries(project.availableAt).length > 0 && finishedMw}
          <Typist
            cursor={true}
            keepCursor={false}
            text={[
              { text: "\n", color: "" },
              { text: "Available At:", color: "#A5D6DA" },
            ]}
            delay={1000}
            {interval}
            styles={{ fontWeight: 300 }}
            let:finishedTyping
            on:finished={() => (finishedAa = true)}
          >
            {#if finishedTyping}
              <span
                class="available-at"
                in:fade={{ delay: 500, duration: 500 }}
              >
                {#each project.availableAt as availableLocation}
                  <a href={availableLocation.url} target="_blank">
                    {@html ReturnSvg(availableLocation.logo)}
                  </a>
                {/each}
              </span>
            {/if}
          </Typist>
        {/if}
        {#if finishedAa && finishedMw}
          <Typist
            cursor={true}
            keepCursor={false}
            text={[
              { text: "\n", color: "" },
              { text: "Status: ", color: "#A5D6DA" },
              { text: project.status.title, color: project.status.color },
            ]}
            delay={1000}
            {interval}
            styles={{ fontWeight: 300 }}
          />
        {/if}
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  .project {
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
      // border-radius: 15px 5px 5px 15px;
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
