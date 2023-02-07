<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { currentProjectIndex, projectScrollDir } from '../../../lib/tools';
	import ProjectContent from './ProjectContent.svelte';

	export let project: Project;

	export let projectIndex: number;

	const dispatch = createEventDispatcher();

	// @ts-ignore
	function customFly(node, { duration, delay = 0 }) {
		let initValue = 0;
		return {
			delay,
			duration,
			css: (t: number) => {
				if (initValue == 0) initValue = t;

				const eased = cubicInOut(t);
				return `
					position:absolute;
					top: 0;
					opacity: ${eased};
					transform: translateX(${$projectScrollDir * (initValue == 1 ? 1 : -1) * 100 * (1 - eased)}%);
					`;
			}
		};
	}
</script>

{#if $currentProjectIndex == projectIndex}
	<div
		class="project-card"
		data-name={project.title}
		in:customFly={{ duration: 500, delay: 100 }}
		out:customFly={{ duration: 500 }}
	>
		<div
			on:outroend={() => dispatch('outroended')}
			class="project-container"
			class:hidden={$currentProjectIndex == projectIndex}
		>
			<ProjectContent {project} />
		</div>
	</div>
{/if}

<style lang="scss">
	.project-card {
		flex: 1 0 auto;
		position: absolute;
		inset: 0;
		background: gray;
		border-radius: 5px;
		padding: 1rem;
	}
</style>
