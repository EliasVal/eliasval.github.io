<script lang="ts">
	import Navbar from '../Components/Navbar/Navbar.svelte';
	import Projects from '../Components/Sections/projects/Projects.svelte';

	import WorkEthics from '../Components/Sections/work-values/WorkValues.svelte';
	import Hero from '../Components/Sections/Hero.svelte';

	import Footer from '../Components/Footer.svelte';
	import AboutSection from '../Components/Sections/about/AboutSection.svelte';
</script>

<Navbar />

<Hero />

<main>
	<AboutSection />
	<WorkEthics />
	<Projects />
</main>

<Footer />

<style lang="scss">
	:global(section) {
		min-height: 100vh;
		z-index: 2;
		position: relative;
		display: flex;
		flex-direction: column;
	}

	:global(main > section) {
		--padding-top: 5rem;
		padding-top: var(--padding-top);
		min-height: calc(100vh - var(--padding-top));
	}

	@media screen and (max-width: 687px) {
		:global(main section > *:not(header)) {
			font-size: 2.5vw;
		}
	}
</style>
