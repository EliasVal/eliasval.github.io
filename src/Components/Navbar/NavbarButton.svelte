<script lang="ts">
  import { LocationHash } from "../../tools";

  export let id = "";
  export let char = "";
  export let tooltip = "";

  let highlight = false;

  $: {
    // if ($LocationHash == id) {
    //   highlight = true;
    // }

    highlight = $LocationHash == id;
  }
</script>

<div class:highlight on:click={() => window.location.assign(`#${id}`)}>
  <h1>{char}</h1>
  <span>
    {tooltip}
  </span>
</div>

<style lang="scss">
  @import "src/scss/_mixins.scss";

  div {
    @include unselectable;
    @include flex-center;

    cursor: pointer;

    aspect-ratio: 1 / 1;
    width: 3rem;
    height: auto;
    border-radius: 50%;

    background-color: white;

    position: relative;

    &:hover span {
      left: 50%;
      opacity: 1;
      padding-left: 60%;
    }
    span {
      display: flex;
      align-items: center;

      background-color: black;
      color: white;
      font-size: 1.5rem;

      border-radius: 20px 15px 15px 20px;

      position: absolute;
      top: 0.3rem;
      bottom: 0.3rem;
      left: 0;

      opacity: 0;
      padding-right: 20%;
      padding-left: 0%;

      z-index: -1;

      transition: 0.3s ease-out;

      pointer-events: none;
    }
    h1 {
      color: black;

      line-height: 1;
      font-size: 1.6rem;
    }

    &.highlight {
      width: 4rem;
      background-color: hsl(246, 88%, 27%);
    }
  }
</style>
