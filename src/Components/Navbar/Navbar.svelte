<script lang="ts">
  import NavbarButton from './NavbarButton.svelte';
  import { onMount } from 'svelte';
  import { cubicOut } from 'svelte/easing';
  import { slide } from 'svelte/transition';

  let navbar: HTMLElement;
  let screenWidth: number = 0;
  let isNavbarActive = false;

  const UpdateNavbar = () => {
    const scroll = Math.max(Math.min((window.scrollY / 150) * 2, 2), 1);

    screenWidth = window.innerWidth;
    const smallScreen = screenWidth <= 750;
    if (!smallScreen) isNavbarActive = true;

    navbar.style.padding = smallScreen ? '0' : `calc(2.5rem / ${scroll * 1.25})`;
  };

  onMount(() => {
    UpdateNavbar();

    screenWidth = window.innerWidth;
  });
</script>

<svelte:window on:scroll={UpdateNavbar} on:resize={UpdateNavbar} />
{#if screenWidth <= 750}
  <button
    class="navbar-toggle"
    class:active={isNavbarActive}
    on:click={() => {
      isNavbarActive = !isNavbarActive;
    }}
  >
    <img alt="" src="/svgs/hamburger.svg" />
  </button>
{/if}

<nav bind:this={navbar} class="navbar">
  {#if screenWidth > 750 || isNavbarActive}
    <span transition:slide={{ easing: cubicOut }}>
      <h1>Elias Valk</h1>
      <ul class="nav-buttons">
        <NavbarButton section={0}>About</NavbarButton>
        <NavbarButton section={1}>Work Values</NavbarButton>
        <NavbarButton section={2}>About</NavbarButton>
        <NavbarButton
          section={-1}
          onClick={() => window.open('mailto:eliasvalk.dev@gmail.com', '_blank')}
        >
          Contact <img class="external" alt="" src="/svgs/external.svg" />
        </NavbarButton>
      </ul>
    </span>
  {/if}
</nav>

<style lang="scss">
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;

    > span {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    background-color: #030303;
    transition: padding 0.25s;
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    background: none;
  }

  .navbar-toggle {
    z-index: 51;
    position: fixed;
    top: 1.25rem;
    left: 1.25rem;
    padding: 0.5em;

    border: #fff solid 2px;
    border-radius: 5px 5px 0 0;
    transition: border-radius 1.25s;
    box-sizing: content-box;

    img {
      width: 1.75em;
    }
  }

  img {
    filter: invert(1);

    &.external {
      width: 0.75em;
      margin-left: 0.25em;
    }
  }

  .nav-buttons {
    list-style: none;
  }

  @media screen and (max-width: 750px) {
    .navbar {
      top: 3.7rem;
      left: 1.2rem;
      right: unset;
      border-radius: 0 5px 5px 5px;

      > span {
        flex-direction: column;
        align-items: baseline;
      }
    }

    h1 {
      padding: 0.75rem 0 0.75rem 0.5rem;
      border-bottom: #fff solid 2px;
      width: 100%;
      box-sizing: border-box;
      font-size: 1rem;
    }
  }
</style>
