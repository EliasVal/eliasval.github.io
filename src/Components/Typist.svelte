<script lang="ts">
  import type { Properties } from "csstype";
  import { onMount } from "svelte";

  export let text;
  export let interval;
  export let delay = 0;

  export let styles: Properties = {};

  export let cursor = false;
  export let keepCursor = false;

  let beganTyping = false;
  let finishedTyping = false;

  let res = "";

  let element: HTMLElement;

  onMount(() => {
    for (let [key, value] of Object.entries(styles)) {
      element.style[key] = styles[key];
    }
  });
  setTimeout(() => {
    beganTyping = true;
    let intr = setInterval(() => {
      res += text.substring(res.length, res.length + 1);
      if (res == text) {
        clearInterval(intr);
        finishedTyping = true;
      }
    }, interval);
  }, delay);
</script>

<p
  bind:this={element}
  class:cursor={(cursor && !finishedTyping) || keepCursor}
  class:blink={!beganTyping || (finishedTyping && keepCursor)}
>
  {res}
</p>

<style lang="scss">
  p {
    min-height: calc(1rem + 0.6rem);

    &.cursor::after {
      content: "a";
      color: transparent;
      background-color: white;
      margin-left: 0.3ch;
    }

    &.blink::after {
      animation: blink 1s alternate 0.3s infinite;
    }
  }

  @keyframes blink {
    from {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
