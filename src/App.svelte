<script lang="typescript">
  import Header from "./Components/Header.svelte";
  import Introduction from "./Components/Introduction.svelte";
  import NextSection from "./Components/NextSection.svelte";
  import Visibility from "./Components/Visibility.svelte";

  // @ts-ignore
  import data from "./static/data.json";
  import { HTMLCollectionIndexOf } from "./tools";

  const sections = document.getElementsByTagName("section");
  let count = 0;

  function MoveToNextSection() {
    count = count + 1 > sections.length - 1 ? 0 : count + 1;
    sections[count].scrollIntoView({ behavior: "smooth" });
  }
</script>

<svelte:head>
  <title>Elias' Portfolio</title>
</svelte:head>

<Visibility
  steps={100}
  threshold={50}
  on:visible={(e) => {
    count = HTMLCollectionIndexOf(sections, e.detail);
  }}
>
  <Header />
</Visibility>

<Visibility
  steps={100}
  threshold={50}
  on:visible={(e) => {
    count = HTMLCollectionIndexOf(sections, e.detail);
  }}
>
  <Introduction langs={data.langs} libs={data.libs} />
</Visibility>

<NextSection on:move={MoveToNextSection} />

<style lang="scss">
  :global(section) {
    /*width: 100vw;*/
    height: 100vh;
  }
</style>
