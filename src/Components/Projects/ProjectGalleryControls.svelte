<script lang="ts">
	import { globalState } from '$lib/state.svelte';
	export let projectsLength: number;

	const nextProject = () => {
		let oldValue = globalState.currentProjectIndex;

		globalState.currentProjectIndex =
			globalState.currentProjectIndex + 1 >= projectsLength
				? 0
				: globalState.currentProjectIndex + 1;

		globalState.galleryFlyDir = oldValue < globalState.currentProjectIndex ? -1 : 1;

		globalState.galleryTransitionEnded = true;
		globalState.galleryTransitionEnded = false;
	};

	const prevProject = () => {
		let oldValue = globalState.currentProjectIndex;

		globalState.currentProjectIndex =
			globalState.currentProjectIndex - 1 < 0
				? projectsLength - 1
				: globalState.currentProjectIndex - 1;

		globalState.galleryFlyDir = oldValue < globalState.currentProjectIndex ? -1 : 1;

		globalState.galleryTransitionEnded = true;
		globalState.galleryTransitionEnded = false;
	};

	document.onkeydown = function (e) {
		if (globalState.galleryIsFocused) {
			if (e.key == 'ArrowLeft') prevProject();
			else if (e.key == 'ArrowRight') nextProject();
		}
	};
</script>

<button on:click={prevProject} aria-label="Previous Project" title="Previous Project">
	<img src="/svgs/arr-left.svg" alt="" />
</button>
<slot />
<button on:click={nextProject} aria-label="Next Project" title="Next Project">
	<img style="transform: scaleX(-1);" src="/svgs/arr-left.svg" alt="" />
</button>

<style lang="postcss">
	@reference "tailwindcss";

	button {
		border-radius: 20%;
		background-color: white;
		border: none;
		height: 3rem;

		img {
			aspect-ratio: 1 / 1;
		}

		cursor: pointer;
		pointer-events: fill;

		@apply size-6 md:size-12;
	}
</style>
