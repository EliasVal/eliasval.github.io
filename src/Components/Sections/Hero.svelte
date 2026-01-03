<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import GradientText from '../GradientText.svelte';
	import { cubicInOut } from 'svelte/easing';
	import { intersectionObserver } from '../actions/intersection-observer';
	import logoWhite from '../../icons/logo-white.svg?raw';
	import { activeSection } from '$lib/current-section.svelte';

	let isVisible = $state(false);
</script>

<section
	id="hero"
	use:intersectionObserver={{
		onVisible: () => {
			activeSection.index = 0;
			isVisible = true;
		}
	}}
>
	{#if isVisible}
		<div
			class="pointer-events-none absolute top-1/2 z-0 w-[85%] max-w-5xl -translate-y-[95%] [&>svg]:opacity-10"
			in:fade={{ delay: 150, duration: 800, easing: cubicInOut }}
		>
			{@html logoWhite}
		</div>

		<h1
			class="z-10 text-[8vw] md:text-6xl"
			in:fly={{ y: 100, delay: 700, duration: 1000, easing: cubicInOut }}
		>
			Hi, I'm
			<GradientText rgbValues={['#EA6302', '#EB7413', '#F09712']} direction={'to right'}>
				Elias Valkonsky
			</GradientText>
		</h1>

		<h2
			class="secondary-title text-[4vw] md:text-3xl"
			in:fly={{ y: 100, delay: 850, duration: 1000, easing: cubicInOut }}
		>
			Welcome to my
			<GradientText rgbValues={['#FFFF0F', '#FFFF42']} direction={'to right'}>
				Portfolio
			</GradientText>
		</h2>

		<article class="socials" in:fade={{ delay: 2000, duration: 1750, easing: cubicInOut }}>
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
				<img class="invert" alt="" src="/svgs/github.svg" />
			</a>
		</article>
	{/if}
</section>

<style lang="postcss">
	@reference "tailwindcss";

	section {
		display: flex;
		flex-direction: column;

		justify-content: center;
		align-items: center;

		padding: 1rem;
		gap: 0.75rem;
	}

	.socials {
		display: flex;
		justify-content: center;
		gap: 1rem;

		img {
			@apply w-6 md:w-8;
		}
	}
</style>
