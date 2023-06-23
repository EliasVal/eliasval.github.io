<script lang="ts">
  import { onMount } from 'svelte';
  export let steps = 100;
  export let threshold = 50;
  let element: HTMLElement;
  let percent: number;
  let observer: IntersectionObserver;
  let unobserve = () => {};
  let intersectionObserverSupport = true;
  let toggleOnce = false;

  function intersectPercent(entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      percent = Math.round(Math.ceil(entry.intersectionRatio * 100));
      if (percent >= threshold) {
        if (!toggleOnce) {
          toggleOnce = true;
          unobserve();
        }
      }
    });
  }

  function stepsToThreshold(steps: number) {
    return [...Array(steps).keys()].map((n) => n / steps);
  }

  onMount(() => {
    intersectionObserverSupport =
      'IntersectionObserver' in window &&
      'IntersectionObserverEntry' in window &&
      'intersectionRatio' in window.IntersectionObserverEntry.prototype;

    const options = {
      threshold: stepsToThreshold(steps)
    };

    if (intersectionObserverSupport) {
      observer = new IntersectionObserver(intersectPercent, options);
      observer.observe(element);
      unobserve = () => observer.unobserve(element);
    }
    return unobserve;
  });
</script>

<section bind:this={element}>
  <!-- Replacement of visibleOnce -->
  {#if toggleOnce || !intersectionObserverSupport}
    <slot />
  {/if}
</section>

<style lang="scss">
  section {
    min-height: 100vh;

    position: relative;
    z-index: 2;

    margin: 0 0 0.5rem 0;
  }
</style>
