<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import GradientText from '../GradientText.svelte';
  import { cubicOut } from 'svelte/easing';

  const age: number =
    // @ts-ignore
    new Date(new Date() - new Date(2005, 11, 25)).getFullYear() - 1970;
</script>

<main id="header">
  <div class="titles" in:fade={{ duration: 750, easing: cubicOut, delay: 250 }}>
    <div>
      <h1 class="main-title">Welcome</h1>
    </div>
    <h2 class="secondary-title" in:fade={{ duration: 750, easing: cubicOut, delay: 450 }}>
      to my
      <GradientText rgbValues={['#EA6302', '#EB7413', '#F09712']} direction={'to right'}>
        Portfolio
      </GradientText>
    </h2>
  </div>
  <div class="about" in:fly={{ duration: 750, easing: cubicOut, delay: 750, x: 50 }}>
    <p>
      I'm Elias, a {age}-year-old developer. I can make anything from Discord bots, to websites,
      games and pretty much anything in-between. I had begun programming when I was 12, and my first
      language was C#, my favourite language to date. Not too long after, I picked up
      web-development, with plain HTML, CSS and JS and later on learned a few frameworks :D<br /><br
      />
      My current skill-set includes:
      <span class="skillset">
        <GradientText rgbValues={['#61DBFB', '#FFFFFF']} direction="to top right">
          React
        </GradientText>,
        <GradientText rgbValues={['#FF3E00 30%', '#FA8761']} direction="to top right">
          Svelte
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
  <!-- </div> -->
</main>

<style lang="scss">
  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }

  main .titles {
    text-align: center;

    .main-title {
      font-size: 3.5rem;
      font-weight: bold;
    }

    .secondary-title {
      font-style: italic;
    }

    border-bottom: #fff dashed 2px;
    padding: 0 2rem 1.5rem 2rem;
  }

  main .about {
    width: 75%;
    max-width: 60ch;
    padding: 1rem;
    background: linear-gradient(to bottom right, #474747, #616161);
    border-radius: 5px;
    box-shadow: 0 0 10px 0px rgba(255, 255, 255, 0.13);
    margin-top: 2.5rem;

    > p {
      background-color: #010101;
      padding: 1rem;
      border-radius: 5px;
      font-size: 1.15em;
      .skillset {
        font-weight: bold;
      }
    }
  }
</style>
