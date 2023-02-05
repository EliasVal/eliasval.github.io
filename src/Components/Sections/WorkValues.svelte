<script lang="ts">
	import IntersectionObserver from './../IntersectionObserver.svelte';
	import { cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import GradientText from '../GradientText.svelte';
</script>

<div id="workvalues">
	<div class="header">
		<div in:fly={{ x: -50, duration: 850, delay: 100, easing: cubicOut }} class="title">
			<!-- About Me -->
			<GradientText rgbValues={['#503AC9', '#3B28EB', '#0FF0F0']} direction={'to top right'}>
				Work Values
			</GradientText>
		</div>
	</div>
	<IntersectionObserver steps={100} threshold={50} let:visibleOnce>
		{#if visibleOnce}
			<div class="content">
				<ul>
					<li in:fly={{ duration: 750, y: -50, delay: 500, easing: cubicOut }}>
						<b>
							<u>
								<GradientText rgbValues={['#F00F0F', '#F9F9F9']} direction={'to top right'}>
									Performance
								</GradientText>
							</u>
						</b>: whether it's a website, game or anything else, I strive to make it perform the
						best.
					</li>

					<li in:fly={{ duration: 750, y: -50, delay: 650, easing: cubicOut }}>
						<b>
							<u>
								<GradientText rgbValues={['#0FF00F', '#F9F9F9']} direction={'to top right'}>
									SEO & Accessibility
								</GradientText>
							</u>
						</b>: this one is more website specific, but I strive to achieve a perfect scoring in
						Google's lighthouse tool in the SEO and Accessibility criteria so that your website will
						be displayed higher in the search results, and allow people with certain impairments to
						use your website that they could not otherwise.
					</li>

					<li in:fly={{ duration: 750, y: -50, delay: 800, easing: cubicOut }}>
						<b>
							<u>
								<GradientText rgbValues={['#0FF0F0', '#F9F9F9']} direction={'to top right'}>
									Design
								</GradientText>
							</u>
						</b>: I come up with unique designs for every website and game I make so that every
						product will feel like an entirely unique experience, such as this one.
					</li>
				</ul>
			</div>
		{/if}
	</IntersectionObserver>
</div>

<style lang="scss">
	#workvalues {
		height: 100%;

		.header {
			margin: 4em 5em;
			background-color: transparent;
			.title {
				font-size: 4em;
				font-weight: bold;
			}
			display: inline-block;
		}

		.content {
			> ul {
				max-width: 60ch;
				margin: 0 auto;
				font-size: 1.3em;
				li {
					margin: 1em 0;
					b {
						display: inline-block;
					}
				}
			}
		}
	}
</style>
