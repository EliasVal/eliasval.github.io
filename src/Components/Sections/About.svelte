<script lang="ts">
  import ContentBox from '../ContentBox.svelte';
  import GradientText from '../GradientText.svelte';

  const age: number =
    // @ts-ignore
    new Date(new Date() - new Date(2005, 11, 25)).getFullYear() - 1970;
</script>

<div id="about">
  <h1>
    <GradientText rgbValues={['#FFFF0F', '#FFFF42']} direction={'to right'}>About me</GradientText>
  </h1>
  <span class="aboutContainer">
    <ContentBox>
      <p>
        I'm Elias, a {age}-year-old developer. I've been programming as a hobbyist since 12, and
        professionally as a Fullstack Web-Developer since 17. I had started my journey with simple
        console-apps in C#, and then picked up web and game development. <br />
        I currently work as a Fullstack Web-Developer, working with Next.js, React and many other technologies.
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
</div>

<style lang="scss">
  #about {
    display: flex;
    flex-direction: column;

    > h1 {
      margin: 2rem;
      font-size: 4rem;
    }
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

    #about > h1 {
      font-size: 8vw;
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
