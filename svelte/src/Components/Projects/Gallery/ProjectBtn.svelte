<script lang="ts">
  import { GalleryDirection, ProjectIndex } from "../../../tools";

  export let constIndex;
  export let title;

  const updateProjectIndex = () => {
    if (constIndex < $ProjectIndex) {
      document.documentElement.style.setProperty("--destIn", "-50%");
      document.documentElement.style.setProperty("--destOut", "50%");

      $GalleryDirection = 1;
    } else {
      document.documentElement.style.setProperty("--destIn", "50%");
      document.documentElement.style.setProperty("--destOut", "-50%");

      $GalleryDirection = -1;
    }
    $ProjectIndex = constIndex;
  };
</script>

<button
  class:active={$ProjectIndex === constIndex}
  on:click={updateProjectIndex}
  {title}
/>

<style lang="scss">
  button {
    margin: 0 0.3rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    opacity: 0.5;
    transition: 0.5s;
    &.active {
      opacity: 1;
      padding: 0.7rem 1rem;
    }
    &:hover {
      cursor: pointer;
    }
  }
</style>
