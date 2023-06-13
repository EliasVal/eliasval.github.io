<script lang="ts">
	import ProjectGallery from './Projects/ProjectGallery.svelte';
	import { currentProjectIndex, galleryTransitionEnded } from '@tools';
	import GradientText from '../GradientText.svelte';
	import { fly } from 'svelte/transition';

	import { cubicOut } from 'svelte/easing';

	import { projects as _projects } from '$lib/data.json';
	import { onMount } from 'svelte';

	// @ts-ignore
	let projects: Project[] = _projects;

	const scrollRight = () => {
		$currentProjectIndex =
			$currentProjectIndex + 1 >= projects.length ? 0 : $currentProjectIndex + 1;

		$galleryTransitionEnded = false;
	};

	const scrollLeft = () => {
		$currentProjectIndex =
			$currentProjectIndex - 1 < 0 ? projects.length - 1 : $currentProjectIndex - 1;

		$galleryTransitionEnded = false;
	};

	onMount(() => {
		$currentProjectIndex = 0;
	});
</script>

<div id="projects">
	<div class="header">
		<div in:fly={{ x: -60, duration: 850, easing: cubicOut, delay: 100 }} class="title">
			<GradientText rgbValues={['#0FF0FF', '#0FFFFF', '#FFFFFF']} direction={'to top right'}>
				My Projects
			</GradientText>
		</div>
	</div>
	<div
		class="gallery-container"
		in:fly={{ x: -2050, duration: 2050, easing: cubicOut, delay: 550 }}
	>
		<ProjectGallery {projects} />
	</div>
	<div class="gallery-controls" in:fly={{ y: 250, duration: 550, easing: cubicOut, delay: 2750 }}>
		<button on:click={scrollLeft}>L</button>
		<button on:click={scrollRight}>R</button>
	</div>
</div>

<style lang="scss">
	#projects {
		min-height: 100vh;

		overflow: hidden;

		display: flex;
		flex-direction: column;
		gap: 2.5rem;

		.header {
			margin: 1rem 5em 0 5em;
			background-color: transparent;
			.title {
				font-size: 4em;
				font-weight: bold;
			}
			display: inline-block;
		}

		.gallery-container {
			position: relative;
			flex-grow: 1;
			overflow-wrap: normal;
		}

		.gallery-controls {
			text-align: center;

			button {
				aspect-ratio: 1 / 1;
				width: 3rem;
			}
		}
	}
</style>
