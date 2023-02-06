<script lang="ts">
	import { currentProjectIndex } from '../../lib/tools';
	import GradientText from '../GradientText.svelte';
	import { fly } from 'svelte/transition';

	import { cubicOut } from 'svelte/easing';

	import { projects } from '../../lib/data.json';
	import Project from './Projects/Project.svelte';
	import { onMount } from 'svelte';

	let gallery: Element;

	let dir = -1;
	let projectElements: NodeListOf<Element>;

	const scrollRight = () => {
		// @ts-ignore
		// projectElements[0].style.display = 'none';
		// @ts-ignore
		// projectElements[projects.length - 1].style.display = 'block';

		$currentProjectIndex =
			$currentProjectIndex - 1 < 0 ? projects.length - 1 : $currentProjectIndex - 1;

		console.log($currentProjectIndex);
		console.log(projectElements.length);
	};

	const scrollLeft = () => {};

	onMount(() => {
		$currentProjectIndex = 0;
		projectElements = gallery.querySelectorAll('.project');
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
	<div class="gallery" bind:this={gallery}>
		{#each projects as project, i}
			<Project
				{project}
				projectIndex={i}
				on:outroended={() => {
					if (dir == -1)
						// @ts-ignore
						gallery.insertBefore(gallery.lastElementChild, gallery.firstElementChild);
					else {
						// @ts-ignore
						gallery.appendChild(gallery.firstChild);
						gallery.firstChild?.remove();
					}
				}}
			/>
		{/each}
	</div>
	<div class="gallery-controls">
		<button>L</button>
		<button on:click={scrollRight}>R</button>
	</div>
</div>

<style lang="scss">
	#projects {
		min-height: 100vh;

		display: flex;
		flex-direction: column;

		.header {
			margin: 4em 5em;
			background-color: transparent;
			.title {
				font-size: 4em;
				font-weight: bold;
			}
			display: inline-block;
		}

		.gallery {
			position: relative;
			// display: flex;
			// gap: 100%;
			margin: 0 7.5em 4em 7.5em;
			flex-grow: 1;
		}

		.gallery-controls {
			text-align: center;

			button {
				// font-size: 3rem;
				aspect-ratio: 1 / 1;
				width: 3rem;
			}
		}
	}
</style>
