<script lang="ts">
	import { currentProjectIndex, galleryTransitionEnded } from '$lib/tools';
	import { cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	export let projects: Project[];

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
</script>

<div class="gallery-controls">
	<button
		on:click={scrollLeft}
		in:fly={{ x: -250, duration: 550, easing: cubicOut, delay: 2750 }}
		title="Previous Project"
	>
		<img src="/svgs/arr-left.svg" alt="" />
	</button>
	<button
		on:click={scrollRight}
		in:fly={{ x: 250, duration: 550, easing: cubicOut, delay: 2750 }}
		title="Next Project"
	>
		<img style="transform: scaleX(-1);" src="/svgs/arr-left.svg" alt="" />
	</button>
</div>

<style lang="scss">
	.gallery-controls {
		position: absolute;
		top: calc(5rem - 5%);
		right: 1.5rem;
		left: 1.5rem;
		bottom: calc(5rem + 7.5%);

		pointer-events: none;

		display: flex;
		justify-content: space-between;

		button {
			img {
				aspect-ratio: 1 / 1;
				background-color: white;
				border-radius: 50%;
				border: 3px #000 solid;
			}

			background-color: transparent;
			border: none;
			width: 5rem;
			cursor: pointer;

			pointer-events: fill;
		}
	}

	@media screen and (max-width: 960px) {
		.gallery-controls {
			top: 40% !important;
			bottom: 45% !important;

			button {
				width: 3.5rem !important;
			}
		}
	}
</style>
