<script lang="ts">
	import { globalState } from '$lib/state.svelte';
	interface Props {
		projectsLength: number;
	}
	const { projectsLength }: Props = $props();

	const nextProject = () => {
		let oldValue = globalState.currentProjectIndex;

		globalState.currentProjectIndex =
			globalState.currentProjectIndex + 1 >= projectsLength
				? 0
				: globalState.currentProjectIndex + 1;

		globalState.galleryFlyDir = oldValue < globalState.currentProjectIndex ? -1 : 1;
		globalState.galleryTransitionEnded = false;
	};

	const prevProject = () => {
		let oldValue = globalState.currentProjectIndex;

		globalState.currentProjectIndex =
			globalState.currentProjectIndex - 1 < 0
				? projectsLength - 1
				: globalState.currentProjectIndex - 1;

		globalState.galleryFlyDir = oldValue < globalState.currentProjectIndex ? -1 : 1;
		globalState.galleryTransitionEnded = false;
	};

	document.onkeydown = function (e) {
		if (globalState.galleryIsFocused) {
			if (e.key == 'ArrowLeft') prevProject();
			else if (e.key == 'ArrowRight') nextProject();
		}
	};
</script>

<footer class="mx-8 flex justify-center gap-8">
	<button onclick={prevProject} title="Previous Project">
		<img src="/svgs/arr-left.svg" alt="" />
	</button>
	<span class="flex items-center gap-1">
		{#each new Array(projectsLength) as _, i}
			<button
				class:bg-white={i == globalState.currentProjectIndex}
				class="h-4 w-4 cursor-pointer rounded-full border border-white bg-gray-800 transition"
				onclick={() => {
					const oldValue = globalState.currentProjectIndex;
					globalState.currentProjectIndex = i;
					globalState.galleryFlyDir = oldValue < globalState.currentProjectIndex ? -1 : 1;
					globalState.galleryTransitionEnded = false;
				}}
				title={`Jump to project ${i + 1}`}
			></button>
		{/each}
	</span>
	<button onclick={nextProject} title="Next Project">
		<img style="transform: scaleX(-1);" src="/svgs/arr-left.svg" alt="" />
	</button>
</footer>

<style lang="postcss">
	@reference "tailwindcss";

	footer > button {
		border-radius: 20%;
		background-color: white;
		border: 1px solid black;

		img {
			aspect-ratio: 1 / 1;
		}

		cursor: pointer;

		@apply size-8 md:size-12;
	}
</style>
