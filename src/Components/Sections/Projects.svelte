<script lang="ts">
  import Gallery from "../Projects/Gallery/Gallery.svelte";

  export let projects;
</script>

<div>
  <Gallery {projects} />
</div>

<style lang="scss">
  @import "src/scss/_mixins.scss";

  div {
    // @include flex-center;
    flex-direction: column;
  }
</style>
