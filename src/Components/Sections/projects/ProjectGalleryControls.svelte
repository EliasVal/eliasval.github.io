<script lang="ts">
	import { galleryState, nextProject, prevProject } from '$lib/projects-state.svelte';

	interface Props {
		projectsLength: number;
	}
	const { projectsLength }: Props = $props();

	document.onkeydown = function (e) {
		if (galleryState.isFocused) {
			if (e.key == 'ArrowLeft') prevProject(projectsLength);
			else if (e.key == 'ArrowRight') nextProject(projectsLength);
		}
	};
</script>

<footer class="mx-8 flex justify-center gap-8">
	<button onclick={() => prevProject(projectsLength)} title="Previous Project">
		<img src="/svgs/arr-left.svg" alt="" />
	</button>
	<span class="flex items-center gap-1">
		{#each new Array(projectsLength) as _, i}
			<button
				class:bg-white={i == galleryState.index}
				class="size-4 cursor-pointer rounded-full border border-white bg-transparent transition"
				onclick={() => {
					galleryState.flyDirection = i > galleryState.index ? -1 : 1;
					galleryState.index = i;
					galleryState.inTransition = true;
				}}
				title={`Jump to project ${i + 1}`}
			></button>
		{/each}
	</span>
	<button onclick={() => nextProject(projectsLength)} title="Next Project">
		<img class="rotate-180" src="/svgs/arr-left.svg" alt="" />
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
