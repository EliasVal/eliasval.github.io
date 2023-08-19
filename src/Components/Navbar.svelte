<script lang="ts">
  import { activeSection } from '$lib/tools';
  import { onMount } from 'svelte';

  let navbar: HTMLElement;
  const UpdateNavbar = () => {
    const scroll = Math.max(Math.min((window.scrollY / 150) * 2, 2), 1);

    const smallScreen = window.innerWidth < 750;

    navbar.style.padding = `calc(2.5rem / ${smallScreen ? 2 : scroll * 1.25})`;
  };

  const NavbarButon = (elm: HTMLElement, dest: number) => {
    const elms = document.getElementsByClassName('active') as HTMLCollectionOf<HTMLElement>;

    if (dest == -1) {
      for (let i = 0; i < elms.length; i++) {
        elms[i].classList.remove('active');
      }

      elm.classList.add('active');
    }

    if (dest != -1) {
      document
        .querySelectorAll('section')
        [dest].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  onMount(() => {
    UpdateNavbar();

    activeSection.subscribe((section) => {
      const elms = document.getElementsByClassName('nav-button') as HTMLCollectionOf<HTMLElement>;

      NavbarButon(elms[section], -1);
    });
  });
</script>

<svelte:window on:scroll={UpdateNavbar} on:resize={UpdateNavbar} />
<nav bind:this={navbar} class="navbar">
  <h1>Elias Valk</h1>
  <div class="nav-buttons">
    <ul>
      <li>
        <button class="nav-button" on:click={(e) => NavbarButon(e.currentTarget, 0)}>About</button>
      </li>
      <li>
        <button class="nav-button" on:click={(e) => NavbarButon(e.currentTarget, 1)}>
          Work Values
        </button>
      </li>
      <li>
        <button class="nav-button" on:click={(e) => NavbarButon(e.currentTarget, 2)}>
          Projects
        </button>
      </li>
      <li>
        <button
          class="nav-button"
          on:click={() => window.open('mailto:eliasvalk.dev@gmail.com', '_blank')}>Contact</button
        >
      </li>
    </ul>
  </div>
</nav>

<style lang="scss">
  .navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999999;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #030303;
    transition: padding 0.25s;
    padding: calc(2.5rem / 1.25);
  }

  button {
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0.3em 0.5em;
    background: none;
    position: relative;

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

  ul {
    list-style: none;

    li {
      display: inline-block;
    }
  }

  .nav-buttons {
    li {
      margin: 0 0.5rem;

      .nav-button {
        font-size: 1.45rem;
      }
    }
  }

  @media screen and (max-width: 750px) {
    .nav-buttons li .nav-button {
      font-size: 1.25rem !important;
    }
  }

  @media screen and (max-width: 650px) {
    .navbar {
      justify-content: center;
      h1 {
        display: none;
      }

      .nav-buttons li {
        margin: 0 0.2rem;
      }
    }
  }
</style>
