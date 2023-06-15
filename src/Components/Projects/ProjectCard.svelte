<script lang="ts">
	import { ReturnSvg } from '$lib/svgImport';
	import { currentProjectIndex, galleryTransitionEnded } from '$lib/tools';
	import GradientText from '../GradientText.svelte';
	import AboutMe from '../Sections/AboutMe.svelte';

	export let project: Project;

	export let projectIndex: number;
</script>

<div
	class="project-card"
	class:selected={projectIndex == $currentProjectIndex && $galleryTransitionEnded}
>
	<div class="project-image">
		<img src="/images/{project.img}.jpg" alt={project.title} />
	</div>
	<div class="project-details">
		<h1>
			<GradientText rgbValues={['#d12d21 75%', '#FFFFFF']} direction={'to top right'}>
				{project.title}
			</GradientText>
		</h1>
		<ul class="project-details-list">
			<li>
				<span class="project-details-header">Description:</span>
				{@html project.description}
			</li>
			<li class="project-status">
				<span class="project-details-header">Project Status:</span>
				<span style="font-weight: 550">
					<GradientText
						rgbValues={[project.status.color + ' 80%', '#FFF']}
						direction={'to top right'}
					>
						{project.status.title}
					</GradientText>
				</span>
			</li>
			<li class="made-with">
				<span class="project-details-header">Made with:</span>
				{#each project.madeWith as mw}
					{@html ReturnSvg(mw)}
				{/each}
			</li>
			{#if Object.entries(project.availableAt || {}).length > 0}
				<li style="margin-top: auto">
					<span class="project-details-header">Available at:</span>
					{#each project.availableAt as location}
						<a title={location.alt} href={location.url}>{@html ReturnSvg(location.logo)}</a>
					{/each}
				</li>
			{/if}
		</ul>
	</div>
</div>

<style lang="scss">
	.project-card {
		flex-shrink: 0;
		width: 75vw;
		background: linear-gradient(to bottom left, #555555, #3b3b3b);
		border-radius: 5px;
		padding: 1rem;

		transition: scale 0.2s;

		display: flex;
		gap: 1rem;

		&.selected {
			scale: 105%;
			box-shadow: 0 0 10px 0px rgba(255, 255, 255, 0.15);
		}

		.project-image {
			img {
				border-radius: 5px;
			}
		}

		.project-details {
			background: linear-gradient(to bottom right, #131313, #000);
			border-radius: 5px;
			flex-grow: 1;
			padding: 1rem;

			display: flex;
			flex-direction: column;

			> h1 {
				text-decoration: underline;
				text-decoration-style: dashed;
			}

			&-list {
				> li,
				> li span {
					margin-top: 0.75rem;
					font-family: 'CascadiaCode';
				}

				list-style: none;
				display: flex;
				flex-direction: column;
				flex-grow: 1;
			}

			&-header {
				text-decoration: underline;
				text-decoration-style: dotted;
				font-weight: 450;
				color: limegreen;
			}

			:global(svg) {
				margin-right: 0.55rem;
				scale: 125%;
				transform: translateY(20%);
			}
		}
	}
</style>
