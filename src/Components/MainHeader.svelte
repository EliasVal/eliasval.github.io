<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	import { cubicOut } from 'svelte/easing';
</script>

<main>
	<!-- <div id="main-content"> -->
	<!-- <div in:fly={{ x: -60, duration: 850, easing: cubicOut, delay: 100 }} id="title">
			Take your website to the
			<br />
			<div in:fly={{ x: -50, duration: 750, delay: 200, easing: cubicOut }} id="reimagined">
				Next Level
			</div>
		</div> -->
	<div id="main-content">
		<h1 id="title" in:fly={{ y: -150, duration: 1850, easing: cubicOut, delay: 100 }}>
			- Welcome -
		</h1>
		<h2 in:fade={{ duration: 1750, delay: 1950, easing: cubicOut }}>
			To my <span id="portfolio">Portfolio</span>.
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
			// 	width: 100%;
			// 	height: fit-content;
			// 	// margin: 4em 5em;
			// 	margin: 0 auto;
			// 	background-color: transparent;
			#title {
				font-size: 6em;
				font-weight: bold;

				// text-align: center;
			}
			h2 {
				text-align: center;
				#portfolio {
					// font-size: 1.75em;
					background: linear-gradient(
						to right,
						rgb(235, 116, 19) 40%,
						rgb(231, 156, 94),
						rgb(240, 151, 18)
					);
					background-clip: text;
					-webkit-text-fill-color: transparent;

					// margin-left: 0.75rem;
				}
			}
			// z-index: 2;
			// position: relative;
			// display: inline-block;
		}
	}
</style>
