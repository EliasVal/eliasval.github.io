<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';
	import ContentBox from '../../ContentBox.svelte';
	import SectionTitle from '../../SectionTitle.svelte';
	import { intersectionObserver } from '../../actions/intersection-observer';
	import { globalState } from '$lib/state.svelte';
	import Content from './content.svelte';

	let isVisible = $state(false);
</script>

<section
	id="workvalues"
	use:intersectionObserver={{
		onVisible: () => {
			globalState.activeSection = 2;
			isVisible = true;
		}
	}}
>
	{#if isVisible}
		<SectionTitle rgbValues={['mediumpurple 50%', 'aquamarine']} direction={'145deg'}>
			Work Values
		</SectionTitle>

		<div class="content">
			<div class="values" in:fade={{ duration: 250, delay: 100, easing: cubicInOut }}>
				<Content />
			</div>

			<span
				style="display: flex; justify-content: center;"
				in:fade={{ duration: 1200, delay: 1000, easing: cubicInOut }}
			>
				<ContentBox
					undertitle="- Albert Einstein, 1933&nbsp;"
					undertitleStyle={{
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
	{/if}
</section>

<style lang="scss">
	#workvalues {
		display: flex;
		flex-direction: column;
		gap: 4rem;

		.content {
			width: 100%;
			align-self: center;
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 4em;
		}
	}

	.values {
		display: flex;
		gap: 1em;
		flex-wrap: wrap;
		justify-content: center;
		margin: 0 5em;
	}
</style>
