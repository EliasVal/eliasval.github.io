<script lang="ts">
	import GradientText from './GradientText.svelte';
	import { fly, fade } from 'svelte/transition';

	import { cubicOut } from 'svelte/easing';
</script>

<main>
	<div id="main-content">
		<h1 id="title" in:fly={{ y: -150, duration: 1850, easing: cubicOut, delay: 100 }}>
			- Welcome -
		</h1>
		<h2 in:fade={{ duration: 1750, delay: 1950, easing: cubicOut }}>
			To my <GradientText rgbValues={['#EB7413 40%', '#E79C5E', '#F09712']} direction={'to right'}>
				Portfolio
			</GradientText>.
		</h2>
	</div>
	<!-- </div> -->
</main>

<style lang="scss">
	main {
		height: 100vh;
		width: 100%;

		display: flex;

		align-items: center;
		justify-content: center;

		#main-content {
			#title {
				font-size: 6em;
				font-weight: bold;
			}
			h2 {
				text-align: center;
			}
		}
	}
</style>
