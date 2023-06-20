<script lang="ts">
	import Projects from './../Components/Sections/Projects.svelte';

	import '../Styling/global.scss';

	import Section from '../Components/Section.svelte';

	import WorkEthics from '../Components/Sections/WorkValues.svelte';
	import MainHeader from '../Components/Sections/MainHeader.svelte';
	import AboutMe from '../Components/Sections/AboutMe.svelte';
	import NextSection from '../Components/NextSection.svelte';

	// onMount(() => {
	// 	fontResize();
	// });

	// function fontResize() {
	// 	let perc = window.outerWidth / (window.outerWidth <= 680 ? 9 : 15);
	// 	document.getElementsByTagName('body')[0].style.fontSize = `${perc}%`;
	// }
</script>

<!-- <svelte:window on:resize={fontResize} on:focus={fontResize} on:blur={fontResize} /> -->

<Section>
	<MainHeader />
</Section>

<Section>
	<AboutMe />
</Section>

<Section>
	<WorkEthics />
</Section>

<Section>
	<Projects />
</Section>

<NextSection />
