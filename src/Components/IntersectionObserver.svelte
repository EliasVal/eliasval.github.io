<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	export let steps = 100;
	export let threshold = 0;
	let element: HTMLElement;
	let percent: number;
	let observer: IntersectionObserver;
	let unobserve = () => {};
	let intersectionObserverSupport = true;
	let toggle = false;
	let toggleOnce = false;

	const dispatch = createEventDispatcher();

	function intersectPercent(entries: IntersectionObserverEntry[]) {
		entries.forEach((entry) => {
			percent = Math.round(Math.ceil(entry.intersectionRatio * 100));
			if (percent >= threshold) {
				if (!toggle) {
					dispatch('visible', element.children[0]);
					toggle = true;
				}
				if (!toggleOnce) {
					dispatch('visibleOnce', element.children[0]);
					toggleOnce = true;
				}
			} else {
				toggle = false;
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

<div bind:this={element}>
	<slot
		{percent}
		{unobserve}
		visible={toggle || !intersectionObserverSupport}
		visibleOnce={toggleOnce || !intersectionObserverSupport}
	/>
</div>
