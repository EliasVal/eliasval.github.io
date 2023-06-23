<script lang="ts">
  import GradientText from '../GradientText.svelte';
  import { fly } from 'svelte/transition';

  import { backOut, cubicOut } from 'svelte/easing';

  const age: number =
    // @ts-ignore
    new Date(new Date() - new Date(2005, 11, 25)).getFullYear() - 1970;
</script>

<div id="about">
  <div class="header">
    <div class="title">
      <div in:fly={{ x: -150, duration: 550, delay: 200, easing: cubicOut, opacity: 0.00001 }}>
        A little bit
      </div>
      <div
        in:fly={{ x: -150, duration: 500, delay: 150, easing: cubicOut, opacity: 0.00001 }}
        class="subtitle"
      >
        <GradientText rgbValues={['#0FF0FF', '#0FFFFF', '#FFFFFF']} direction={'to top right'}>
          About Me
        </GradientText>
      </div>
    </div>
  </div>
  <div class="content">
    <p in:fly={{ x: -1250, delay: 650, easing: backOut, duration: 1050, opacity: 0.00001 }}>
      Hello! I'm Elias, a {age}-year-old developer. I can make anything from Discord bots, to
      websites, games and pretty much anything in between. I picked up my first programming language
      at 12 years old and from there it's history :)<br />
      My current skill set includes:
      <span class="skillset">
        <GradientText rgbValues={['#61DBFB', '#FFFFFF']} direction="to top right">
          React
        </GradientText>,
        <GradientText rgbValues={['#FF3E00 30%', '#FA8761']} direction="to top right">
          Svelte & SvelteKit
        </GradientText>,
        <GradientText rgbValues={['#FFC928 60%', '#FFFFFF']} direction="to top right">
          JavaScript
        </GradientText>,
        <GradientText rgbValues={['#3178C6', '#FFFFFF']} direction="to top right">
          TypeScript
        </GradientText>,
        <GradientText rgbValues={['#F58410', '#FFA713', '#FFCB2D']} direction="to top right">
          Firebase
        </GradientText>
        <span style="font-weight: normal">and</span>
        <GradientText rgbValues={['#68217A', '#822C98', '#953DAC']} direction="to top right">
          C# (C Sharp)
        </GradientText>.
      </span>
    </p>
  </div>
  <span />
</div>

<style lang="scss">
  #about {
    min-height: 100vh;
    position: relative;

    display: flex;
    // flex-direction: column;
    align-items: center;

    .header {
      top: 0;
      position: absolute;
      margin: 2em 0 0 3em;
      background-color: transparent;
      .title {
        font-size: 3rem;
        font-weight: bold;

        .subtitle {
          font-size: 1.75em;
          margin-left: 0.75rem;
        }
      }
      // display: inline-block;
    }

    .content {
      // position: absolute;
      // inset: 0;
      // left: 50%;
      // top: 50%;
      // transform: translateX(-50%) translateY(-20%);
      width: 75%;
      max-width: 60ch;
      margin: 0 auto;
      > p {
        font-size: 1.3em;
        text-align: justify;
        .skillset {
          font-weight: bold;
        }
      }
    }
  }

  @media screen and (max-width: 780px) {
    #about .header {
      margin: 2rem 0 2em 2em;
      .title {
        font-size: 2rem;
      }
    }
  }

  @media screen and (max-height: 660px) {
    #about {
      flex-direction: column;
      justify-content: space-between;
      align-items: baseline;
      .header {
        position: relative;
      }
    }
  }
</style>
