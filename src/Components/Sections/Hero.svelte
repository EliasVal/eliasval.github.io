<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import GradientText from '../GradientText.svelte';
	import { cubicInOut } from 'svelte/easing';
	import { globalState } from '$lib/state.svelte';
	import { intersectionObserver } from '../actions/intersection-observer';

	let isVisible = $state(false);
</script>

<section
	id="hero"
	use:intersectionObserver={{
		onVisible: () => {
			globalState.activeSection = 0;
			isVisible = true;
		}
	}}
>
	{#if isVisible}
		<img
			in:fade={{ delay: 150, easing: cubicInOut, duration: 800 }}
			src="/svgs/logo-white.svg"
			alt=""
		/>
		<div class="content">
			<h1 class="primary-title" in:fly={{ y: 100, delay: 700, duration: 1000, easing: cubicInOut }}>
				Hi, I'm
				<GradientText rgbValues={['#EA6302', '#EB7413', '#F09712']} direction={'to right'}>
					Elias Valkonsky
				</GradientText>
			</h1>
			<h2
				class="secondary-title"
				in:fly={{ y: 100, delay: 800, duration: 1000, easing: cubicInOut }}
			>
				Welcome to my
				<GradientText rgbValues={['#FFFF0F', '#FFFF42']} direction={'to right'}>
					Portfolio
				</GradientText>
			</h2>
			<div class="socials" in:fade={{ delay: 2000, duration: 1750, easing: cubicInOut }}>
				<a href="https://instagram.com/eliasval_" title="Instagram" target="_blank">
					<img alt="" src="/svgs/instagram.svg" />
				</a>
				<a
					href="https://www.linkedin.com/in/elias-valkonsky-2a9091282"
					title="LinkedIn"
					target="_blank"
				>
					<img alt="" src="/svgs/linkedin.svg" />
				</a>
				<a href="https://github.com/eliasval" title="GitHub" target="_blank">
					<img style="filter: invert(1);" alt="" src="/svgs/github.svg" />
				</a>
			</div>
		</div>
	{/if}
</section>

<style lang="scss">
	section {
		min-height: 100vh;
		position: relative;
		display: flex;
		flex-direction: column;

		justify-content: center;
		align-items: center;

		padding: 1rem;
		box-sizing: border-box;
	}

	section > img {
		position: absolute;
		width: 95%;
		max-width: 1024px;
		opacity: 0.1;
		top: 50%;
		transform: translateY(-85%);
		pointer-events: none;
	}

	.content {
		text-align: center;
		position: relative;

		.primary-title {
			font-size: 4rem;
			margin-bottom: 1rem;
			position: relative;
		}

		.secondary-title {
			font-size: 1.75rem;
		}
	}

	.socials {
		position: absolute;
		transform: translateY(150%);
		bottom: 0;
		width: 100%;

		display: flex;
		justify-content: center;
		gap: 1rem;

		img {
			width: 2rem;
			height: 2rem;
		}
	}

	@media screen and (max-width: 782px) {
		.content {
			.primary-title {
				font-size: 8vw;
			}

			.secondary-title {
				font-size: 3.5vw;
			}
		}
	}
</style>
