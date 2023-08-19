<script lang="ts">
  import Navbar from './../Components/Navbar.svelte';
  import Projects from './../Components/Sections/Projects.svelte';

  import '../Styling/global.scss';

  import IntersectionObserver from '../Components/IntersectionObserver.svelte';

  import WorkEthics from '../Components/Sections/WorkValues.svelte';
  import Main from '../Components/Sections/Main.svelte';

  import Footer from '../Components/Footer.svelte';
  import { activeSection } from '$lib/tools';
</script>

<Navbar />

<IntersectionObserver on:visible={() => ($activeSection = 0)}>
  <Main />
</IntersectionObserver>

<IntersectionObserver on:visible={() => ($activeSection = 1)}>
  <WorkEthics />
</IntersectionObserver>

<IntersectionObserver on:visible={() => ($activeSection = 2)}>
  <Projects />
</IntersectionObserver>

<Footer />
