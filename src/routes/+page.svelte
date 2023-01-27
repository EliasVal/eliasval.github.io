<script lang="ts">
	import { onMount } from 'svelte';
	import IntersectionObserver from '../Components/IntersectionObserver.svelte';
	import Section from '../Components/Section.svelte';
	import MainHeader from './../Components/MainHeader.svelte';
	import AboutMe from '../Components/AboutMe.svelte';

	onMount(() => {
		fontResize();
	});

	function fontResize() {
		let perc = window.outerWidth / (window.outerWidth <= 680 ? 9 : 15);
		document.getElementsByTagName('body')[0].style.fontSize = `${perc}%`;
	}
</script>

<svelte:window on:resize={fontResize} />

<!-- <Background /> -->

<IntersectionObserver steps={100} threshold={50} let:visibleOnce>
	<Section>
		{#if visibleOnce}
			<MainHeader />
		{/if}
	</Section>
</IntersectionObserver>

<IntersectionObserver steps={100} threshold={50} let:visibleOnce>
	<Section>
		{#if visibleOnce}
			<AboutMe />
		{/if}
	</Section>
</IntersectionObserver>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,100;0,300;0,700;1,100;1,300;1,700&display=swap&text=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-!%3F%27%23%26%2F%3A()%2C"');
	:global(*) {
		margin: 0;
		padding: 0;
		font-family: 'Rubik', sans-serif;
		// font-size: 2vw;
		color: white;
		background-color: rgb(32, 32, 32);
		z-index: 2;
	}

	:global(body),
	:global(html) {
		overflow-x: hidden;
		font-size: 100%;
	}

	:global(body)::before {
		position: fixed;

		width: 100vw;
		height: 100vh;

		background-image: radial-gradient(rgba(255, 255, 255, 0.1) 9%, gray 2%, transparent 9%);
		background-position: 0% 0%;
		background-size: 5vmin 5vmin;

		z-index: 1;

		content: '';
	}
</style>
