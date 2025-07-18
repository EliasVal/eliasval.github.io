<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import GradientText from './GradientText.svelte';
	import { cubicOut } from 'svelte/easing';

	const { direction = '', rgbValues = [], stickLeft = false, children } = $props();
</script>

<div in:fade={{ duration: 850, easing: cubicOut, delay: 100 }}>
	<h1 in:fly={{ y: -10, duration: 850, easing: cubicOut, delay: 350 }}>
		<GradientText {direction} {rgbValues}>
			{@render children()}
		</GradientText>
	</h1>
</div>

<style lang="scss">
	div {
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
