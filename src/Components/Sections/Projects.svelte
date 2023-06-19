<script lang="ts">
	import ProjectGallery from '../Projects/ProjectGallery.svelte';
	import GradientText from '../GradientText.svelte';
	import { fly } from 'svelte/transition';

	import { cubicOut } from 'svelte/easing';

	import { projects as _projects } from '$lib/data.json';

	// @ts-ignore
	let projects: Project[] = _projects;
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
</div>

<style lang="scss">
	#projects {
		min-height: 100vh;

		overflow: hidden;

		display: flex;
		flex-direction: column;
		gap: 2.5rem;

		.header {
			margin: 2rem 0 0 3em;
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
	}

	@media screen and (max-width: 780px) {
		#projects .header {
			margin: 2rem 2em 0rem 2em;
			.title {
				font-size: 2rem;
			}
		}
	}
</style>
