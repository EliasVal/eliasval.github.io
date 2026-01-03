<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		direction: string;
		rgbValues: string[];
		children: any;
	}

	const { rgbValues, direction, children }: Props = $props();

	let elm: HTMLElement;

	onMount(() => {
		elm.style.backgroundImage = `linear-gradient(${direction}, ${rgbValues.reduce((p, c) => {
			return p + ', ' + c;
		})})`;

		if (elm.innerText != '') elm.innerText = elm.innerText.trim();
	});
</script>

<span bind:this={elm}>
	{@render children()}
</span>

<style>
	span {
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
