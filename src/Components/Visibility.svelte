<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";

  export let top = 0;
  export let bottom = 0;
  export let left = 0;
  export let right = 0;

  export let steps = 100;
  export let threshold = 0;

  let element;
  let percent;
  let observer;
  let unobserve = () => {};
  let intersectionObserverSupport = false;

  let toggle = false;

  const dispatch = createEventDispatcher();

  function intersectPercent(entries) {
    entries.forEach((entry) => {
      percent = Math.round(Math.ceil(entry.intersectionRatio * 100));
      if (percent >= threshold) {
        if (!toggle) {
          dispatch("visible", element.children[0]);
          toggle = true;
        }
      } else {
        toggle = false;
      }
    });
  }

  function stepsToThreshold(steps) {
    return [...Array(steps).keys()].map((n) => n / steps);
  }

  onMount(() => {
    intersectionObserverSupport =
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype;

    const options = {
      rootMargin: `${top}px ${right}px ${bottom}px ${left}px`,
      threshold: stepsToThreshold(steps),
    };

    if (intersectionObserverSupport) {
      observer = new IntersectionObserver(intersectPercent, options);
      observer.observe(element);
      unobserve = () => observer.unobserve(element);
    }

    return unobserve;
  });
</script>

<div bind:this={element}>
  <slot {percent} {unobserve} {intersectionObserverSupport} />
</div>

<!-- Code taken from -->
<!-- https://dev.to/dan_1s/visibility-detection-using-svelte-2e96 -->
