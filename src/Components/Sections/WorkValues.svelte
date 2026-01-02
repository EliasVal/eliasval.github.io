<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';
	import GradientText from '../GradientText.svelte';
	import ContentBox from '../ContentBox.svelte';
	import SectionTitle from '../SectionTitle.svelte';
</script>

<div id="workvalues">
	<SectionTitle rgbValues={['mediumpurple 50%', 'aquamarine']} direction={'145deg'}>
		Work Values
	</SectionTitle>
	<div class="content">
		<div in:fade={{ duration: 250, delay: 100, easing: cubicInOut }}>
			<ContentBox>
				<div in:slide={{ duration: 500, delay: 350, easing: cubicInOut }}>
					<div>
						<b>
							<GradientText rgbValues={['#F00F0F', '#F9F9F9']} direction={'145deg'}>
								Performance
							</GradientText>
						</b>: whether it is a website or a game, I strive to make my projects perform the best.
					</div>
					<div
						style="padding: 1rem 0; border-top: 1px dashed #fff; border-bottom: 1px dashed #fff; margin: 1rem 0"
					>
						<b>
							<GradientText rgbValues={['#0FF00F 50%', '#F9F9F9']} direction={'to top right'}>
								SEO & Accessibility
							</GradientText>
						</b>: I strive to achieve a perfect score in
						<a href="https://web.dev/measure/">Google's lighthouse</a> tool in the SEO and Accessibility
						criteria helping achieve a higher ranking in search engines such as Google and Bing, and allow
						people with impairments to use the website, which they could not do otherwise.
					</div>

					<div>
						<b>
							<GradientText rgbValues={['#0FF0F0', '#F9F9F9']} direction={'to top right'}>
								Design
							</GradientText>
						</b>: I create unique designs for every website and game I make so that every product
						will feel like a unique experience, such as this one. The designs may be simplistic, but
						they deliver exactly what they need to.
					</div>
				</div>
			</ContentBox>
			<br />
		</div>
		<span in:fade={{ duration: 1200, delay: 1000, easing: cubicInOut }}>
			<ContentBox
				sub={true}
				title="- Albert Einstein, 1933&nbsp;"
				titleStyle={{
					fontStyle: 'italic',
					textAlign: 'right',
					marginTop: '0.25rem'
				}}
				containerStyle={{ width: '100%', textAlign: 'left', paddingBottom: '0.35rem' }}
			>
				&ldquo; Everything should be made as simple as possible, but no simpler &rdquo;
			</ContentBox>
		</span>
	</div>
	<span aria-hidden="true" style="opacity: 0;">
		<SectionTitle rgbValues={['mediumpurple 50%', 'aquamarine']} direction={'145deg'}>
			Work Values
		</SectionTitle>
	</span>
</div>

<style lang="scss">
	#workvalues {
		display: flex;
		flex-direction: column;
		gap: 4rem;

		.content {
			flex-grow: 1;
			max-width: 60ch;
			width: 100%;
			align-self: center;
			display: flex;
			flex-direction: column;
			justify-content: center;

			> div {
				text-align: justify;

				b {
					display: inline-block;
				}
			}
		}
	}

	@media screen and (max-width: 687px) {
		.content {
			font-size: 2.5vw;
		}
	}
</style>
