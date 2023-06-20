<script lang="ts">
	import { galleryIsFocused } from '$lib/tools';
	import { onMount } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let sections: NodeListOf<HTMLElement>;
	let mounted = false;

	onMount(() => {
		sections = document.querySelectorAll('section');
		mounted = true;
	});
	let i = 0;
	const ScrollToNextSection = () => {
		i++;
		sections[i].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
	};
</script>

{#if i < 3 && mounted && !$galleryIsFocused}
	<button
		on:click={ScrollToNextSection}
		in:fly={{ y: 50, duration: 500, delay: 2750, easing: cubicOut }}
		out:fly={{ y: 50, duration: 200, easing: cubicOut }}
	>
		<img alt="" src="/svgs/arr-left.svg" style="" />
	</button>
{/if}

<style lang="scss">
	button {
		position: fixed;
		width: 3.5rem;
		height: 3.5rem;
		aspect-ratio: 1 / 1;
		bottom: 1.25rem;
		left: 50%;
		transform: translateX(-50%);
		border-radius: 50%;
		border: none;
		outline: none;
		img {
			aspect-ratio: 1 / 1;

			transition: all 0.2s;
			transform: translateY(-2%) rotateZ(-90deg);
		}

		&:hover,
		img:hover {
			img {
				transform: rotateZ(-90deg) translateX(-7%);
			}
		}
		cursor: pointer;
		pointer-events: all;

		z-index: 999999;
	}
</style>
