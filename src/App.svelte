<script lang="typescript">
  import Header from "./Components/Sections/Header.svelte";
  import Introduction from "./Components/Sections/Introduction.svelte";
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
  let:visible
  fireOnce={true}
>
  <section>
    {#if visible}
      <Header />
    {/if}
  </section>
</Visibility>

<hr />
<Visibility
  steps={100}
  threshold={50}
  on:visible={(e) => {
    count = HTMLCollectionIndexOf(sections, e.detail);
  }}
  let:visible
  fireOnce={true}
>
  <section>
    {#if visible}
      <Introduction langs={data.langs} libs={data.libs} />
    {/if}
  </section>
</Visibility>

<NextSection on:move={MoveToNextSection} />
