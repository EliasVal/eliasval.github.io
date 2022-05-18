<script lang="ts">
  import { ReturnSvg } from "../../../svgImports";
  import { GalleryDirection, ProjectIndex } from "../../../tools";

  export let wrapProjectIndex: Function;

  const increaseIndex = () => {
    document.documentElement.style.setProperty("--destIn", "50%");
    document.documentElement.style.setProperty("--destOut", "-50%");

    $GalleryDirection = -1;

    $ProjectIndex = wrapProjectIndex($ProjectIndex + 1);
  };

  const decreaseIndex = () => {
    document.documentElement.style.setProperty("--destIn", "-50%");
    document.documentElement.style.setProperty("--destOut", "50%");

    $GalleryDirection = 1;

    $ProjectIndex = wrapProjectIndex($ProjectIndex - 1);
  };
</script>

<div>
  <button class="arr" on:click={decreaseIndex}>
    {@html ReturnSvg("arrLeft")}
  </button>
  <span>
    <slot />
  </span>
  <button class="arr" on:click={increaseIndex}>
    {@html ReturnSvg("arrRight")}
  </button>
</div>

<style lang="scss">
  div {
    display: inline-flex;
    align-items: center;
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
  }
</style>
