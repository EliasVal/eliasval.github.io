<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		steps?: number;
		threshold?: number;
		visible?: () => void;
		children: any;
	}
	const { steps = 100, threshold = 50, children, visible = () => {} }: Props = $props();

	let element: HTMLElement;
	let percent: number;
	let observer: IntersectionObserver;
	let unobserve = () => {};
	let intersectionObserverSupport = $state(true);
	let toggleOnce = $state(false);

	function intersectPercent(entries: IntersectionObserverEntry[]) {
		entries.forEach((entry) => {
			percent = Math.round(Math.ceil(entry.intersectionRatio * 100));
			if (percent >= threshold) {
				if (!toggleOnce) {
					toggleOnce = true;
				}
				visible();
			}
		});
	}

	function stepsToThreshold(steps: number) {
		return [...Array(steps).keys()].map((n) => n / steps);
	}

	onMount(() => {
		intersectionObserverSupport =
			'IntersectionObserver' in window &&
			'IntersectionObserverEntry' in window &&
			'intersectionRatio' in window.IntersectionObserverEntry.prototype;

		const options = {
			threshold: stepsToThreshold(steps)
		};

		if (intersectionObserverSupport) {
			observer = new IntersectionObserver(intersectPercent, options);
			observer.observe(element);
			unobserve = () => observer.unobserve(element);
		}
		return unobserve;
	});
</script>

<section bind:this={element}>
	<!-- Replacement of visibleOnce -->
	{#if toggleOnce || !intersectionObserverSupport}
		{@render children()}
	{/if}
</section>

<style lang="scss">
	section {
		min-height: 100vh;

		position: relative;
		z-index: 2;

		margin: 0 0 0.5rem 0;
		// padding: 5rem 2rem;
	}

	@media screen and (min-width: 750px) {
		section {
			scroll-margin-top: 2.5rem;
		}
	}
</style>
