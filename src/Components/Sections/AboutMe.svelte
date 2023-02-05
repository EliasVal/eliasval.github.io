<script lang="ts">
	import GradientText from '../GradientText.svelte';
	import { fly } from 'svelte/transition';

	import { cubicOut } from 'svelte/easing';

	const age: number =
		// @ts-ignore
		new Date(new Date() - new Date(2005, 11, 25)).getFullYear() - 1970;
</script>

<div id="about">
	<div class="header">
		<div in:fly={{ x: -60, duration: 850, easing: cubicOut, delay: 100 }} class="title">
			A little bit
			<br />
			<div in:fly={{ x: -50, duration: 750, delay: 200, easing: cubicOut }} class="subtitle">
				<!-- About Me -->
				<GradientText rgbValues={['#0FF0FF', '#0FFFFF', '#FFFFFF']} direction={'to top right'}>
					About Me
				</GradientText>
			</div>
		</div>
	</div>
	<div class="content">
		<p in:fly={{ x: 50, delay: 950, easing: cubicOut, duration: 1750 }}>
			Hello! I'm Elias, a {age}-year-old developer. I can make anything from Discord bots, to
			websites, games and pretty much anything in between. I picked up my first programming language
			at 12 years old and from there it's history :)<br />
			My current skill set includes:
			<span class="skillset">
				<GradientText rgbValues={['#61DBFB', '#FFFFFF']} direction="to top right">
					React
				</GradientText>,
				<GradientText rgbValues={['#FF3E00 30%', '#FA8761']} direction="to top right">
					Svelte & SvelteKit
				</GradientText>,
				<GradientText rgbValues={['#FFC928 60%', '#FFFFFF']} direction="to top right">
					JavaScript
				</GradientText>,
				<GradientText rgbValues={['#3178C6', '#FFFFFF']} direction="to top right">
					TypeScript
				</GradientText>,
				<GradientText rgbValues={['#F58410', '#FFA713', '#FFCB2D']} direction="to top right">
					Firebase
				</GradientText>
				<span style="font-weight: normal">and</span>
				<GradientText rgbValues={['#68217A', '#822C98', '#953DAC']} direction="to top right">
					C# (C Sharp)
				</GradientText>.
			</span>
		</p>
	</div>
</div>

<style lang="scss">
	#about {
		height: 100%;

		.header {
			margin: 4em 5em;
			background-color: transparent;
			.title {
				font-size: 4em;
				font-weight: bold;

				.subtitle {
					font-size: 1.75em;
					margin-left: 0.75rem;
				}
			}
			display: inline-block;
		}

		.content {
			> p {
				max-width: 60ch;
				margin: 0 auto;
				font-size: 1.3em;
				text-align: justify;
				.skillset {
					font-weight: bold;
				}
			}
		}
	}
</style>
