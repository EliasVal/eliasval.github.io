<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { cubicInOut, cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { currentProjectIndex } from '../../../lib/tools';
	// Project property & type declaration
	export let project: {
		img: string;
		title: string;
		description: string;
		status: {
			title: string;
			color: string;
		};
		availableAt: {
			logo: string;
			url: string;
		}[];
		madeWith: string[];
	};

	export let projectIndex: number;

	const dispatch = createEventDispatcher();

	// @ts-ignore
	function cfly(node, { duration }) {
		let initValue = 0;
		return {
			duration,
			css: (t: number) => {
				if (initValue == 0) initValue = t;

				const eased = cubicInOut(t);
				return `
					position:absolute;
					top: 0;
					opacity: ${eased};
					transform: translateX(${(initValue == 1 ? 1 : -1) * 100 * (1 - eased)}%);
					`;
			}
		};
	}

	// in:fly={{ duration: 500, x: -50 }}
	// 		out:cfly={{ duration: 500 }}
</script>

{#if $currentProjectIndex == projectIndex}
	<div
		class="project"
		data-name={project.title}
		in:cfly={{ duration: 500 }}
		out:cfly={{ duration: 500 }}
	>
		<div
			on:outroend={() => dispatch('outroended')}
			class="project-container"
			class:hidden={$currentProjectIndex == projectIndex}
		>
			<h1>{project.title}</h1>
		</div>
	</div>
{/if}

<style lang="scss">
	.project {
		// position: absolute;
		// transform: translateX(-50%);
		// width: 100%;
		flex: 1 0 auto;
		position: absolute;
		inset: 0;
		background: gray;
		border-radius: 5px;
	}
</style>
