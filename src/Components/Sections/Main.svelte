<script lang="ts">
  import ContentBox from './../ContentBox.svelte';
  import { fade } from 'svelte/transition';
  import GradientText from '../GradientText.svelte';
  import { cubicOut } from 'svelte/easing';

  const age: number =
    // @ts-ignore
    new Date(new Date() - new Date(2005, 11, 25)).getFullYear() - 1970;
</script>

<main id="header">
  <div class="header" in:fade={{ duration: 750, easing: cubicOut, delay: 250 }}>
    <h2 class="outlined secondary-title">Hello, I'm</h2>
    <h1 class="main-title">
      <GradientText rgbValues={['#FFFF0F', '#FFFF42']} direction={'to bottom right'}>
        Elias Valkonsky
      </GradientText>
    </h1>
    <h2 class="outlined secondary-title">Web developer</h2>
    <!-- <h2 class="secondary-title" in:fade={{ duration: 750, easing: cubicOut, delay: 450 }}>
        Welcome to my
        <GradientText rgbValues={['#EA6302', '#EB7413', '#F09712']} direction={'to right'}>
          Portfolio
        </GradientText>
      </h2> -->
  </div>
  <!-- <ContentBox containerStyle={{ width: '75%' }}>
    <p>
      I'm Elias, a {age}-year-old developer. I can make anything from Discord bots, to websites,
      games and pretty much anything in-between. I had begun programming when I was 12, and my first
      language was C#, my favourite language to date. Not too long after, I picked up
      web-development, with plain HTML, CSS and JS and later on learned a few frameworks :D
      <br /><br />
      My skill-set:
    </p>

    <ul class="skillset">
      <li class="langs">
        <a href="https://www.w3schools.com/cs/">C# (C Sharp)</a>
        <a href="https://www.w3schools.com/js/">JavaScript</a>
        <a href="https://www.w3schools.com/typescript/">TypeScript</a>
        <a href="https://www.w3schools.com/html/">HTML5</a>
        <a href="https://sass-lang.com/">SCSS</a>
      </li>
      <li class="frameworks">
        <a href="https://react.dev/">React</a>
        <a href="https://nextjs.org/">Next.js</a>
        <a href="https://svelte.dev/">Svelte</a>
        <a href="https://unity.com/">Unity Engine</a>
        <a href="https://nodejs.org/">NodeJS</a>
        <a href="https://expressjs.com/">ExpressJS</a>
        <a href="https://dotnet.microsoft.com/">.NET Framework & Core</a>
      </li>
      <li class="tools">
        <a href="https://firebase.google.com">Firebase</a>
        <a href="https://code.visualstudio.com/">Visual Studio Code</a>
        <a href="https://visualstudio.microsoft.com/">Visual Studio</a>
        <a href="https://git-scm.com">Git</a>
        <a href="https://github.com">Github</a>
        <a href="https://cloud.google.com">Google Cloud</a>
        <a href="https://linux.org">Linux</a>
        <a href="https://docker.com/">Docker</a>
        <a href="https://learn.microsoft.com/en-us/windows/wsl/install">WSL</a>
        <a href="https://azure.microsoft.com/en-us/products/devops">Azure Dev-Ops</a>
        <a href="https://playwright.dev/">Playwright</a>
      </li>
    </ul>
  </ContentBox> -->
</main>

<style lang="scss">
  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    justify-content: center;
    // align-items: center;

    padding: 5rem;
    box-sizing: border-box;
  }

  main .header {
    text-align: left;
    letter-spacing: 0.2ch;

    .main-title {
      font-size: 2.5rem;
      letter-spacing: 0.3ch;
    }

    .secondary-title {
      // font-style: italic;
      font-size: 2rem;
    }

    .outlined {
      -webkit-text-stroke-width: 0.5px;
      -webkit-text-stroke-color: white;
      color: transparent;
    }

    // border-bottom: #fff dashed 2px;
    // padding: 0 2rem 1.5rem 2rem;

    margin-bottom: 2.5rem;
  }

  .skillset {
    > li {
      margin-top: 0.5rem;
      margin-left: 20px;

      &.langs a {
        background-color: #a2102e;
      }

      &.frameworks a {
        background-color: blueviolet;
      }

      &.tools a {
        background-color: #8b4513;
      }

      a {
        padding: 4px 5px;
        border-radius: 3px;
        line-height: 2;
        white-space: nowrap;
      }
    }
  }
</style>
