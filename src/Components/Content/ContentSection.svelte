<script lang="ts">
  import Visibility from "../Visibility.svelte";

  export let id = "";
</script>

<Visibility steps={100} threshold={50} on:visible let:visibleOnce>
  <section {id}>
    {#if visibleOnce}
      <slot />
    {/if}
  </section>
</Visibility>
