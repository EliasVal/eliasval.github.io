<script lang="ts">
	import { galleryState, nextProject, prevProject } from '$lib/projects-state.svelte';
	import GradientText from '../../GradientText.svelte';

	let startSwipeX: number = $state(0);

	interface Props {
		project: Project;
		projectIndex: number;
		projectCount: number;
	}

	const { project, projectIndex, projectCount }: Props = $props();

	function pointerDown(e: PointerEvent) {
		startSwipeX = e.clientX;
	}

	function pointerUp(e: PointerEvent) {
		const endSwipeX = e.clientX;
		const swipeDistance = endSwipeX - startSwipeX;

		const minSwipeDistance = 50;

		if (swipeDistance > minSwipeDistance) {
			prevProject(projectCount);
		} else if (swipeDistance < -minSwipeDistance) {
			nextProject(projectCount);
		}
	}
</script>

<div
	onpointerdown={pointerDown}
	onpointerup={pointerUp}
	class="project-card"
	class:selected={projectIndex == galleryState.index && !galleryState.inTransition}
	class:flyRightAnim={galleryState.inTransition && galleryState.flyDirection == 1}
	class:flyLeftAnim={galleryState.inTransition && galleryState.flyDirection == -1}
	class:stopRightAnim={!galleryState.inTransition && galleryState.flyDirection == 1}
	class:stopLeftAnim={!galleryState.inTransition && galleryState.flyDirection == -1}
>
	<div>
		<img class="w-1/3 rounded-md md:w-full" src="/images/{project.img}.jpg" alt={project.title} />
	</div>
	<div class="project-details">
		<h1 class="font-[Rubik]">
			<GradientText rgbValues={['#fff 25%', '#7f7f7f']} direction={'to bottom left'}>
				{project.title}
			</GradientText>
		</h1>
		<main class="flex grow flex-col gap-2">
			<article>
				<span class="project-details-header">Description</span>:
				{@html project.description}
			</article>

			<article class="project-status">
				<span class="project-details-header">Project Status</span>:
				<span style="font-weight: 550">
					<GradientText
						rgbValues={[project.status.color + ' 80%', '#FFF']}
						direction={'to top right'}
					>
						{project.status.title}
					</GradientText>
				</span>
			</article>

			<article class="made-with flex items-center gap-1">
				<span>
					<span class="project-details-header">Made with</span>:
				</span>
				<span>
					{#each project.madeWith as mw}
						<img src="/svgs/{mw.img}.svg" alt={mw.alt} title={mw.alt} />
					{/each}
				</span>
			</article>
		</main>
		<footer class="flex items-center justify-between">
			{#if Object.entries(project.availableAt || {}).length > 0}
				<span class="flex items-center gap-1.5">
					<span>
						<span class="project-details-header"> Available at </span>:
					</span>
					<span class="inline-flex items-center">
						{#each project.availableAt as location}
							<a title={location.alt} href={location.url}>
								<img src="/svgs/{location.logo}.svg" alt={location.alt} />
							</a>
						{/each}
					</span>
				</span>
			{/if}
		</footer>
	</div>
</div>

<style lang="scss">
	.project-card {
		touch-action: pan-y;

		--fly-deg: 0.75deg;
		--fly-stop-deg: 0.25deg;

		flex-shrink: 0;
		width: 75vw;
		background: linear-gradient(to bottom left, #555555, #3b3b3b);
		box-shadow: 0 0 0px 0px rgba(255, 255, 255, 0);

		border-radius: 5px;
		padding: 1rem;

		transition:
			scale 0.15s,
			box-shadow 0.25s,
			filter 0.15s;

		display: flex;
		flex-direction: row;
		gap: 1rem;
		filter: grayscale(0.5) brightness(0.3);

		&.selected {
			filter: grayscale(0) brightness(1);
			scale: 110%;
			box-shadow: 0 0 10px 0px rgba(255, 255, 255, 0.15);
		}

		.project-details {
			background: linear-gradient(to bottom right, #131313, #000);
			border-radius: 5px;
			flex-grow: 1;
			padding: 1rem;
			font-family: 'Cascadia Code';

			display: flex;
			flex-direction: column;

			> h1 {
				text-decoration: underline;
				text-decoration-style: dashed;
			}

			&-header {
				text-decoration: underline;
				text-decoration-style: dotted;
				font-weight: 450;
				color: rgb(102, 155, 199);
			}

			img {
				filter: invert(1);
				margin-right: 0.25rem;
			}
		}
	}

	.flyRightAnim {
		animation: fly-right 0.5s ease-in-out forwards;
	}

	.flyLeftAnim {
		animation: fly-left 0.5s ease-in-out forwards;
	}

	.stopRightAnim {
		animation: stop-right 0.25s ease-in-out forwards;
	}

	.stopLeftAnim {
		animation: stop-left 0.25s ease-in-out forwards;
	}

	@keyframes fly-right {
		from {
			transform: rotateZ(0deg);
		}
		to {
			transform: rotateZ(var(--fly-deg));
		}
	}

	@keyframes fly-left {
		from {
			transform: rotateZ(0deg);
		}
		to {
			transform: rotateZ(calc(-1 * var(--fly-deg)));
		}
	}

	@keyframes stop-right {
		from {
			transform: rotateZ(var(--fly-deg));
		}
		50% {
			transform: rotateZ(calc(-1 * var(--fly-stop-deg)));
		}
		to {
			transform: rotateZ(0);
		}
	}

	@keyframes stop-left {
		from {
			transform: rotateZ(calc(-1 * var(--fly-deg)));
		}
		50% {
			transform: rotateZ(var(--fly-stop-deg));
		}
		to {
			transform: rotateZ(0);
		}
	}

	@media screen and (max-width: 960px) {
		.project-card {
			flex-direction: column;
		}
	}
</style>
