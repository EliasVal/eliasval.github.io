<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<div id="nextSect">
  <button on:click={() => dispatch("move")}>
    <div>&#9660;</div>
  </button>
</div>

<style lang="scss">
  @import "../scss/_mixins";
  #nextSect {
    position: fixed;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    @include unselectable;
    button {
      aspect-ratio: 1 / 1;
      width: 3rem;
      height: auto;

      border: none;
      border-radius: 50%;

      background-color: #fff;

      div {
        color: #000;
        font-size: 1.5rem;
        transition: transform 0.5s;
      }

      &:hover {
        cursor: pointer;
        div {
          transform: translateY(15%);
        }
      }

      &:active {
        background-color: #8b8b8b;
      }
    }
  }
</style>
