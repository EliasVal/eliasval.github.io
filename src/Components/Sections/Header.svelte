<script lang="ts">
  import { fly, fade } from "svelte/transition";
  import { quadOut } from "svelte/easing";
</script>

<span>
  <div>
    <h1 in:fly={{ y: -40, duration: 1500, easing: quadOut }}>
      Elias' Portfolio
    </h1>
    <h2 in:fly={{ y: -10, duration: 750, delay: 1550 }}>
      Welcome to my portfolio!
    </h2>
    <br /><br />
    <h3 in:fade={{ duration: 500, delay: 3500 }}>
      Tap on the arrow button to continue to the next section.
    </h3>
  </div>
</span>

<style lang="scss">
  @import "src/scss/_mixins.scss";
  span {
    @include flex-center;
    div {
      h1 {
        font-size: 4rem;
        font-weight: 300;
      }
      h2 {
        font-style: italic;
      }
      h3 {
        font-size: 1rem;
        font-style: italic;
      }
    }
  }
</style>
