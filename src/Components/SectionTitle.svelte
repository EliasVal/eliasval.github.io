<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import GradientText from './GradientText.svelte';
	import { cubicInOut } from 'svelte/easing';

	const { direction = '', rgbValues = [], children } = $props();
</script>

<header in:fade={{ duration: 850, easing: cubicInOut, delay: 100 }}>
	<h1 in:fade={{ duration: 500, easing: cubicInOut, delay: 200 }}>
		<GradientText {direction} {rgbValues}>
			{@render children()}
		</GradientText>
	</h1>
</header>

<style lang="scss">
	header {
		text-align: center;
		border: 0.25rem rgba($color: #fff, $alpha: 0.25);
		border-style: dashed solid;
		border-radius: 10px;
		padding: 1.5rem 0;
		margin: 0 3rem;
	}

	h1 {
		width: 100%;
		font-size: 4rem;
	}

	@media screen and (max-width: 687px) {
		h1 {
			font-size: 8vw;
		}
	}
</style>
