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

		margin: 0 0 0.5em 0;
	}
</style>
