<script lang="ts">
	import GradientText from './GradientText.svelte';

	const { direction = '', rgbValues = [], stickLeft = false, children } = $props();
</script>

<h1 class={`${stickLeft ? 'stickLeft' : ''}`}>
	<GradientText {direction} {rgbValues}>
		{@render children()}
	</GradientText>
</h1>

<style lang="scss">
	h1 {
		margin: 2rem auto;
		max-width: 820px;
		width: 100%;
		font-size: 4rem;
	}

	h1.stickLeft {
		max-width: unset;
		margin: 2rem;
	}

	@media screen and (max-width: 920px) {
		h1 {
			margin: 2rem;
		}
	}

	@media screen and (max-width: 687px) {
		h1 {
			font-size: 8vw;
		}
	}
</style>
