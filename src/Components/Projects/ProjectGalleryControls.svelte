<script lang="ts">
	import { currentProjectIndex, galleryTransitionEnded, galleryFlyDir } from '$lib/tools';
	export let projectsLength: number;

	const nextProject = () => {
		let oldValue = $currentProjectIndex;

		$currentProjectIndex =
			$currentProjectIndex + 1 >= projectsLength ? 0 : $currentProjectIndex + 1;

		$galleryFlyDir = oldValue < $currentProjectIndex ? -1 : 1;

		$galleryTransitionEnded = true;
		$galleryTransitionEnded = false;
	};

	const prevProject = () => {
		let oldValue = $currentProjectIndex;

		$currentProjectIndex =
			$currentProjectIndex - 1 < 0 ? projectsLength - 1 : $currentProjectIndex - 1;

		$galleryFlyDir = oldValue < $currentProjectIndex ? -1 : 1;

		$galleryTransitionEnded = true;
		$galleryTransitionEnded = false;
	};
</script>

<button on:click={prevProject}>
	<img src="/svgs/arr-left.svg" alt="" />
</button>
<slot />
<button on:click={nextProject}>
	<img style="transform: scaleX(-1);" src="/svgs/arr-left.svg" alt="" />
</button>

<style lang="scss">
	button {
		border-radius: 20%;
		background-color: white;
		border: none; //3px #000 solid;
		height: 3rem;
		img {
			aspect-ratio: 1 / 1;
		}

		width: 3rem;
		cursor: pointer;

		pointer-events: fill;
	}
</style>
