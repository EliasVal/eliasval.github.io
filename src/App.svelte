<script lang="ts">
  import Content from "./Components/Content/Content.svelte";

  // Navigation
  import NextSection from "./Components/NextSection.svelte";
  import Navbar from "./Components/Navbar/Navbar.svelte";

  // Tools & Data
  import { HTMLCollectionIndexOf, LocationHash } from "./tools";
  // @ts-ignore
  import data from "./static/data.json";

  const sections = document.getElementsByTagName("section");
  let currentSection = 0;

  function MoveToNextSection() {
    currentSection =
      currentSection + 1 > sections.length - 1 ? 0 : currentSection + 1;
    // sections[currentSection].scrollIntoView({ behavior: "smooth" });
    window.location.assign(`#${sections[currentSection].id}`);
  }
</script>

<svelte:head>
  <title>Elias' Portfolio</title>
</svelte:head>

<Content
  {data}
  on:visible={(e) => {
    currentSection = HTMLCollectionIndexOf(sections, e.detail);
    LocationHash.set(sections[currentSection].id);
  }}
/>

<NextSection on:move={MoveToNextSection} />

<Navbar />

<style lang="scss">
  :global(.bold) {
    font-weight: 600;
  }
</style>
