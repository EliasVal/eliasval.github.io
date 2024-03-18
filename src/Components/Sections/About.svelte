<script lang="ts">
  import ContentBox from '../ContentBox.svelte';

  const age: number =
    // @ts-ignore
    new Date(new Date() - new Date(2005, 11, 25)).getFullYear() - 1970;
</script>

<div>
  <ContentBox containerStyle={{ width: '75%' }}>
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
</div>

<style lang="scss">
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
