<script lang="ts">
	import { onMount } from 'svelte';
	import { globalState } from '$lib/state.svelte';
	import ProjectCard from './ProjectCard.svelte';
	import ProjectGalleryControls from './ProjectGalleryControls.svelte';

	const { projects }: { projects: Project[] } = $props();

	let cardWidth: number = $state(0);
	let cardHeight: number = $state(0);
	let gallery: HTMLElement;
	let rootStyles: HTMLElement | null;

	onMount(() => {
		getCardSize();
		globalState.currentProjectIndex = 0;
		globalState.galleryFlyDir = 0;
		rootStyles = document.querySelector(':root');
	});

	let t: NodeJS.Timeout;
	$effect(() => {
		// Set left property of gallery element to show current project
		// (document.body.clientWidth - cardWidth) / 2 - To center one card
		// rest offsets that by current card index (with addition of --cardGap gap)
		if (rootStyles != null) {
			rootStyles.style.setProperty('--idx', globalState.currentProjectIndex.toString());
			rootStyles.style.setProperty(
				'--screenWidth',
				Math.trunc((document.body.clientWidth - cardWidth) / 2) + 'px'
			);
			rootStyles.style.setProperty(
				'--cardWidth',
				`calc(${Math.trunc(cardWidth)}px + var(--cardGap))`
			);
		}

		// Delete any running timeouts so all transitions play smoothly
		clearTimeout(t);
		t = setTimeout(() => {
			globalState.galleryTransitionEnded = true;
		}, 725);
	});

	const getCardSize = () => {
		// Grab a non-scaled-up project card
		let goodCard =
			globalState.currentProjectIndex + 1 >= projects.length
				? 0
				: globalState.currentProjectIndex + 1;

		let rect = document.querySelectorAll('.project-card')[goodCard]?.getBoundingClientRect();
		cardWidth = rect?.width || 0;
		cardHeight = rect?.height || 0;
	};
</script>

<svelte:window on:resize={getCardSize} />

<div class="flex grow flex-col gap-12">
	<div class="gallery grow" bind:this={gallery}>
		{#each projects as project, i}
			<ProjectCard {project} projectIndex={i} projectsLength={projects.length} />
		{/each}
	</div>

	<ProjectGalleryControls projectsLength={projects.length} />
</div>

<style lang="scss">
	:global(:root) {
		--screenWidth: 0px;
		--cardWidth: 0px;
		--idx: 0;
		--cardGap: 8rem;
	}

	.gallery {
		position: relative;
		flex-grow: 1;

		display: flex;
		gap: var(--cardGap);

		animation: flyIn 1.15s ease-out;
		transform: translateX(calc(var(--screenWidth) - var(--cardWidth) * var(--idx)));
		transition: transform 0.75s cubic-bezier(0.6, 1, 0.6, 1);
	}

	@keyframes flyIn {
		from {
			opacity: 0;
			transform: translateX(-2050px);
		}
		to {
			opacity: 1;
			transform: translateX(calc(var(--screenWidth) - var(--cardWidth) * var(--idx)));
		}
	}
</style>
