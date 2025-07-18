<script lang="ts">
	import GradientText from './GradientText.svelte';

	const { direction = '', rgbValues = [], stickLeft = false, children } = $props();
</script>

<div>
	<h1>
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
