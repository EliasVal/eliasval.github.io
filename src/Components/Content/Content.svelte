<script lang="ts">
  import ContentSection from "./ContentSection.svelte";

  import Header from "../Sections/Header.svelte";
  import About from "../Sections/About.svelte";
  import Projects from "../Sections/Projects.svelte";

  export let data;
</script>

<ContentSection on:visible id="header">
  <Header />
</ContentSection>

<hr />

<ContentSection on:visible id="about">
  <About langs={data.langs} libs={data.libs} />
</ContentSection>

<hr />

<ContentSection on:visible id="projects">
  <Projects projects={data.projects} />
</ContentSection>
