<script lang="ts">
  // @ts-ignore
  export let containerStyle: Partial<CSSStyleDeclaration> = {};
  export let titleStyle: Partial<CSSStyleDeclaration> = {};
  export let contentStyle: Partial<CSSStyleDeclaration> = {};
  export let title: string | null = null;
  export let sub: boolean = false;

  // https://stackoverflow.com/questions/45205593/how-to-convert-a-json-style-object-to-a-css-string
  const formatToHTMLStyleFromObject = (styleObj: Partial<CSSStyleDeclaration>) => {
    return Object.entries(styleObj)
      .reduce((acc, [key, value]) => `${acc} ${key}: ${value};`, '')
      .replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
  };
</script>

<div class="container" style={formatToHTMLStyleFromObject(containerStyle)}>
  {#if title && !sub}
    <h1 style={formatToHTMLStyleFromObject(titleStyle)}>
      {title}
    </h1>
  {/if}
  <div class="content" style={formatToHTMLStyleFromObject(contentStyle)}>
    <slot />
  </div>
  {#if title && sub}
    <h1 style={formatToHTMLStyleFromObject(titleStyle)}>
      {title}
    </h1>
  {/if}
</div>

<style lang="scss">
  .container {
    max-width: 60ch;
    padding: 1rem;
    background: linear-gradient(to bottom right, #474747, #616161);
    border-radius: 5px;
    box-shadow: 0 0 10px 0px rgba(255, 255, 255, 0.13);
    box-sizing: border-box;
  }

  .content {
    background-color: #010101;
    padding: 1rem;
    border-radius: 5px;
    font-size: 1.15em;
  }
</style>
