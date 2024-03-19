<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import GradientText from '../GradientText.svelte';
  import { cubicOut } from 'svelte/easing';
</script>

<main id="header">
  <img
    in:fade={{ delay: 150, easing: cubicOut, duration: 1500 }}
    src="/svgs/logo-white.svg"
    alt=""
  />
  <div class="content">
    <h1 class="primary-title" in:fly={{ y: 100, delay: 1250, duration: 1000, easing: cubicOut }}>
      Hi, I'm
      <GradientText rgbValues={['#EA6302', '#EB7413', '#F09712']} direction={'to right'}>
        Elias Valknosky
      </GradientText>
    </h1>
    <h2 class="secondary-title" in:fly={{ y: 100, delay: 1400, duration: 1000, easing: cubicOut }}>
      Welcome to my
      <GradientText rgbValues={['#FFFF0F', '#FFFF42']} direction={'to right'}>
        Portfolio
      </GradientText>
    </h2>
  </div>
</main>

<style lang="scss">
  main {
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    padding: 1rem;
    box-sizing: border-box;
  }

  main img {
    position: absolute;
    width: 95%;
    max-width: 1024px;
    opacity: 0.1;
    top: 50%;
    transform: translateY(-85%);
    pointer-events: none;
  }

  .content {
    text-align: center;

    .primary-title {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .secondary-title {
      font-size: 1.75rem;
    }
  }

  @media screen and (max-width: 782px) {
    .content {
      .primary-title {
        font-size: 8vw;
      }

      .secondary-title {
        font-size: 3.5vw;
      }
    }
  }
</style>
