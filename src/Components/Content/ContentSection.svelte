<script lang="ts">
  import Visibility from "../Visibility.svelte";

  export let id = "";
  export let checkVisibility = true;
</script>

<Visibility steps={100} threshold={50} on:visible let:visibleOnce>
  <section {id} style="max-width: 75vw; margin: 0 auto">
    {#if visibleOnce || !checkVisibility}
      <slot />
    {/if}
  </section>
</Visibility>
