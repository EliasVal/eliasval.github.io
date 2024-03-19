<script lang="ts">
  import { activeSection } from '$lib/tools';

  export let section: number;
  export let onClick: Function | null = null;

  const NavbarButon = (dest: number) => {
    if (dest != -1) {
      document
        .querySelectorAll('section')
        [dest].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
</script>

<div>
  <button
    class="navbar-button"
    class:active={$activeSection == section}
    on:click={() => (onClick == null ? NavbarButon(section) : onClick())}
  >
    <slot />
  </button>
</div>

<style lang="scss">
  div {
    margin: 0 0.5rem;
    display: inline-block;

    &:first-child .navbar-button::before {
      border-top-right-radius: 5px;
    }
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    background: none;
    position: relative;
  }

  .navbar-button {
    padding: 0.3em 0.5em;
    font-size: 1.45rem;

    &::before {
      position: absolute;
      content: '';
      inset: 0;

      background-image: linear-gradient(to bottom right, rgb(13, 192, 192), royalblue 95%);
      z-index: -1;
      border-radius: 15px;
      opacity: 0;

      transition: opacity 0.25s;
    }
  }

  button:global(.active)::before {
    opacity: 1;
  }

  @media screen and (max-width: 820px) {
    div {
      display: block;
      margin: 0;
      width: 100%;
    }

    .navbar-button {
      width: 100%;
      text-align: left;
      font-size: 1.25rem !important;
      &::before {
        border-radius: 0;
        width: 100%;
      }
    }
  }
</style>
