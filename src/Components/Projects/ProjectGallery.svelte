<script lang="ts">
	import { onMount } from 'svelte/internal';
	import { currentProjectIndex, galleryTransitionEnded } from '$lib/tools';
	import ProjectCard from './ProjectCard.svelte';

	export let projects: Project[];

	let cardSize: number;
	let gallery: HTMLElement;

	onMount(() => {
		getCardSize();
		$currentProjectIndex = 0;
	});

	let t: NodeJS.Timeout;
	$: {
		if (gallery != null)
			gallery.style.left = `calc(${
				(document.body.clientWidth - cardSize) / 2
			}px - (${cardSize}px + 4.5rem) * ${$currentProjectIndex})`;

		clearTimeout(t);
		t = setTimeout(() => {
			$galleryTransitionEnded = true;
		}, 725);
	}

	const getCardSize = () => {
		let goodCard = $currentProjectIndex + 1 >= projects.length ? 0 : $currentProjectIndex + 1;
		cardSize =
			document.querySelectorAll('.project-card')[goodCard]?.getBoundingClientRect().width || 0;
	};
</script>

<svelte:window on:resize={getCardSize} />

<div class="gallery" bind:this={gallery}>
	{#each projects as project, i}
		<ProjectCard {project} projectIndex={i} projectsLength={projects.length} />
	{/each}
</div>

<style lang="scss">
	.gallery {
		position: absolute;
		width: 100%;
		height: 90%;

		display: flex;
		gap: 4.5rem;

		transition: left 0.75s cubic-bezier(0.6, 1, 0.6, 1);
	}
</style>
