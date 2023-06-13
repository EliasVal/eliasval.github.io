<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { currentProjectIndex, galleryTransitionEnded } from '@tools';
	import ProjectContent from './ProjectContent.svelte';

	export let project: Project;

	export let projectIndex: number;

	const dispatch = createEventDispatcher();
</script>

<div
	class="project-card"
	data-name={project.title}
	class:selected={projectIndex == $currentProjectIndex && $galleryTransitionEnded}
>
	<div
		on:outroend={() => dispatch('outroended')}
		class="project-container"
		class:hidden={$currentProjectIndex == projectIndex}
	>
		<ProjectContent {project} />
	</div>
</div>

<style lang="scss">
	.project-card {
		flex-shrink: 0;
		width: 75vw;
		background: gray;
		border-radius: 5px;
		padding: 1rem;

		transition: scale 0.2s;

		&.selected {
			scale: 105%;
		}
	}
</style>
