<script lang="ts">
  import ContentSection from "./ContentSection.svelte";

  import Header from "../Sections/Header.svelte";
  import Introduction from "../Sections/Introduction.svelte";

  export let data;
</script>

<ContentSection on:visible id="header">
  <Header />
</ContentSection>

<hr />

<ContentSection on:visible id="introduction">
  <Introduction langs={data.langs} libs={data.libs} />
</ContentSection>
