<script lang="ts">
	import { slide } from 'svelte/transition';
	import ContentBox from '../../ContentBox.svelte';
	import SectionTitle from '../../SectionTitle.svelte';
	import { cubicInOut } from 'svelte/easing';
	import { globalState } from '$lib/state.svelte';
	import { intersectionObserver } from '../../actions/intersection-observer';
	import Techstack from './Techstack.svelte';

	const age: number =
		new Date(new Date().valueOf() - new Date(2005, 11, 25).valueOf()).getFullYear() - 1970;

	let isVisible = $state(false);
</script>

<section
	id="about"
	class="[&>header]:self-stretch"
	use:intersectionObserver={{
		onVisible: () => {
			globalState.activeSection = 1;
			isVisible = true;
		}
	}}
>
	{#if isVisible}
		<SectionTitle rgbValues={['mediumpurple 45%', '#FFFFFF']} direction={'to top right'}>
			About Me & Work experience
		</SectionTitle>

		<ContentBox>
			<p in:slide={{ duration: 700, delay: 200, easing: cubicInOut }}>
				I'm Elias, {age == 18 ? 'an' : 'a'}
				{age}-year-old developer. I've been programming as a hobbyist since I was 12, and
				professionally as a Fullstack Web Developer since 17. I started my journey with simple
				console apps in C# and then picked up web and game development.
			</p>
		</ContentBox>

		<span class="work-experience">
			<ContentBox title="Tech-Stack">
				<article in:slide={{ duration: 700, delay: 600, easing: cubicInOut }}>
					<Techstack />
				</article>
			</ContentBox>

			<ContentBox title="Work Experience" containerStyle={{ height: 'min-content' }}>
				<article in:slide={{ duration: 700, delay: 1000, easing: cubicInOut }}>
					<ul style="list-style: none;">
						<li>
							<b>Fullstack Developer at Clarity</b> - Between 2023 and 2024, I worked as a Fullstack Developer
							at Clarity Operation Services LTD., building a large-scale financial platform for pension
							and employment management. The project was developed using Next.js, featuring comprehensive
							testing and robust CI/CD pipelines
						</li>
					</ul>
				</article>
			</ContentBox>
		</span>
	{/if}
</section>

<style lang="scss">
	#about {
		flex-grow: 1;
		display: flex;
		gap: 2rem;
		flex-direction: column;
		align-items: center;
	}

	.work-experience {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
