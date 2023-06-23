<script lang="ts">
  import GradientText from '../GradientText.svelte';
  import { fly, fade } from 'svelte/transition';

  import { cubicOut } from 'svelte/easing';
</script>

<main id="header">
  <div id="main-content">
    <div in:fade={{ duration: 750, easing: cubicOut, delay: 250 }}>
      <h1 class="title">- Welcome -</h1>
    </div>
    <h2 in:fly={{ y: 50, duration: 550, delay: 1000, easing: cubicOut, opacity: 0.00001 }}>
      To my <GradientText rgbValues={['#EA6302', '#EB7413', '#F09712']} direction={'to right'}>
        Portfolio
      </GradientText>.
    </h2>
  </div>
  <!-- </div> -->
</main>

<style lang="scss">
  main {
    min-height: 100vh;
    width: 100%;

    display: flex;

    align-items: center;
    justify-content: center;

    #main-content {
      width: 70%;
      margin: 0 auto;
      text-align: center;

      .title {
        font-size: 5.5rem;
        font-weight: bold;
      }
    }
  }

  @media screen and (max-width: 750px) {
    main #main-content .title {
      font-size: 3.6em;
    }
  }
</style>
