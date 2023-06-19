<script lang="ts">
	import { onMount } from 'svelte';

	export let rgbValues: string[];
	export let direction: string;

	let elm: HTMLElement;

	// @ts-ignore
	elm = elm;

	onMount(() => {
		elm.style.backgroundImage = `linear-gradient(${direction}, ${rgbValues.reduce((p, c) => {
			return p + ', ' + c;
		})})`;

		// Get rid of trailing space
		elm.innerText = elm.innerText.replaceAll(/\t|\n|(\s$)/g, '');
	});
</script>

<span bind:this={elm}>
	<slot />
</span>

<style>
	span {
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
