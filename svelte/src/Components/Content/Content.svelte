<script lang="ts">
  import ContentSection from "./ContentSection.svelte";

  import Header from "../Sections/Header.svelte";
  import About from "../Sections/About.svelte";
  import Projects from "../Sections/Projects.svelte";
  import Footer from "../Sections/Footer.svelte";

  export let data;
</script>

<div>
  <ContentSection on:visible id="header">
    <Header />
  </ContentSection>

  <hr />

  <ContentSection on:visible id="about">
    <About langs={data.langs} libs={data.libs} />
  </ContentSection>

  <hr />

  <ContentSection on:visible id="projects" checkVisibility={false}>
    <Projects projects={data.projects} />
  </ContentSection>
</div>

<Footer />
