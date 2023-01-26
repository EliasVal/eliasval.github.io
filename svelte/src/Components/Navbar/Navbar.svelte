<script lang="ts">
  import NavbarButton from "./NavbarButton.svelte";
</script>

<navbar>
  <NavbarButton id="header" tooltip="Welcome!" emoji="waving" />
  <NavbarButton id="about" tooltip="About Me" emoji="technologist" />
  <NavbarButton id="projects" tooltip="Projects" emoji="folder" />

  <!-- Horizontal Line -->
  <span />
</navbar>

<style lang="scss">
  navbar {
    position: fixed;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;

    flex-direction: column;
    gap: 1rem;

    /* Horizontal Line */
    span {
      width: 1px;
      background-color: white;
      position: absolute;
      top: 0;
      bottom: 0;

      left: 50%;
      transform: rotateX(-50%);

      z-index: -1;
    }
  }
</style>
