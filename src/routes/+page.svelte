<script lang="ts">
	import Navbar from '../Components/Navbar/Navbar.svelte';
	import Projects from './../Components/Sections/Projects.svelte';

	import './global.scss';

	import IntersectionObserver from '../Components/IntersectionObserver.svelte';

	import WorkEthics from '../Components/Sections/WorkValues.svelte';
	import Main from '../Components/Sections/Main.svelte';

	import Footer from '../Components/Footer.svelte';
	import { globalState } from '$lib/state.svelte';
	import About from '../Components/Sections/About.svelte';
</script>

<Navbar />

<IntersectionObserver visible={() => (globalState.activeSection = 0)}>
	<Main />
</IntersectionObserver>

<IntersectionObserver visible={() => (globalState.activeSection = 1)}>
	<About />
</IntersectionObserver>

<IntersectionObserver visible={() => (globalState.activeSection = 2)}>
	<WorkEthics />
</IntersectionObserver>

<IntersectionObserver visible={() => (globalState.activeSection = 3)}>
	<Projects />
</IntersectionObserver>

<Footer />
