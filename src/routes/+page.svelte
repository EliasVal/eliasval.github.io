<script lang="ts">
  import Projects from './../Components/Sections/Projects.svelte';

  import '../Styling/global.scss';

  import IntersectionObserver from '../Components/IntersectionObserver.svelte';

  import WorkEthics from '../Components/Sections/WorkValues.svelte';
  import MainHeader from '../Components/Sections/MainHeader.svelte';
  import AboutMe from '../Components/Sections/AboutMe.svelte';
  import NextSection from '../Components/NextSection.svelte';

  import Footer from '../Components/Footer.svelte';
</script>

<IntersectionObserver>
  <MainHeader />
</IntersectionObserver>

<IntersectionObserver>
  <AboutMe />
</IntersectionObserver>

<IntersectionObserver>
  <WorkEthics />
</IntersectionObserver>

<IntersectionObserver>
  <Projects />
</IntersectionObserver>

<Footer />

<NextSection />
