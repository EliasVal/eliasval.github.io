<script lang="ts">
  import Gallery from "../Projects/Gallery.svelte";

  export let projects;
</script>

<span>
  <div>
    <Gallery {projects} />
  </div>
</span>
