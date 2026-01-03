<script lang="ts">
	import ProjectGallery from './ProjectGallery.svelte';

	import { projects } from '$lib/data';

	import { onMount } from 'svelte';
	import SectionTitle from '../../SectionTitle.svelte';
	import { intersectionObserver } from '../../actions/intersection-observer';
	import { galleryState } from '$lib/projects-state.svelte';
	import { activeSection } from '$lib/current-section.svelte';

	onMount(() => (galleryState.isFocused = true));

	let isVisible = $state(false);
</script>

<section
	id="projects"
	use:intersectionObserver={{
		onVisible: () => {
			activeSection.index = 3;
			isVisible = true;
		}
	}}
>
	{#if isVisible}
		<SectionTitle rgbValues={['#0FF0FF', '#0FFFFF', '#FFFFFF']} direction={'to top right'}>
			My Projects
		</SectionTitle>
		<ProjectGallery {projects} />
	{/if}
</section>

<style lang="scss">
	#projects {
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		gap: 5rem;
		padding-bottom: 3rem;
	}
</style>
