<script lang="ts">
  import type { Properties } from "csstype";
  import { createEventDispatcher, onMount } from "svelte";
  import { sleep } from "../tools";

  export let text: Array<{ text: string; color: string }>;
  export let interval;
  export let delay = 0;

  export let styles: Properties = {};

  export let cursor = false;
  export let keepCursor = false;

  const dispatch = createEventDispatcher();

  let beganTyping = false;
  let finishedTyping = false;

  let element: HTMLElement;

  onMount(() => {
    for (let [key, value] of Object.entries(styles)) {
      element.style[key] = styles[key];
    }
  });
  setTimeout(async () => {
    beganTyping = true;
    for (let t of text) {
      if (!element) break;
      if (t.text == "\n") {
        element.appendChild(document.createElement("br"));
        continue;
      }
      const span = document.createElement("span");
      span.style.color = t.color;
      span.innerHTML = "";
      for (let [key, value] of Object.entries(styles)) {
        span.style[key] = styles[key];
      }
      element.appendChild(span);
      while (span.innerHTML != t.text) {
        span.innerHTML += t.text.substring(
          span.innerHTML.length,
          span.innerHTML.length + 1
        );
        await sleep(interval);
      }
    }
    finishedTyping = true;
    dispatch("finished", element);
  }, delay);
</script>

<p
  class:cursor={(cursor && !finishedTyping) || keepCursor}
  class:blink={!beganTyping || (finishedTyping && keepCursor)}
>
  <span bind:this={element} />
  <slot {finishedTyping} />
</p>

<style lang="scss">
  p {
    // min-height: 1.6rem;

    &.cursor::after {
      content: "|";
      color: transparent;
      background-color: white;
      margin-left: 0.3ch;
    }

    &.blink::after {
      animation: blink 0.75s linear alternate 0.3s infinite;
    }
  }

  @keyframes blink {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
