<script lang="ts">
  import { fly } from "svelte/transition";
  import { quadOut } from "svelte/easing";
  import Typist from "../Typist.svelte";
</script>

<div>
  <h1 in:fly={{ y: -40, duration: 1500, easing: quadOut }}>Elias' Portfolio</h1>
  <h2 in:fly={{ y: -10, duration: 750, delay: 1550 }}>
    Welcome to my portfolio!
  </h2>
  <br /><br />
  <Typist
    interval={30}
    delay={2000}
    cursor={true}
    keepCursor={true}
    styles={{ fontSize: "1rem", fontStyle: "italic" }}
    text={[
      {
        text: "Use the siderbar on the left to navigate between sections",
        color: "white",
      },
    ]}
  />
</div>

<style lang="scss">
  @import "src/scss/_mixins.scss";
  div {
    @include flex-center;
    flex-direction: column;
    h1 {
      font-size: 4rem;
      font-weight: 300;
    }
    h2 {
      font-style: italic;
      font-weight: 100;
    }
  }
</style>
