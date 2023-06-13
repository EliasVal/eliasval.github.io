<script lang="ts">
	import IntersectionObserver from './IntersectionObserver.svelte';
</script>

<section>
	<IntersectionObserver steps={100} threshold={50} let:visibleOnce>
		{#if visibleOnce}
			<slot />
		{/if}
	</IntersectionObserver>
</section>

<style lang="scss">
	section {
		min-height: 100vh;

		position: relative;
		z-index: 2;

		margin: 0 0 0.5rem 0;
	}
</style>
