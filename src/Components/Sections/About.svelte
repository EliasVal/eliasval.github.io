<script lang="ts">
  import { fly, slide } from 'svelte/transition';
  import ContentBox from '../ContentBox.svelte';
  import SectionTitle from '../SectionTitle.svelte';
  import { cubicInOut, cubicOut } from 'svelte/easing';

  const age: number =
    // @ts-ignore
    new Date(new Date() - new Date(2005, 11, 25)).getFullYear() - 1970;
</script>

<div id="about">
  <span in:fly={{ x: -150, duration: 850, easing: cubicOut, delay: 100, opacity: 0.00001 }}>
    <SectionTitle rgbValues={['mediumpurple 45%', '#FFFFFF']} direction={'to top right'}
      >About me</SectionTitle
    >
  </span>

  <span class="aboutContainer" in:slide={{ duration: 750, delay: 250, easing: cubicInOut }}>
    <ContentBox>
      <p>
        I'm Elias, {age == 18 ? 'an' : 'a'}
        {age}-year-old developer. I've been programming as a hobbyist since I was 12, and
        professionally as a Fullstack Web Developer since 17. I started my journey with simple
        console apps in C# and then picked up web and game development.
        <br /><br />
        Now, I am working as a Fullstack web developer, working with Next.js, React, and many other technologies.
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
          <a href="https://nodejs.org/">Node.js</a>
          <a href="https://expressjs.com/">Express.js</a>
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
    </ContentBox>
  </span>
  <span aria-hidden="true" style="opacity: 0;">
    <SectionTitle rgbValues={['#FFFF0F', '#FFFF42']} direction={'to right'}>About me</SectionTitle>
  </span>
</div>

<style lang="scss">
  #about {
    display: grid;
    grid-template-rows: min-content auto min-content;
    min-height: calc(100vh - 2rem);
  }

  .aboutContainer {
    align-self: center;
    justify-self: center;
    max-width: 75%;
  }

  @media screen and (max-width: 687px) {
    .aboutContainer {
      font-size: 2.5vw;
    }
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
