<script lang="ts">
  import { LocationHash } from "../../tools";

  export let id = "";
  export let char = "";
  export let tooltip = "";

  let highlight = false;

  $: {
    highlight = $LocationHash == id;
  }
</script>

<div class:highlight on:click={() => window.location.assign(`#${id}`)}>
  <div>
    <h1>{char}</h1>
  </div>
  <span>
    {tooltip}
  </span>
</div>

<style lang="scss">
  @import "src/scss/_mixins.scss";

  div {
    position: relative;

    &:hover span {
      left: 50%;
      opacity: 1;
      padding-left: 60%;
    }

    &.highlight {
      span {
        left: 60%;
      }
      div {
        transform: scale(1.3);
        background-color: hsl(212, 80%, 48%);
      }
    }

    > div {
      @include unselectable;
      @include flex-center;

      cursor: pointer;

      aspect-ratio: 1 / 1;
      width: 3rem;
      height: auto;
      border-radius: 50%;

      background-color: white;

      transition: transform 0.25s;

      h1 {
        color: black;

        line-height: 1;
        font-size: 1.6rem;
      }
    }
  }

  span {
    display: flex;
    align-items: center;

    background-color: black;
    color: white;
    font-size: 1.5rem;

    border-radius: 0 5px 5px 0;

    position: absolute;
    top: 0.3rem;
    bottom: 0.3rem;
    left: 0;

    opacity: 0;
    padding-right: 15%;
    padding-left: 0%;

    z-index: -1;

    transition: 0.3s ease-out;

    pointer-events: none;
  }
</style>
