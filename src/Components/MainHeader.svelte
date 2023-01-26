<script lang="ts">
	import { fly } from 'svelte/transition';

	import { cubicOut } from 'svelte/easing';
</script>

<main>
	<div id="main-content">
		<div in:fly={{ x: -60, duration: 850, easing: cubicOut, delay: 100 }} id="title">
			Web Development
			<br />
			<div in:fly={{ x: -50, duration: 750, delay: 200, easing: cubicOut }} id="reimagined">
				Reimagined
			</div>
		</div>
	</div>
</main>

<style lang="scss">
	main {
		height: 100vh;

		#main-content {
			margin: 4em 5em;
			background-color: transparent;
			#title {
				font-size: 4em;
				font-weight: bold;

				#reimagined {
					font-size: 1.75em;
					background: linear-gradient(
						to right,
						rgb(218, 103, 8),
						rgb(212, 124, 51),
						rgb(238, 160, 97)
					);
					background-clip: text;
					-webkit-text-fill-color: transparent;

					margin-left: 0.75rem;
				}
			}
			z-index: 2;
			position: relative;
			display: inline-block;
		}
	}
</style>
